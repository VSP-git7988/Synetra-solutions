import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  onDark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            onDark ? "text-sky-50" : "text-blue-600"
          }`}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-[2px] bg-blue-400" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-white/85" : "text-slate-600"}`}>{subtitle}</p>
      )}
    </div>
  );
}
