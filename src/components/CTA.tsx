import BigCTA from './BigCTA';

/** Kept for the inner pages: renders the site-wide closing call to action. */
export default function CTA({ title }: { title?: string; text?: string }) {
  if (title === 'Modernise without adding risk.') return <BigCTA line1="Modernise" line2="without the risk." />;
  return <BigCTA />;
}
