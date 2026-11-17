import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/data/site";
import { Logo } from "./Logo";
import { LinkedInIcon } from "./SocialIcons";

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { phone, email, address } = site.contact;

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{site.blurb}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.linkedin}
              aria-label="Synetra Solutions on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-blue-400 hover:bg-blue-400/10 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email Synetra Solutions"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-blue-400 hover:bg-blue-400/10 hover:text-white"
            >
              <Mail aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Column title="Services" links={footerLinks.services} />
        </div>
        <div className="lg:col-span-2">
          <Column title="Industries" links={footerLinks.industries} />
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 hover:text-white">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                {phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="flex items-start gap-3 break-all hover:text-white">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                {email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
              {address}
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-sky-50"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Synetra Solutions LLC. All rights reserved.</p>
          <ul className="flex gap-5">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
