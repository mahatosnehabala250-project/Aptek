'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image — Premium cinematic treatment */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="APTEK MEDIA Outdoor Advertising"
          className="w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px) brightness(0.65) saturate(1.2)' }}
          fetchPriority="high"
        />
        {/* Gradient overlay — darkens bottom for text, keeps top lighter for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />
        {/* Vignette for cinematic depth */}
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 250px 80px rgba(0,0,0,0.6)' }}
        />
      </div>

      {/* Content — Ultra clean, minimal, premium */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-6 md:mb-8"
        >
          <span className="text-white block drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]">
            YOUR BRAND.
          </span>
          <span
            className="block mt-1 md:mt-2"
            style={{
              background: 'linear-gradient(135deg, #86EFAC 0%, #4ADE80 30%, #22C55E 60%, #16A34A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 20px rgba(0,0,0,0.2))',
            }}
          >
            UNMISSABLE.
          </span>
        </motion.h1>

        {/* Subtitle — ONE clean line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/75 text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-10 md:mb-12 leading-relaxed font-light tracking-wide"
        >
          India&apos;s premium outdoor advertising — from design to installation, one team.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20want%20a%20free%20quote%20for%20outdoor%20advertising%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#00A651] font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02]"
          >
            <MessageCircle size={16} />
            Get Free Quote
          </a>
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-white/5"
          >
            See Our Work
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Minimal scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-white/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
