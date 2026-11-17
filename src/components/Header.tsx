"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getIcon } from "@/lib/icons";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

type MenuKey = "services" | "industries";

const menus = {
  services: {
    items: services.map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      description: s.shortDescription,
      icon: s.icon,
    })),
    viewAll: { href: "/services", label: "View all services" },
    feature: {
      title: "AI-first, people-powered",
      text: "Six connected capabilities that combine intelligent technology with exceptional talent.",
    },
  },
  industries: {
    items: industries.map((i) => ({
      href: `/industries/${i.slug}`,
      title: i.title,
      description: i.shortDescription,
      icon: i.icon,
    })),
    viewAll: { href: "/industries", label: "View all industries" },
    feature: {
      title: "Sector depth that matters",
      text: "Teams who understand the regulation, data and talent realities of your industry.",
    },
  },
} as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape + click-outside close the mega menu
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const key = openMenu;
        setOpenMenu(null);
        document.getElementById(`menu-btn-${key}`)?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  const openOnHover = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);
  const closeOnLeave = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const solid = scrolled || openMenu !== null;
  const linkBase = "rounded-full px-4 py-2 text-sm font-medium transition-colors";
  const linkColor = solid ? "text-navy-900 hover:text-blue-600" : "text-white/90 hover:text-white";

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-soft backdrop-blur" : "on-dark bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="container-x flex h-[72px] items-center justify-between gap-6 md:h-20">
        <Logo light={!solid} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);
              if (!("menu" in item) || !item.menu) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${linkBase} ${linkColor} ${active ? (solid ? "text-blue-600" : "text-white") : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const key = item.menu;
              const isOpen = openMenu === key;
              return (
                <li key={item.href} onMouseEnter={() => openOnHover(key)} onMouseLeave={closeOnLeave}>
                  <button
                    id={`menu-btn-${key}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`menu-panel-${key}`}
                    onClick={() => setOpenMenu(isOpen ? null : key)}
                    className={`${linkBase} ${linkColor} inline-flex items-center gap-1 ${
                      active && solid ? "text-blue-600" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" onDark={!solid} className="hidden sm:inline-flex">
            Get in Touch
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-navy-900 hover:bg-sky-50" : "text-white hover:bg-white/10"
            }`}
          >
            <Menu aria-hidden className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mega menu panels */}
      {(Object.keys(menus) as MenuKey[]).map((key) => {
        const menu = menus[key];
        const isOpen = openMenu === key;
        return (
          <div
            key={key}
            id={`menu-panel-${key}`}
            onMouseEnter={() => openOnHover(key)}
            onMouseLeave={closeOnLeave}
            className={`absolute inset-x-0 top-full hidden lg:block ${
              isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
            } transition-all duration-200`}
          >
            <div className="container-x pt-2">
              <div className="grid grid-cols-12 gap-6 rounded-2xl border border-navy-900/5 bg-white p-6 shadow-lift">
                <ul className={`col-span-9 grid gap-2 ${key === "services" ? "grid-cols-3" : "grid-cols-3"}`}>
                  {menu.items.map((it) => {
                    const Icon = getIcon(it.icon);
                    return (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          tabIndex={isOpen ? 0 : -1}
                          className="group flex h-full gap-4 rounded-xl p-4 transition-colors hover:bg-sky-50"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <Icon aria-hidden className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block font-display text-sm font-semibold text-navy-900">{it.title}</span>
                            <span className="mt-1 line-clamp-2 block text-[13px] leading-snug text-slate-600">
                              {it.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="relative col-span-3 overflow-hidden rounded-xl bg-brand-gradient p-6 text-white">
                  <p className="font-display text-lg font-semibold">{menu.feature.title}</p>
                  <p className="mt-2 text-sm text-white/85">{menu.feature.text}</p>
                  <Link
                    href={menu.viewAll.href}
                    tabIndex={isOpen ? 0 : -1}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
                  >
                    {menu.viewAll.label}
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

    </header>
    {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed drawer. */}
    <MobileNav open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
