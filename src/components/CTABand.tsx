import { Button } from "./Button";
import { PixelSquares } from "./PixelSquares";
import { Reveal } from "./Reveal";

export function CTABand({
  title = "Ready to build what's next?",
  text = "Tell us where you want to go. We'll bring the intelligence, talent and delivery to get you there.",
  primary = { label: "Contact Us", href: "/contact" },
  secondary = { label: "Explore Services", href: "/services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="section-y" aria-labelledby="cta-title">
      <div className="container-x">
        <Reveal>
          <div className="on-dark relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center sm:px-12 md:py-20">
            <div aria-hidden className="grid-lines absolute inset-0" />
            <PixelSquares className="-left-4 -top-4 opacity-80" />
            <PixelSquares variant="b" className="-bottom-6 right-6 hidden sm:block" />
            <div className="relative mx-auto max-w-2xl">
              <h2 id="cta-title" className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-white/85">{text}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={primary.href} onDark arrow>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button href={secondary.href} variant="secondary" onDark>
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
