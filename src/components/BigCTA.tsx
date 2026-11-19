import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TideShader from './motion/TideShader';
import Magnetic from './motion/Magnetic';

export default function BigCTA({ line1 = "Let's build", line2 = "what's next." }: { line1?: string; line2?: string }) {
  return (
    <section className="relative overflow-hidden bg-synetra-abyss py-28 text-white sm:py-40">
      <TideShader intensity={0.75} />
      <div className="pointer-events-none absolute inset-0 bg-synetra-abyss/30" />
      <div className="container-site relative">
        <span className="eyebrow !text-synetra-sky">( Next step )</span>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[14vw] font-normal leading-[0.9] !text-white sm:text-[11vw] lg:text-[9rem]">
            {line1}<br /><span className="serif-i text-glow pr-3 text-[1.1em]">{line2}</span>
          </h2>
          <Magnetic strength={0.4} className="self-start lg:self-end">
            <Link
              href="/contact/"
              className="group relative flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full bg-synetra-sky text-center font-semibold text-white transition-colors duration-500 hover:bg-white hover:text-synetra-navy sm:h-52 sm:w-52"
            >
              <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45" />
              Start a project
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
