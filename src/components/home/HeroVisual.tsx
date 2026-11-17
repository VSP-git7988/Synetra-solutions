import { BrainCircuit, Award, Database, CircleCheck } from "lucide-react";

/** Purely decorative card stack for the home hero (CSS only, no imagery). */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[460px]">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/30 blur-3xl" />

      {/* Card 1: AI Solutions */}
      <div className="glass absolute left-0 top-2 w-[78%] animate-float rounded-2xl p-5 text-white shadow-glass sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/30">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base font-semibold">AI Solutions</p>
            <p className="text-xs text-white/70">Pilot to production</p>
          </div>
        </div>
        <div className="mt-5 flex h-16 items-end gap-1.5">
          {[38, 52, 44, 63, 58, 74, 70, 88, 82, 96].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[4px] bg-gradient-to-t from-blue-400/40 to-white/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Card 2: Executive Search */}
      <div className="glass absolute right-0 top-[38%] w-[70%] animate-float-slow rounded-2xl p-5 text-white shadow-glass [animation-delay:-3s] sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/30">
            <Award className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base font-semibold">Executive Search</p>
            <p className="text-xs text-white/70">Leadership shortlist</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex -space-x-2">
            {["bg-blue-400", "bg-sky-50", "bg-blue-600", "bg-white/70"].map((c, i) => (
              <span key={i} className={`h-8 w-8 rounded-full border-2 border-navy-700 ${c}`} />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium">
            <CircleCheck className="h-3.5 w-3.5" /> Slate ready
          </span>
        </div>
      </div>

      {/* Card 3: Data Intelligence */}
      <div className="glass absolute bottom-0 left-[6%] w-[74%] animate-float rounded-2xl p-5 text-white shadow-glass [animation-delay:-5s] sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/30">
            <Database className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base font-semibold">Data Intelligence</p>
            <p className="text-xs text-white/70">Governed &amp; AI-ready</p>
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          {[
            ["Quality", "92%"],
            ["Governance", "78%"],
          ].map(([label, w]) => (
            <div key={label}>
              <div className="flex justify-between text-[11px] text-white/75">
                <span>{label}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/15">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-white" style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pixel accents */}
      <span className="absolute -right-2 top-0 h-6 w-6 rounded-md bg-blue-400/70" />
      <span className="absolute right-6 top-8 h-4 w-4 rounded bg-white/40" />
      <span className="absolute -left-3 bottom-24 h-5 w-5 rounded-md bg-white/25" />
    </div>
  );
}
