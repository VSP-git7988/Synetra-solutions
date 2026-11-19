'use client';
import { useEffect, useRef } from 'react';

/**
 * Full-bleed WebGL background: a slow, flowing "tide" of light in the logo's blues,
 * with a bright S-shaped band (the logo swoosh) drifting through it. Reacts softly to the cursor.
 * Falls back to a CSS gradient when WebGL is unavailable or motion is reduced.
 */
const FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uIntensity;
// palette from the logo
const vec3 ABYSS = vec3(0.008, 0.039, 0.110);
const vec3 NAVY  = vec3(0.016, 0.133, 0.341);
const vec3 BLUE  = vec3(0.004, 0.384, 0.714);
const vec3 SKY   = vec3(0.000, 0.592, 0.875);
const vec3 GLOW  = vec3(0.361, 0.784, 1.000);

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.03; a*=.5; } return v; }

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - .5*uRes.xy) / uRes.y;
  float t = uTime * .06;
  vec2 m = (uMouse - .5) * vec2(uRes.x/uRes.y, 1.);

  // domain-warped flow
  vec2 q = vec2(fbm(p*1.4 + t), fbm(p*1.4 - t + 3.1));
  vec2 r = vec2(fbm(p*1.8 + 2.*q + vec2(1.7,9.2) + t*1.3), fbm(p*1.8 + 2.*q + vec2(8.3,2.8) - t));
  float f = fbm(p*1.6 + 2.2*r);

  // S-swoosh band: a sine curve sweeping across, bending toward the cursor
  float curve = .22*sin(p.x*2.2 + t*6. + r.x*1.5) - .18*p.x + .08*m.y;
  float d = abs(p.y - curve - (length(p - m) < .6 ? .06*(.6-length(p-m)) : 0.));
  float band = smoothstep(.34, 0., d) * (.55 + .45*f);
  float core = smoothstep(.05, 0., d) * .5;

  vec3 col = mix(ABYSS, NAVY, smoothstep(.15, .85, f));
  col = mix(col, BLUE, smoothstep(.5, 1., f) * .55);
  col += SKY * band * .55 * uIntensity;
  col += GLOW * core * uIntensity * (.6 + .4*sin(t*8.));
  col += SKY * .12 * smoothstep(.7, 0., length(p - m)) * uIntensity;

  // vignette toward abyss at edges and bottom
  col = mix(col, ABYSS, smoothstep(.55, 1.25, length(p*vec2(.8,1.1))));
  col = mix(ABYSS, col, smoothstep(0., .35, uv.y));
  gl_FragColor = vec4(col, 1.);
}`;

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0., 1.); }`;

export default function TideShader({ className = '', intensity = 1 }: { className?: string; intensity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) { canvas.style.display = 'none'; return; }

    const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.display = 'none'; return; }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uMouse = gl.getUniformLocation(prog, 'uMouse');
    const uInt = gl.getUniformLocation(prog, 'uIntensity');

    let mx = 0.62, my = 0.55, tx = mx, ty = my, raf = 0, visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr * 0.75));
      canvas.height = Math.max(1, Math.floor(h * dpr * 0.75));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width; ty = 1 - (e.clientY - r.top) / r.height;
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    resize();
    addEventListener('resize', resize);
    addEventListener('mousemove', onMove);

    const start = performance.now();
    const frame = (now: number) => {
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      if (visible) {
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, reduced ? 12 : (now - start) / 1000);
        gl.uniform2f(uMouse, mx, my);
        gl.uniform1f(uInt, intensity);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize); removeEventListener('mousemove', onMove); };
  }, [intensity]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[radial-gradient(120%_80%_at_70%_40%,#0162B6_0%,#042257_45%,#020A1C_80%)] ${className}`} aria-hidden>
      <canvas ref={ref} className="h-full w-full" />
    </div>
  );
}
