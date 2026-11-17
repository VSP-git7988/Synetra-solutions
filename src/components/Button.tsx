import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

/** `onDark` adjusts colours for use on navy / gradient backgrounds. */
function classes(variant: Variant, onDark: boolean) {
  if (variant === "primary")
    return onDark
      ? "px-6 py-3 bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:bg-sky-50"
      : "px-6 py-3 bg-blue-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy-700";
  if (variant === "secondary")
    return onDark
      ? "px-6 py-3 border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
      : "px-6 py-3 border border-navy-900/15 bg-white text-navy-900 hover:border-blue-600 hover:text-blue-600";
  return onDark
    ? "text-white underline-offset-4 hover:underline"
    : "text-blue-600 underline-offset-4 hover:text-navy-900 hover:underline";
}

type Common = {
  variant?: Variant;
  onDark?: boolean;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

function Arrow() {
  return <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />;
}

export function Button({
  href,
  variant = "primary",
  onDark = false,
  arrow = false,
  className = "",
  children,
  ...rest
}: Common & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={`${base} ${classes(variant, onDark)} ${className}`} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function ActionButton({
  variant = "primary",
  onDark = false,
  arrow = false,
  className = "",
  children,
  ...rest
}: Common & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">) {
  return (
    <button className={`${base} ${classes(variant, onDark)} ${className}`} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
