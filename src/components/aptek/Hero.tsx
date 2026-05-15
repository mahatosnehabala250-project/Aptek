'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
                rgba(0,0,0,0.70) 0%, 
                rgba(0,0,0,0.50) 15%, 
                rgba(0,0,0,0.35) 35%, 
                rgba(0,0,0,0.25) 50%, 
                rgba(0,0,0,0.35) 65%, 
                rgba(0,0,0,0.55) 85%, 
                rgba(0,0,0,0.75) 100%
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A651] mb-8 md:mb-10 shadow-lg shadow-black/20"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase">
            A Complete AD Publicity
          </span>
        </motion.div>

        {/* Main Heading */}
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
            OUR CANVAS.
          </span>
        </motion.h1>

        {/* Subtitle — clean, spacious, elegant */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-wide font-medium"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.5)' }}
        >
          Premium outdoor advertising solutions that make your brand impossible to ignore.
        </motion.p>

        {/* CTA Buttons — clean, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#00A651] hover:bg-[#00913F] text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#00A651]/25 hover:scale-[1.03]"
          >
            View Our Work
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20am%20interested%20in%20your%20outdoor%20advertising%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-white/80 hover:border-white text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trusted By — minimal, clean */}
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
