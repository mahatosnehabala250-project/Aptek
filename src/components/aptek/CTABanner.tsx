'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, PhoneCall } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '80px' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #00A651 0%, #006B34 100%)',
        }}
      />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative Circles */}
      <div className="absolute top-[-40px] left-[-60px] w-[200px] h-[200px] rounded-full bg-white/[0.04] blur-sm" />
      <div className="absolute bottom-[-30px] right-[-40px] w-[280px] h-[280px] rounded-full bg-white/[0.03] blur-sm" />
      <div className="absolute top-[30%] right-[10%] w-[120px] h-[120px] rounded-full bg-white/[0.05]" />
      <div className="absolute bottom-[20%] left-[8%] w-[80px] h-[80px] rounded-full bg-white/[0.04]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        {/* Label — StoryBrand Element #6: Urgency/Action */}
        <motion.span
          variants={itemVariants}
          className="inline-block text-white/70 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-5"
        >
          DON'T WAIT — YOUR COMPETITORS AREN'T
        </motion.span>

        {/* Heading — StoryBrand Element #7: Success Vision */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-white leading-[1.1] mb-5 md:mb-6"
        >
          Your Brand Could Be Seen by{' '}
          <span className="text-white/90">Millions Tomorrow</span>
        </motion.h2>

        {/* Subtitle — StoryBrand Element #3: Guide + #6: Failure Avoidance */}
        <motion.p
          variants={itemVariants}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
        >
          500+ brands already chose APTEK MEDIA to make their brand impossible to
          ignore. Get a free, no-obligation quote today — and start getting noticed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Get Free Quote — WhatsApp */}
          <a
            href="https://wa.me/919932138191?text=Hi%20APTEK%20MEDIA%2C%20I%20want%20a%20free%20quote%20for%20outdoor%20advertising."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-50 text-[#00A651] font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Get Free Quote
          </a>

          {/* Call Now */}
          <a
            href="tel:+919932138191"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white/70 hover:border-white text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
