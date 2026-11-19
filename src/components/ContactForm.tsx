'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import { site } from '@/data/site';

type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', string>>;

export default function ContactForm() {
  const [service, setService] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('service');
    if (q && services.some((s) => s.slug === q)) setService(q);
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    const err: Errors = {};
    if (!v('name')) err.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) err.email = 'Please enter a valid email address.';
    if (v('message').length < 10) err.message = 'Please tell us a little more (at least 10 characters).';
    if (!f.get('consent')) err.consent = 'Please confirm we can contact you.';
    setErrors(err);
    if (Object.keys(err).length) return;

    // TODO: connect Formspree or Web3Forms for direct submissions
    const svc = services.find((s) => s.slug === service)?.title ?? 'General enquiry';
    const body = `Name: ${v('name')}\nEmail: ${v('email')}\nPhone: ${v('phone')}\nCompany: ${v('company')}\nService: ${svc}\n\n${v('message')}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry: ${svc}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start rounded-[2rem] border border-synetra-line bg-white p-10" role="status">
        <CheckCircle2 className="h-12 w-12 text-synetra-sky" />
        <h2 className="mt-5 text-2xl font-semibold">Thank you, we&apos;ve got it.</h2>
        <p className="mt-3 text-synetra-slate">Your email app should have opened with your message ready to send. A consultant will reply within one business day.</p>
        <button onClick={() => setSent(false)} className="btn-outline mt-8">Send another message</button>
      </div>
    );
  }

  const input = 'mt-2 w-full rounded-2xl border border-synetra-line bg-white px-4 py-3.5 text-[15px] text-synetra-ink outline-none transition placeholder:text-synetra-slate/60 focus:border-synetra-sky focus:ring-4 focus:ring-synetra-sky/15';
  const label = 'text-sm font-semibold text-synetra-navy';
  const Err = ({ k }: { k: keyof Errors }) => (errors[k] ? <p className="mt-1.5 text-sm text-red-600">{errors[k]}</p> : null);

  return (
    <form onSubmit={submit} noValidate className="rounded-[2rem] border border-synetra-line bg-white p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>Full name *<input name="name" className={input} placeholder="Jane Smith" autoComplete="name" aria-invalid={!!errors.name} /><Err k="name" /></label>
        <label className={label}>Work email *<input name="email" type="email" className={input} placeholder="jane@company.com" autoComplete="email" aria-invalid={!!errors.email} /><Err k="email" /></label>
        <label className={label}>Phone<input name="phone" type="tel" className={input} placeholder="+1 (555) 000-0000" autoComplete="tel" /></label>
        <label className={label}>Company<input name="company" className={input} placeholder="Company name" autoComplete="organization" /></label>
        <label className={`${label} sm:col-span-2`}>Service of interest
          <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
            <option value="">General enquiry</option>
            {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>How can we help? *<textarea name="message" rows={5} className={input} placeholder="Tell us about your project, team or challenge…" aria-invalid={!!errors.message} /><Err k="message" /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-synetra-slate">
        <input type="checkbox" name="consent" className="mt-0.5 h-5 w-5 rounded accent-synetra-blue" />
        I agree that Synetra Solutions may contact me about this enquiry.
      </label>
      <Err k="consent" />
      <button type="submit" className="btn-primary mt-8 w-full justify-center sm:w-auto">Send message <ArrowRight className="h-4 w-4" /></button>
    </form>
  );
}
