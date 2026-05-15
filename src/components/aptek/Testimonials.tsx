'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'DPS Group of Schools',
    role: 'Marketing Director',
    rating: 5,
    text: 'APTEK MEDIA transformed our school\'s visibility across the city. Their hoarding campaign increased admissions inquiries by 40%. Absolutely professional and creative team.',
  },
  {
    name: 'Priya Sharma',
    company: 'Punjab National Bank',
    role: 'Regional Marketing Head',
    rating: 5,
    text: 'We\'ve been working with APTEK for 3 years now. Their strategic placement of billboards along NH-48 has been instrumental in our brand awareness campaigns. Highly recommend!',
  },
  {
    name: 'Amit Verma',
    company: 'Shyam Steel Industries',
    role: 'VP - Brand Strategy',
    rating: 4,
    text: 'The quality of flex printing and installation is top-notch. APTEK handled our pan-city campaign for product launch flawlessly. Their team works with incredible speed and precision.',
  },
  {
    name: 'Sunita Agarwal',
    company: 'Agarwal Real Estate',
    role: 'Managing Director',
    rating: 5,
    text: 'From concept to installation, APTEK MEDIA handled everything for our 50+ site hoarding campaign. The designs were eye-catching and the execution was seamless. Best in the business!',
  },
  {
    name: 'Vikram Patel',
    company: 'Patel Motors',
    role: 'Owner',
    rating: 5,
    text: 'I needed a quick turnaround for my showroom inauguration banners and hoardings. APTEK delivered in just 3 days with outstanding quality. They exceeded all my expectations.',
  },
  {
    name: 'Deepika Joshi',
    company: 'Joshi Hospitals',
    role: 'Chief Administrator',
    rating: 4,
    text: 'APTEK MEDIA created beautiful, informative hoardings for our multi-speciality hospital. Their understanding of healthcare advertising and patient communication was impressive.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" style={{ filter: 'drop-shadow(0 0 3px rgba(245, 158, 11, 0.35))' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-200 ${
            star <= rating
              ? 'fill-[#F59E0B] text-[#F59E0B]'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '80px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isScrolling = useRef(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      const idx = activeIndex;
      const next = (idx + 1) % testimonials.length;
      isScrolling.current = true;
      container.scrollTo({ left: next * 380, behavior: 'smooth' });
      setActiveIndex(next);
      setTimeout(() => { isScrolling.current = false; }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  // Handle manual scroll to update dot indicators
  const handleScroll = useCallback(() => {
    if (isScrolling.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const idx = Math.round(scrollLeft / 380);
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  }, [activeIndex]);

  const navigateTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    isScrolling.current = true;
    container.scrollTo({ left: clamped * 380, behavior: 'smooth' });
    setActiveIndex(clamped);
    setTimeout(() => { isScrolling.current = false; }, 500);
  }, []);

  const handlePrev = useCallback(() => {
    navigateTo(activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1);
  }, [activeIndex, navigateTo]);

  const handleNext = useCallback(() => {
    navigateTo(activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0);
  }, [activeIndex, navigateTo]);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 heading-gradient-wrap"
          >
            {'What Our Clients '}
            <span className="text-gradient-brand">{'Say'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Real results from real businesses. Here&apos;s what happened when they
            chose APTEK MEDIA to make their brand visible.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroll Container */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={testimonial.name}
                    className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[380px] snap-start"
                  >
                    <div
                      className={`h-full rounded-2xl bg-white overflow-hidden flex flex-col transition-all duration-300 ${
                        isActive
                          ? 'border border-[#00A651]/20 shadow-lg'
                          : 'border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00A651]/15'
                      }`}
                    >
                      {/* Card gradient accent */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#00A651] to-[#8BC34A] rounded-t-2xl" />

                      <div className="p-6 md:p-7 flex flex-col flex-1">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                            <Quote className="w-5 h-5 text-[#00A651]" />
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="mb-4">
                          <StarRating rating={testimonial.rating} />
                        </div>

                        {/* Review Text with left border accent */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1 mb-5 border-l-2 border-[#00A651]/20 pl-4">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A651] to-[#8BC34A] ring-2 ring-[#00A651]/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {testimonial.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm md:text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-500 text-xs md:text-sm">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Swipe indicator on mobile */}
          <div className="md:hidden text-center mt-4 mb-1">
            <span className="text-gray-500 text-sm font-medium tracking-wide">
              Swipe to explore <span className="inline-block ml-1 animate-bounce">→</span>
            </span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:bg-[#00A651] hover:text-white hover:border-[#00A651] text-gray-600 transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center hover:bg-[#00A651] hover:text-white hover:border-[#00A651] text-gray-600 transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => navigateTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-[#00A651]'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
