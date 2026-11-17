/** Decorative cluster of rounded squares, echoing the logo mark. */
const layouts = {
  a: [
    { x: 0, y: 0, s: 28, c: "bg-blue-400/70" },
    { x: 36, y: 0, s: 28, c: "bg-blue-600/80" },
    { x: 0, y: 36, s: 28, c: "bg-white/25" },
    { x: 36, y: 36, s: 28, c: "bg-blue-400/40" },
    { x: 72, y: 18, s: 18, c: "bg-white/40" },
    { x: 100, y: 52, s: 12, c: "bg-blue-400/60" },
  ],
  b: [
    { x: 20, y: 0, s: 22, c: "bg-white/30" },
    { x: 0, y: 30, s: 22, c: "bg-blue-400/60" },
    { x: 30, y: 30, s: 22, c: "bg-blue-600/70" },
    { x: 60, y: 30, s: 14, c: "bg-white/20" },
    { x: 30, y: 60, s: 14, c: "bg-blue-400/40" },
  ],
  light: [
    { x: 0, y: 0, s: 22, c: "bg-blue-400/25" },
    { x: 30, y: 0, s: 22, c: "bg-blue-600/15" },
    { x: 30, y: 30, s: 22, c: "bg-blue-400/20" },
    { x: 60, y: 14, s: 14, c: "bg-navy-900/10" },
  ],
} as const;

export function PixelSquares({
  variant = "a",
  className = "",
}: {
  variant?: keyof typeof layouts;
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="relative h-[120px] w-[120px]">
        {layouts[variant].map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-md ${p.c}`}
            style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          />
        ))}
      </div>
    </div>
  );
}
