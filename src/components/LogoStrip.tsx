import { site } from "@/data/site";

/** TODO: swap placeholder wordmarks for real client logos once approved for use. */
export function LogoStrip({ title = "Trusted by teams across industries" }: { title?: string }) {
  return (
    <section aria-labelledby="logos-title" className="border-y border-navy-900/5 bg-white py-14">
      <div className="container-x">
        <h2 id="logos-title" className="text-center font-sans text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
          {title}
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {site.clientLogos.map((name) => (
            <li
              key={name}
              className="flex h-14 items-center justify-center rounded-xl border border-dashed border-navy-900/15 bg-sky-50/60 text-sm font-semibold tracking-wide text-slate-600 grayscale"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
