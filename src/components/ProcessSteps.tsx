import { Reveal } from "./Reveal";

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {/* Connector line on large screens */}
      <span
        aria-hidden
        className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 lg:block"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Reveal delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-navy-900/[0.07] bg-white p-7 shadow-soft">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-bold text-white shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
