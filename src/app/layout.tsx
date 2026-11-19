import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/motion/SmoothScroll';
import Cursor from '@/components/motion/Cursor';
import Preloader from '@/components/motion/Preloader';

export const metadata: Metadata = {
  title: { default: 'Synetra Solutions LLC | IT Consulting, Cloud, AI & Talent', template: '%s | Synetra Solutions LLC' },
  description: 'Synetra Solutions is an IT consulting partner for AI, cloud, data, IT project delivery and technology talent.',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-synetra-navy focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <div className="grain" aria-hidden />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}