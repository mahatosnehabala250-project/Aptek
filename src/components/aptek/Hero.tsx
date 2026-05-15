'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle green gradient accent — top right corner */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00A651]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      {/* Subtle green accent — bottom left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00A651]/[0.03] to-transparent rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Main split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0">
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
              <span className="text-gray-900 block">YOUR BRAND.</span>
              <span
                className="block mt-1 md:mt-2"
                style={{
                  background: 'linear-gradient(135deg, #00A651 0%, #00C462 50%, #8BC34A 100%)',
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
              className="text-gray-500 text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Purulia &amp; West Bengal&apos;s trusted outdoor advertising partner since 2016 — from design to installation, one team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/919932138191?text=Hi%20APTEK%20MEDIA%2C%20I%20want%20a%20free%20quote%20for%20outdoor%20advertising%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00A651] text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00A651]/25 hover:scale-[1.03]"
              >
                <MessageCircle size={16} />
                Get Free Quote
              </a>
              <Link
                href="/portfolio"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-[#00A651]/40 text-gray-700 hover:text-[#00A651] font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-[#00A651]/5"
              >
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right side — SHARP Billboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              {/* Subtle green glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A651]/10 to-[#8BC34A]/5 rounded-3xl blur-3xl" />

              {/* Image frame — crystal clear, NO blur */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100 bg-gray-50">
                <img
                  src="/images/hero-bg.jpg"
                  alt="APTEK MEDIA — Billboard Outdoor Advertising Work"
                  className="w-full h-auto object-contain"
                  fetchPriority="high"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Minimal scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-1 h-1 rounded-full bg-gray-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
