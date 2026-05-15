'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="APTEK MEDIA Outdoor Advertising"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Premium overlay: dark at top & bottom, semi-transparent center — image peeks through edges */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(0,0,0,0.75) 0%,
                rgba(0,0,0,0.55) 15%,
                rgba(0,0,0,0.38) 35%,
                rgba(0,0,0,0.28) 50%,
                rgba(0,0,0,0.38) 65%,
                rgba(0,0,0,0.58) 85%,
                rgba(0,0,0,0.78) 100%
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge — StoryBrand Element #3: Authority/Positioning (Guide) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A651] mb-8 md:mb-10 shadow-lg shadow-black/20"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase">
            Trusted by India&apos;s Leading Brands
          </span>
        </motion.div>

        {/* Main Heading — StoryBrand: Customer as Hero + Aspirational Outcome */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 md:mb-10"
        >
          <span className="text-white block drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            YOUR BRAND.
          </span>
          <span
            className="block mt-2 md:mt-3"
            style={{
              background: 'linear-gradient(135deg, #86EFAC 0%, #4ADE80 30%, #22C55E 60%, #16A34A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(34,197,94,0.3))',
            }}
          >
            UNMISSABLE.
          </span>
        </motion.h1>

        {/* Subtitle — StoryBrand Element #2: Problem + StoryBrand Element #3: Guide positioning */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-wide font-medium"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.5)' }}
        >
          In a noisy market, your competitors are getting all the attention.
          We help businesses across India stand out with strategic outdoor advertising
          — from design to installation, one team handles it all.
        </motion.p>

        {/* CTA Buttons — StoryBrand Element #5: Clear Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA: Direct Conversion Action (Get Quote via WhatsApp) */}
          <a
            href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20want%20a%20free%20quote%20for%20outdoor%20advertising%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#00A651] hover:bg-[#00913F] text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00A651]/25 hover:scale-[1.03]"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            Get Free Quote
          </a>

          {/* Secondary CTA: Social Proof / Discovery */}
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-white/80 hover:border-white text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-md"
          >
            See Our Work
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Trusted By — StoryBrand Element #3: Authority / Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-14 md:mt-20"
        >
          <p
            className="text-[11px] text-white/60 uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            Trusted by leading brands
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <span
              className="text-white/80 font-bold text-lg md:text-xl tracking-[0.1em]"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              DPS
            </span>
            <span className="text-white/30 text-lg">•</span>
            <span
              className="text-white/80 font-bold text-lg md:text-xl tracking-[0.1em]"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              PNB
            </span>
            <span className="text-white/30 text-lg">•</span>
            <span
              className="text-white/80 font-bold text-lg md:text-xl tracking-[0.1em]"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              SHYAM STEEL
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#00A651]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
