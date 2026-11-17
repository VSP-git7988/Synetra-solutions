import { site } from "@/data/site";

export function StatStrip({ stats = site.stats }: { stats?: { value: string; label: string }[] }) {
  return (
    <section aria-label="Key figures" className="relative z-10 -mt-12 md:-mt-16">
      <div className="container-x">
        <dl className="grid grid-cols-2 divide-navy-900/5 overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-lift lg:grid-cols-4 lg:divide-x">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse items-center px-4 py-8 text-center md:py-10 ${
                i < 2 ? "border-b border-navy-900/5 lg:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r border-navy-900/5 lg:border-r-0" : ""}`}
            >
              <dt className="mt-2 text-sm font-medium text-slate-600">{s.label}</dt>
              <dd className="bg-brand-gradient bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
