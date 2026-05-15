'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    src: '/images/portfolio-hoarding-1.png',
    title: 'Highway Hoarding Installation',
    category: 'Hoardings',
    description: 'Massive highway billboard installation for premium brand visibility across major national highways.',
    client: 'National Brand Campaign',
  },
  {
    id: 2,
    src: '/images/portfolio-flex-printing.png',
    title: 'Large Format Flex Printing',
    category: 'Flex Printing',
    description: 'High-resolution large format flex printing for outdoor advertising with vivid color reproduction.',
    client: 'Multi-Brand Campaign',
  },
  {
    id: 3,
    src: '/images/portfolio-building-wrap.png',
    title: 'Building Wrap Branding',
    category: 'Branding',
    description: 'Complete building facade branding covering entire exterior surface for maximum brand exposure.',
    client: 'Corporate Client',
  },
  {
    id: 4,
    src: '/images/portfolio-led-billboard.png',
    title: 'LED Billboard Display',
    category: 'Digital',
    description: 'Illuminated LED billboard display creating stunning visual impact in high-traffic urban locations.',
    client: 'Retail Brand',
  },
  {
    id: 5,
    src: '/images/portfolio-vehicle-branding.png',
    title: 'Vehicle Fleet Branding',
    category: 'Branding',
    description: 'Complete vehicle fleet branding with high-quality vinyl wraps for mobile advertising.',
    client: 'Logistics Company',
  },
  {
    id: 6,
    src: '/images/portfolio-roadside-advertising.png',
    title: 'City-Wide Roadside Campaign',
    category: 'Outdoor',
    description: 'Comprehensive roadside advertising campaign spanning multiple locations across the city.',
    client: 'FMCG Brand',
  },
  {
    id: 7,
    src: '/images/portfolio-event-branding.png',
    title: 'Event Stage Branding',
    category: 'Events',
    description: 'Complete event branding including stage backdrop, entrance arch, and venue decorations.',
    client: 'Event Organizer',
  },
];

const categories = ['All', 'Hoardings', 'Flex Printing', 'Branding', 'Digital', 'Outdoor', 'Events'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    if (newIndex >= filteredItems.length) newIndex = 0;
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-[#F8FAFC]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900"
          >
            Real{' '}<span className="text-gradient-brand">Work</span>, Real{' '}
            <span className="text-gradient-brand">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every project is a testament to our commitment to excellence. Explore our
            portfolio of successfully executed outdoor advertising campaigns.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium rounded-lg transition-all duration-300 relative ${
                selectedCategory === cat
                  ? 'bg-[#00A651] text-white shadow-lg shadow-[#00A651]/20'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200'
              }`}
            >
              {cat}
              {/* Active gradient border */}
              {selectedCategory === cat && (
                <span className="absolute inset-0 rounded-lg gradient-border pointer-events-none" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="gallery-item cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Category badge - top right */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#00A651]/90 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider rounded-md">
                    {item.category}
                  </div>
                  {/* Hover Overlay */}
                  <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                    <span className="text-[#00C462] text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base md:text-lg font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm hidden sm:block">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[#00C462] text-xs font-medium">
                      <span>View Details</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                  {/* "View All" label overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg shadow-lg">
                      <ExternalLink size={14} className="text-[#00A651]" />
                      <span className="text-xs font-semibold">View Project</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">
            Want to see more of our work or discuss your project?
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20loved%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A651] hover:bg-[#008C45] text-white font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00A651]/20"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Discuss Your Project
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] portfolio-modal-backdrop bg-black/85 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - bigger with bg-white/10 rounded-full */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300 z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className="relative rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
              <div className="mt-4 md:mt-6 flex items-start justify-between">
                <div>
                  <span className="text-[#00C462] text-xs font-semibold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-lg md:text-2xl font-bold mt-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-2">
                    {selectedImage.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Client: {selectedImage.client}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <button onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Previous image">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-gray-400 text-sm tabular-nums">
                  {filteredItems.findIndex((item) => item.id === selectedImage.id) + 1} / {filteredItems.length}
                </span>
                <button onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Next image">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
