import type { Metadata } from 'next';
import { Clock, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Logo } from '@/components/Brand';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Talk to a Synetra consultant about AI, cloud, data, IT projects or technology talent.',
};

export default function ContactPage() {
  const row = 'flex gap-4';
  const ico = 'mt-0.5 h-5 w-5 shrink-0 text-synetra-sky';
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building."
        text="Share a few details and a consultant will get back to you within one business day."
        crumbs={[{ label: 'Contact Us' }]}
      />
      <section className="pb-24 pt-20 sm:pt-28">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <aside className="relative flex flex-col overflow-hidden rounded-[2rem] bg-synetra-navy p-10 text-white">
            <span className="inline-flex self-start rounded-2xl bg-white px-4 py-3"><Logo className="h-10" /></span>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug">One conversation is enough to find out whether we can help.</p>
            <ul className="mt-10 space-y-6 text-[15px] text-white/80">
              <li className={row}><Mail className={ico} /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
              <li className={row}><Phone className={ico} /><a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">{site.phone}</a></li>
              <li className={row}><MapPin className={ico} />{site.address}</li>
              <li className={row}><Clock className={ico} />Monday to Friday, 9:00 am – 6:00 pm (ET)</li>
              <li className={row}><Linkedin className={ico} /><a href={site.linkedin} className="hover:text-white">Follow us on LinkedIn</a></li>
            </ul>
            <span aria-hidden className="pointer-events-none absolute -bottom-6 -right-6 grid grid-cols-3 gap-2.5 opacity-20">
              {[1, 1, 0, 1, 1, 1, 0, 1, 0].map((v, i) => <span key={i} className={`h-8 w-8 rounded-[6px] ${v ? 'bg-synetra-sky' : ''}`} />)}
            </span>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
