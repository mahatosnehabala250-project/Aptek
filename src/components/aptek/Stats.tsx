'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Projects Completed', prefix: '' },
  { value: 50, suffix: '+', label: 'Premium Clients', prefix: '' },
  { value: 100, suffix: '+', label: 'Hoarding Locations', prefix: '' },
  { value: 10, suffix: '+', label: 'Years Experience', prefix: '' },
];

function AnimatedCounter({ stat, isInView, isLast }: { stat: StatItem; isInView: boolean; isLast?: boolean }) {
  const [count, setCount] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
        // Fade in suffix after count finishes
        setTimeout(() => setShowSuffix(true), 100);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div className={`text-center ${!isLast ? 'md:border-r md:border-[#00A651]/15 md:last:border-r-0' : ''}`}>
      {/* Green glow behind stat number */}
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[#00A651]/5 rounded-full blur-2xl scale-150 -z-10" />
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00A651] mb-2">
          <span className="tabular-nums">{stat.prefix}{count}</span>
          <span className={`transition-opacity duration-500 ${showSuffix ? 'opacity-100' : 'opacity-0'}`}>
            {stat.suffix}
          </span>
        </div>
      </div>
      <div className="text-sm sm:text-base text-gray-600 font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 md:py-20 bg-[#F8FAFC] border-y border-gray-100 overflow-hidden">
      {/* Dot pattern background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <AnimatedCounter stat={stat} isInView={isInView} isLast={i === stats.length - 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
