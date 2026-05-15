'use client';

import Navbar from '@/components/aptek/Navbar';
import Hero from '@/components/aptek/Hero';
import Stats from '@/components/aptek/Stats';
import Services from '@/components/aptek/Services';
import Portfolio from '@/components/aptek/Portfolio';
import Testimonials from '@/components/aptek/Testimonials';
import Clients from '@/components/aptek/Clients';
import Process from '@/components/aptek/Process';
import FAQ from '@/components/aptek/FAQ';
import CTABanner from '@/components/aptek/CTABanner';
import Contact from '@/components/aptek/Contact';
import Footer from '@/components/aptek/Footer';
import WhatsAppButton from '@/components/aptek/WhatsAppButton';
import PageLoader from '@/components/aptek/PageLoader';
import FloatingCTA from '@/components/aptek/FloatingCTA';
import ScrollProgress from '@/components/aptek/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <Clients />
        <Process />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </div>
  );
}
