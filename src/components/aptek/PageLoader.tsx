'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="loader-logo-pulse"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A651" />
                        <stop offset="100%" stopColor="#00C462" />
                      </linearGradient>
                    </defs>
                    <path d="M20 4L4 36h10l6-12 6 12h10L20 4z" fill="url(#loaderGrad)" />
                    <path d="M20 14l4 8h-8l4-8z" fill="#8BC34A" opacity="0.6" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-3xl font-black tracking-tight text-gray-900">APTEK</span>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#00A651] uppercase">MEDIA</span>
                </div>
              </div>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#00A651] via-[#00C462] to-[#8BC34A] rounded-full"
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400 text-xs font-medium tracking-widest uppercase"
            >
              A Complete AD Publicity
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
