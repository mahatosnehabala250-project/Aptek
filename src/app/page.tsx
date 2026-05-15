'use client';

import Hero from '@/components/aptek/Hero';
import Stats from '@/components/aptek/Stats';
import Services from '@/components/aptek/Services';
import CTABanner from '@/components/aptek/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CTABanner />
    </>
  );
}
