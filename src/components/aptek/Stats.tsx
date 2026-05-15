'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, MapPin, Award } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Projects Completed', prefix: '', icon: Briefcase },
  { value: 50, suffix: '+', label: 'Premium Clients', prefix: '', icon: Users },
  { value: 100, suffix: '+', label: 'Hoarding Locations', prefix: '', icon: MapPin },
  { value: 10, suffix: '+', label: 'Years Experience', prefix: '', icon: Award },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedCounter({ stat, isInView }: { stat: StatItem; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const end = stat.value;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(end);
        setTimeout(() => setShowSuffix(true), 100);
      }
    }

    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, stat.value]);

  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-[#00A651]/10 flex items-center justify-center mb-1">
        <Icon className="w-5 h-5 text-[#00A651]" />
      </div>

      {/* Stat number with green glow */}
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[#00A651]/5 rounded-full blur-2xl scale-150 -z-10" />
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00A651]">
          <span className="tabular-nums">{stat.prefix}{count}</span>
          <span className={`transition-opacity duration-500 ${showSuffix ? 'opacity-100' : 'opacity-0'}`}>
            {stat.suffix}
          </span>
        </div>
      </div>

      {/* Label */}
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
        {/* Section title label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#00A651] bg-[#00A651]/8 px-4 py-1.5 rounded-full">
            Why Businesses Trust Us
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Mobile separator line (between items, not after the last one) */}
              {(i % 2 === 0) && (
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:hidden w-px h-10 bg-[#00A651]/15" />
              )}

              {/* Stat card */}
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#00A651]/20 transition-all duration-300 h-full">
                <AnimatedCounter stat={stat} isInView={isInView} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
