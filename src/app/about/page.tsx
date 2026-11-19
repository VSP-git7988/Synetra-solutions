import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import { Eyebrow, Icon } from '@/components/Brand';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Synetra Solutions is an IT consulting partner bringing together technology expertise and exceptional talent.',
};

const values = [
  { icon: 'shield', title: 'Trusted partnership', text: 'We tell you what we think, keep our commitments and treat your goals as our own.' },
  { icon: 'bulb', title: 'Innovation with purpose', text: 'New technology is only worth adopting when it solves a real problem. We start there.' },
  { icon: 'network', title: 'A strong talent network', text: 'A growing community of vetted engineers, architects and leaders ready to step in.' },
  { icon: 'gauge', title: 'Measurable impact', text: 'Every engagement has clear outcomes, tracked openly from kickoff to handover.' },
  { icon: 'award', title: 'A culture of excellence', text: 'High standards in engineering, communication and the way we treat people.' },
  { icon: 'globe', title: 'Reach where you need it', text: 'Teams that can support you across the US and around the world.' },
];

const apart = [
  { title: 'Advise, build and staff', text: 'One partner for strategy, delivery and talent, so nothing gets lost between them.' },
  { title: 'Hands-on consultants', text: 'Our people have built and run production systems, not just presented slides.' },
  { title: 'Flexible engagement', text: 'Projects, managed teams or individual experts, scaled up or down as you need.' },
  { title: 'Built for regulated sectors', text: 'Security, compliance and data governance are part of how we work by default.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Synetra"
        title="Where intelligent technology meets exceptional people."
        text="We started Synetra to give organisations one partner who can design the right technology and find the right people to deliver it."
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="pb-24 pt-20 sm:pt-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Built to close the gap between plans and delivery.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-synetra-slate">
              <p>Too often, a technology strategy is written by one firm, built by another and staffed by a third, and the result drifts away from what the business actually needed. Synetra was founded to change that.</p>
              <p>Today we work with organisations in financial services, retail and health care. We help them adopt AI, move to the cloud, organise their data and build strong technology teams, with consultants who stay accountable from the first conversation to long-term support.</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative flex aspect-square items-center justify-center rounded-[2rem] bg-synetra-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/synetra-icon.png" alt="" className="w-[62%] opacity-90" />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-synetra-navy p-10 text-white sm:p-12">
            <Eyebrow light>Our mission</Eyebrow>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">To help organisations turn technology into real progress by pairing smart solutions with the right people.</p>
          </Reveal>
          <Reveal delay={100} className="rounded-[2rem] border border-synetra-line bg-synetra-mist p-10 sm:p-12">
            <Eyebrow>Our vision</Eyebrow>
            <p className="mt-5 font-display text-2xl font-semibold leading-snug text-synetra-navy sm:text-3xl">To be the IT partner clients trust most for transformation that works, from first idea to lasting results.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-synetra-mist py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl"><Eyebrow>Our values</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">What guides every engagement.</h2></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80} className="card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-synetra-mist text-synetra-blue"><Icon name={v.icon} /></span>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl"><Eyebrow>What sets us apart</Eyebrow><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Why clients choose Synetra.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-synetra-line bg-synetra-line sm:grid-cols-2 lg:grid-cols-4">
            {apart.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="bg-white p-8">
                <p className="font-display text-4xl font-bold text-gradient">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-synetra-slate">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
