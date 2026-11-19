import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import TideShader from '@/components/motion/TideShader';
import Magnetic from '@/components/motion/Magnetic';
import ScrubText from '@/components/home/ScrubText';
import HorizontalServices from '@/components/home/HorizontalServices';
import VelocityMarquee from '@/components/home/VelocityMarquee';
import IndustryList from '@/components/home/IndustryList';
import StackingSteps from '@/components/home/StackingSteps';
import CountUp from '@/components/home/CountUp';
import BigCTA from '@/components/BigCTA';
import Reveal from '@/components/Reveal';
import { clients, stats } from '@/data/site';

function RotatingBadge() {
  const text = 'IT CONSULTING • CLOUD • AI • TALENT • ';
  return (
    <div className="relative h-32 w-32" aria-hidden>
      <svg viewBox="0 0 120 120" className="spin-slow h-full w-full">
        <defs><path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
        <text className="fill-white/80 font-sans text-[10.5px] font-semibold tracking-[0.18em]"><textPath href="#circ">{text}</textPath></text>
      </svg>
      <span className="absolute inset-0 m-auto grid h-10 w-10 grid-cols-2 gap-1">
        <span className="rounded-[3px] bg-synetra-navy ring-1 ring-white/30" /><span className="rounded-[3px] bg-synetra-sky" />
        <span className="rounded-[3px] bg-synetra-blue" /><span />
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-synetra-abyss text-white">
        <TideShader />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(2,10,28,.85))]" />
        {/* fine grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="container-site relative flex flex-1 flex-col justify-end pb-10 pt-40 sm:pb-14">
          <div className="absolute right-5 top-36 hidden sm:right-8 md:block"><RotatingBadge /></div>

          <p className="mb-8 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-synetra-sky" /> Synetra Solutions LLC · IT consulting partner
          </p>

          <h1 className="font-display text-[13vw] font-normal leading-[0.92] !text-white sm:text-[10.5vw] lg:text-[8.6rem] xl:text-[9.6rem]" aria-label="Engineering the next era of IT.">
            <span className="line-mask"><span style={{ animationDelay: '.15s' }}>Engineering</span></span>
            <span className="line-mask"><span style={{ animationDelay: '.3s' }}>the <span className="serif-i text-glow pr-2 text-[1.12em]">next</span> era</span></span>
            <span className="line-mask"><span style={{ animationDelay: '.45s' }}>of IT<span className="text-synetra-sky">.</span></span></span>
          </h1>

          <div className="mt-12 grid items-end gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.2fr_auto_1fr]">
            <p className="max-w-md text-[17px] leading-relaxed text-white/75">
              We plan, build and run the AI, cloud and data systems your business depends on, and bring in the IT talent to deliver them.
            </p>
            <a href="#manifesto" className="hidden flex-col items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60 md:flex">
              Scroll
              <span className="relative h-14 w-px overflow-hidden bg-white/15"><span className="scroll-line absolute inset-0 bg-synetra-sky" /></span>
            </a>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Magnetic>
                <Link href="/contact/" className="btn-white">Start a project <span className="arrow !bg-synetra-navy/10"><ArrowUpRight className="h-4 w-4" /></span></Link>
              </Magnetic>
              <Magnetic>
                <Link href="/services/" className="btn-ghost-light">Our services</Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section id="manifesto" className="relative bg-synetra-paper py-28 sm:py-40">
        <div className="container-site">
          <span className="eyebrow">( 01 ) Who we are</span>
          <ScrubText
            className="mt-10 font-display text-[2rem] leading-[1.15] text-synetra-navy sm:text-5xl lg:text-[4.1rem]"
            text="Synetra is where *intelligent* technology meets *exceptional* people. One partner to plan it, build it, run it and staff it, from the first workshop to long after go-live."
          />
          <div className="mt-24 grid grid-cols-2 gap-y-12 border-t border-synetra-navy/15 pt-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className={`pr-6 ${i ? 'lg:border-l lg:border-synetra-navy/15 lg:pl-8' : ''}`}>
                <p className="font-display text-6xl text-synetra-navy sm:text-7xl"><CountUp value={s.value} /></p>
                <p className="mt-3 max-w-[14rem] text-[15px] text-synetra-slate">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES (pinned horizontal) ================= */}
      <HorizontalServices />

      {/* ================= MARQUEE ================= */}
      <section className="bg-synetra-paper pt-20 sm:pt-28">
        <VelocityMarquee rows={[['Cloud', 'AI Agents', 'DevOps', 'Data'], ['Talent', 'Security', 'Strategy', 'Scale']]} />
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-synetra-paper py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="eyebrow">( 03 ) Industries</span>
              <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">Where the stakes are <span className="serif-i text-gradient">highest.</span></h2>
            </div>
            <p className="max-w-sm text-synetra-slate">Regulation, customers and data look different in every sector. Our teams bring that context with them from day one.</p>
          </div>
          <IndustryList />
        </div>
      </section>

      {/* ================= PROCESS (stacking) ================= */}
      <section className="bg-synetra-mist py-24 sm:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">( 04 ) How we engage</span>
            <h2 className="mt-5 text-4xl leading-[1.05] sm:text-6xl">From first call to <span className="serif-i text-gradient">lasting</span> results.</h2>
            <p className="mt-6 max-w-sm text-lg text-synetra-slate">The same disciplined rhythm whether you need one expert or an entire delivery team.</p>
            <Link href="/contact/" className="mt-8 inline-flex items-center gap-2 font-semibold text-synetra-blue">Plan your engagement <ArrowDownRight className="h-4 w-4 -rotate-90" /></Link>
          </div>
          <StackingSteps />
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="overflow-hidden bg-synetra-paper py-16">
        <div className="container-site flex flex-col items-center gap-8 lg:flex-row">
          <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.28em] text-synetra-slate">Trusted by teams across industries</p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee-track flex w-max gap-14">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="font-display text-2xl text-synetra-navy/30">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BigCTA />
    </>
  );
}
