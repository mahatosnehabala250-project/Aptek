import type { Metadata } from 'next';
import Contact from '@/components/aptek/Contact';
import FAQ from '@/components/aptek/FAQ';
import CTABanner from '@/components/aptek/CTABanner';

export const metadata: Metadata = {
  title: "Contact Us | APTEK MEDIA - A Complete AD Publicity",
  description:
    "Get in touch with APTEK MEDIA for outdoor advertising inquiries. Fill our form for instant WhatsApp response or call us directly. Free quotes available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#00A651]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <a href="/" className="text-sm text-gray-500 hover:text-[#00A651] transition-colors">Home</a>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-sm text-[#00A651] font-medium">Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to make your brand unmissable? Get in touch — we respond within minutes on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* FAQ */}
      <FAQ />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
