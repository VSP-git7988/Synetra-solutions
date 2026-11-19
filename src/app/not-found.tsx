import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="container-site flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/synetra-icon.png" alt="" className="w-40" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-synetra-blue">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">This page drifted off course.</h1>
        <p className="mt-4 max-w-md text-lg text-synetra-slate">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-primary mt-8">Back to home <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
