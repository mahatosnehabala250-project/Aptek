import type { Metadata } from 'next';
import Stats from '@/components/aptek/Stats';
import Process from '@/components/aptek/Process';
import Testimonials from '@/components/aptek/Testimonials';
import Clients from '@/components/aptek/Clients';
import CTABanner from '@/components/aptek/CTABanner';

export const metadata: Metadata = {
  title: "About Us | APTEK MEDIA - A Complete AD Publicity",
  description:
    "Learn about APTEK MEDIA — India's premier outdoor advertising company with 10+ years experience, 500+ campaigns, and a trusted partner for DPS, PNB, Shyam Steel, and more.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#00A651]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <a href="/" className="text-sm text-gray-500 hover:text-[#00A651] transition-colors">Home</a>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-sm text-[#00A651] font-medium">About</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            About APTEK MEDIA
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            India&apos;s premier outdoor advertising company — 10+ years of making brands unmissable.
          </p>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* How We Work */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Clients + Why Choose Us */}
      <Clients />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
