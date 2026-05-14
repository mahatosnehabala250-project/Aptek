'use client';

import Navbar from '@/components/aptek/Navbar';
import Hero from '@/components/aptek/Hero';
import Stats from '@/components/aptek/Stats';
import Services from '@/components/aptek/Services';
import Portfolio from '@/components/aptek/Portfolio';
import Clients from '@/components/aptek/Clients';
import Contact from '@/components/aptek/Contact';
import Footer from '@/components/aptek/Footer';
import WhatsAppButton from '@/components/aptek/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
