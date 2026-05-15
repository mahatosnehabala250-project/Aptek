'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount karne ke baad hi show karo (SSR issue fix)
    setIsMounted(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-8">

            {/* APTEK letter animation */}
            <div className="flex flex-col items-center leading-none gap-2">
              <motion.div className="flex overflow-hidden" initial="hidden" animate="visible">
                {"APTEK".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: 60, opacity: 0 },
                      visible: {
                        y: 0, opacity: 1,
                        transition: { delay: i * 0.09, duration: 0.5, ease: 'easeOut' }
                      }
                    }}
                    className="text-6xl font-black tracking-tight text-gray-900"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div className="flex overflow-hidden" initial="hidden" animate="visible">
                {"MEDIA".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: 40, opacity: 0 },
                      visible: {
                        y: 0, opacity: 1,
                        transition: { delay: 0.5 + i * 0.08, duration: 0.5, ease: 'easeOut' }
                      }
                    }}
                    className="text-2xl font-bold tracking-[0.4em]"
                    style={{
                      background: 'linear-gradient(135deg, #00A651 0%, #00C462 50%, #8BC34A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1.0, duration: 0.5, ease: 'easeOut' }}
              className="h-[2px] bg-gradient-to-r from-[#00A651] to-[#8BC34A] rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-gray-400 text-xs font-semibold tracking-[0.3em] uppercase"
            >
              A Complete AD Publicity
            </motion.p>

            {/* Loading bar */}
            <div className="w-48 h-[3px] bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#00A651] via-[#00C462] to-[#8BC34A] rounded-full"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
