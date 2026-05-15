'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean dark background with subtle brand tint */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#001a0d]" />

      {/* Subtle dot grid texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left side — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6"
            >
              <span className="text-white block">YOUR BRAND.</span>
              <span
                className="block mt-1 md:mt-2"
                style={{
                  background: 'linear-gradient(135deg, #86EFAC 0%, #4ADE80 30%, #22C55E 60%, #16A34A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                UNMISSABLE.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/55 text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              India&apos;s premium outdoor advertising — from design to installation, one team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20want%20a%20free%20quote%20for%20outdoor%20advertising%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00A651] text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00A651]/25 hover:scale-[1.03]"
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
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white/80 font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-white/5"
              >
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right side — SHARP Billboard Image (no blur!) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              {/* Subtle brand glow behind image */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#00A651]/15 to-transparent rounded-3xl blur-3xl" />

              {/* Image frame — crystal clear, NO blur */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.08]">
                <img
                  src="/images/hero-bg.jpg"
                  alt="APTEK MEDIA — Billboard Outdoor Advertising Work"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[480px] object-cover"
                  fetchPriority="high"
                />
                {/* Very subtle bottom gradient for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Minimal scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-white/40"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
