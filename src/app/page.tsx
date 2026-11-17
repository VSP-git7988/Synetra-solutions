import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { IndustryCard } from "@/components/IndustryCard";
import { LogoStrip } from "@/components/LogoStrip";
import { PixelSquares } from "@/components/PixelSquares";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatStrip } from "@/components/StatStrip";
import { HeroVisual } from "@/components/home/HeroVisual";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getIcon, type IconName } from "@/lib/icons";

const pillars: { title: string; text: string; icon: IconName }[] = [
  { title: "Trusted Partner", text: "Candid advice and long-term relationships built on doing what we say.", icon: "ShieldCheck" },
  { title: "Innovation-led", text: "AI and modern data practices embedded in everything we deliver.", icon: "Lightbulb" },
  { title: "Talent Network", text: "Deep, pre-vetted networks of leaders, specialists and delivery teams.", icon: "Network" },
  { title: "Measurable Impact", text: "Clear success measures agreed up front and reported throughout.", icon: "TrendingUp" },
  { title: "Excellence", text: "High standards in every hire, model, plan and deliverable.", icon: "Gem" },
  { title: "Global Reach", text: "US-based leadership with access to talent and expertise worldwide.", icon: "Globe" },
];

const howWeWork = [
  { title: "Discover", description: "We listen first, mapping your goals, constraints, data and people to define what success looks like." },
  { title: "Design", description: "We shape the right mix of AI, data, talent and delivery into a practical, prioritized plan." },
  { title: "Deliver", description: "Our teams execute with clear ownership, visible progress and no surprises." },
  { title: "Optimize", description: "We measure results, refine what's working and scale the impact over time." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-brand-gradient pb-28 pt-32 text-white md:pb-36 md:pt-40">
        <div aria-hidden className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]" />
        <PixelSquares className="left-[46%] top-24 hidden opacity-70 lg:block" variant="b" />
        <PixelSquares className="-bottom-6 -left-6 opacity-60" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-blue-400" />
              AI-first consulting &amp; talent partner
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Intelligence, Talent and Delivery for{" "}
              <span className="bg-gradient-to-r from-white to-sky-50/70 bg-clip-text text-transparent">What&apos;s Next</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Synetra brings together AI, trusted data and exceptional people to help organizations make smarter
              decisions, build stronger teams and deliver change that lasts.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" onDark arrow>
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary" onDark>
                Talk to Us
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <StatStrip />

      {/* About preview */}
      <section className="section-y" aria-labelledby="about-preview-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              <span aria-hidden className="h-1.5 w-1.5 rounded-[2px] bg-blue-400" />
              Who we are
            </p>
            <h2 id="about-preview-title" className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              One partner for the intelligence and the people behind your growth
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Synetra Solutions is a US-based firm that combines AI and data expertise with executive search, staffing
              and project delivery. Instead of juggling separate vendors, you get one accountable team that connects
              strategy, technology and talent.
            </p>
            <p className="mt-4 leading-relaxed">
              We work with growing companies and established enterprises alike, and we measure success the same way
              our clients do: by outcomes.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-navy-900"
            >
              Learn more about Synetra
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <li key={p.title}>
                  <Reveal delay={i * 0.06} className="h-full">
                    <div className="h-full rounded-2xl border border-navy-900/[0.07] bg-white p-6 shadow-soft transition-colors hover:border-blue-400/40">
                      <Icon aria-hidden className="h-6 w-6 text-blue-600" />
                      <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section-y relative overflow-hidden bg-sky-50" aria-labelledby="services-title">
        <PixelSquares variant="light" className="right-8 top-10 hidden md:block" />
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={<span id="services-title">Six capabilities, one connected partner</span>}
              subtitle="From AI strategy to the leaders and teams who bring it to life, our services are designed to work together."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" arrow>
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y" aria-labelledby="industries-title">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Industries"
                title={<span id="industries-title">Deep expertise where it counts</span>}
                subtitle="We understand the regulation, data and talent realities of the sectors we serve."
              />
            </Reveal>
            <Button href="/industries" variant="ghost" arrow className="shrink-0">
              All industries
            </Button>
          </div>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <li key={ind.slug}>
                <Reveal delay={i * 0.08} className="h-full">
                  <IndustryCard industry={ind} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="section-y bg-sky-50" aria-labelledby="process-title">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title={<span id="process-title">A clear path from idea to impact</span>}
              subtitle="Every engagement follows the same disciplined approach, whether we're filling a leadership role or deploying an AI model."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps steps={howWeWork} />
          </div>
        </div>
      </section>

      <LogoStrip />

      <CTABand />
    </>
  );
}
