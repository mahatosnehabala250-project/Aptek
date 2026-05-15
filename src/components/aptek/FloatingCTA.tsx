'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      if (window.scrollY > window.innerHeight * 0.8 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 md:bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-auto z-[55]"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-3 md:p-4 max-w-lg mx-auto md:mx-0">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>

            <div className="flex items-center gap-3">
              {/* Green dot pulse */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#00A651] flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#00A651]/30 animate-ping" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-bold text-sm">Need a Quick Quote?</p>
                <p className="text-gray-500 text-xs truncate">Get instant pricing on WhatsApp</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="tel:+919932138191"
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Call us"
                >
                  <Phone size={16} />
                </a>
                <a
                  href="https://wa.me/919932138191?text=Hi%20APTEK%20MEDIA%2C%20I%20need%20a%20quick%20quote%20for%20advertising."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold text-xs rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <MessageCircle size={14} />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
