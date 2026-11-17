"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getIcon } from "@/lib/icons";
import { Logo } from "./Logo";
import { Button } from "./Button";

const subMenus = {
  services: {
    items: services.map((s) => ({ href: `/services/${s.slug}`, title: s.title, icon: s.icon })),
    viewAll: { href: "/services", label: "All services" },
  },
  industries: {
    items: industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.title, icon: i.icon })),
    viewAll: { href: "/industries", label: "All industries" },
  },
};

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      className={`fixed inset-0 z-[60] lg:hidden ${open ? "visible" : "invisible"}`}
      inert={!open}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-navy-900/5 px-5">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-900 hover:bg-sky-50"
          >
            <X aria-hidden className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="divide-y divide-navy-900/5">
            {site.nav.map((item) => {
              if (!("menu" in item) || !item.menu) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-4 font-display text-lg font-semibold text-navy-900 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const sub = subMenus[item.menu];
              const isOpen = expanded === item.menu;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-sub-${item.menu}`}
                    onClick={() => setExpanded(isOpen ? null : item.menu!)}
                    className="flex w-full items-center justify-between py-4 font-display text-lg font-semibold text-navy-900"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={`h-5 w-5 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    id={`mobile-sub-${item.menu}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="overflow-hidden" inert={!isOpen}>
                      {sub.items.map((s) => {
                        const Icon = getIcon(s.icon);
                        return (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={onClose}
                              className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-[15px] text-slate-600 hover:bg-sky-50 hover:text-navy-900"
                            >
                              <Icon aria-hidden className="h-4 w-4 shrink-0 text-blue-600" />
                              {s.title}
                            </Link>
                          </li>
                        );
                      })}
                      <li className="pb-3">
                        <Link
                          href={sub.viewAll.href}
                          onClick={onClose}
                          className="block px-2 py-2.5 text-sm font-semibold text-blue-600"
                        >
                          {sub.viewAll.label} →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-navy-900/5 bg-sky-50 p-5">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Get in Touch
          </Button>
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-sm text-slate-600">
            <Mail aria-hidden className="h-4 w-4 text-blue-600" /> {site.contact.email}
          </a>
          <a
            href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <Phone aria-hidden className="h-4 w-4 text-blue-600" /> {site.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
