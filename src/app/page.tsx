import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, Clock, Headphones, ShieldCheck, Users } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Eyebrow, Icon } from '@/components/Brand';
import { services, serviceHref } from '@/data/services';
import { industries, industryHref } from '@/data/industries';
import { clients, stats, steps } from '@/data/site';

const features = [
  { icon: ShieldCheck, title: 'Trusted Expertise', text: 'Experienced consultants across AI, cloud, data and infrastructure.' },
  { icon: Users, title: 'Skilled IT Talent', text: 'Pre-screened professionals for contract and permanent roles.' },
  { icon: Clock, title: 'On-Time Delivery', text: 'Clear plans, regular reporting and accountable delivery teams.' },
];

const why = [
  { icon: Award, title: 'Proven experience', text: 'Our consultants have planned, built and supported real enterprise systems.' },
  { icon: Users, title: 'One partner', text: 'Technology delivery and IT staffing from the same team, so nothing gets lost.' },
  { icon: ShieldCheck, title: 'Security first', text: 'Security, compliance and data governance are built into every engagement.' },
  { icon: Headphones, title: 'Ongoing support', text: 'We stay with you after go-live to monitor, improve and scale.' },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Feature boxes overlapping the slider */}
      <section className="relative z-20 -mt-14">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="flex gap-5 rounded-xl bg-white p-7 shadow-[0_20px_45px_-20px_rgba(4,34,87,.35)]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-synetra-mist text-synetra-blue"><f.icon className="h-7 w-7" strokeWidth={1.7} /></span>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-synetra-slate">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about.jpg" alt="Synetra Solutions technology consulting" className="w-full rounded-xl object-cover shadow-lg" />
            <div className="absolute -bottom-6 right-6 rounded-xl bg-synetra-blue px-7 py-5 text-white shadow-xl sm:right-10">
              <p className="font-display text-4xl font-bold"><Counter value={stats[0].value} /></p>
              <p className="text-sm text-white/85">{stats[0].label}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>About Synetra</Eyebrow>
            <h2 className="section-title">Your trusted partner for IT consulting and technology talent</h2>
            <p className="mt-5 text-lg leading-relaxed text-synetra-slate">
              Synetra Solutions LLC helps organisations plan, build and run the technology their business depends on. We bring together experienced consultants and skilled IT professionals so strategy, delivery and people stay connected.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {['AI & automation solutions', 'Cloud migration & DevOps', 'Data management & analytics', 'IT staffing & executive search'].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-synetra-navy"><CheckCircle2 className="h-5 w-5 shrink-0 text-synetra-sky" />{t}</li>
              ))}
            </ul>
            <Link href="/about/" className="btn-primary mt-9">Read More <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-synetra-mist py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="section-title">Technology solutions and talent for every stage of growth</h2>
            <p className="mt-4 text-lg text-synetra-slate">Six service lines that work on their own or together as one programme.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link href={serviceHref(s)} className="card group flex h-full flex-col overflow-hidden p-8">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-synetra-blue transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-synetra-mist text-synetra-blue transition-colors group-hover:bg-synetra-blue group-hover:text-white"><Icon name={s.icon} className="h-8 w-8" /></span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-synetra-slate">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-synetra-blue">Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-synetra-navy py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/page-banner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-site relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-white sm:text-5xl"><Counter value={s.value} /></p>
              <p className="mt-2 text-[15px] text-white/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <Eyebrow>Industries We Serve</Eyebrow>
              <h2 className="section-title">Sector experience you can rely on</h2>
            </Reveal>
            <Reveal delay={100}><Link href="/industries/" className="btn-outline">View All Industries</Link></Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 80}>
                <Link href={industryHref(ind)} className="group block overflow-hidden rounded-xl bg-white shadow-[0_14px_36px_-20px_rgba(4,34,87,.35)]">
                  <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/industry-${i + 1}.jpg`} alt={ind.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-synetra-blue shadow"><Icon name={ind.icon} /></span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold group-hover:text-synetra-blue">{ind.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{ind.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-synetra-blue">Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-synetra-mist py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="section-title">Why businesses choose Synetra Solutions</h2>
            <p className="mt-5 text-lg leading-relaxed text-synetra-slate">We combine technical depth with a strong talent network, so you get practical solutions and the right people to deliver them.</p>
            <Link href="/contact/" className="btn-primary mt-8">Talk to an Expert <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 70} className="rounded-xl bg-white p-7 shadow-sm">
                <w.icon className="h-9 w-9 text-synetra-blue" strokeWidth={1.6} />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="section-title">A simple, proven process</h2>
          </Reveal>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <span aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-synetra-line md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="relative text-center">
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-synetra-blue font-display text-xl font-bold text-white ring-8 ring-white">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-synetra-line py-12">
        <div className="container-site">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-synetra-slate">Trusted by leading organisations</p>
          <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track flex w-max gap-6">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="flex h-16 w-44 items-center justify-center rounded-lg border border-synetra-line font-display font-semibold text-synetra-slate/60">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
