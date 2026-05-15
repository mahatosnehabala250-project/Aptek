'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Palette, Printer, Rocket } from 'lucide-react';

// StoryBrand Element #4: THE PLAN — clear steps showing customer's journey
const steps = [
  {
    number: '01',
    title: 'Tell Us Your Goal',
    description:
      'Share your brand, budget, and target audience. We listen first — then our team surveys the best locations across India to create a strategic plan that puts your brand where it matters most.',
    icon: MessageSquare,
    color: '#00A651',
  },
  {
    number: '02',
    title: 'We Design Your Impact',
    description:
      'Our creative team designs bold, eye-catching visuals that stop people in their tracks. You get mockups, revisions, and a design that\'s 100% optimized for outdoor viewing distances — until you love it.',
    icon: Palette,
    color: '#8BC34A',
  },
  {
    number: '03',
    title: 'We Print & Produce',
    description:
      'Premium large-format printing with vivid, weather-resistant colors. From flex and vinyl to backlit panels — we use the best materials so your campaign looks stunning for months, not days.',
    icon: Printer,
    color: '#00A651',
  },
  {
    number: '04',
    title: 'Your Brand Goes Live',
    description:
      'Our expert installation team handles everything — mounting, lighting, and perfect placement. Your brand launches on schedule, and you start getting noticed from Day 1.',
    icon: Rocket,
    color: '#8BC34A',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '80px' });

  return (
    <section id="process" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — StoryBrand Element #4: The Plan */}
        <div className="text-center mb-6 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Your Roadmap to Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 heading-gradient-wrap"
          >
            {'4 Simple Steps to '}
            <span className="text-gradient-brand">{'Launch Your Campaign'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            No complexity, no confusion. You tell us your goal — we handle everything else.
            Here&apos;s exactly how your brand goes from idea to reality.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-[#00A651] via-[#8BC34A] to-[#00A651]" />

            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.1 }}
                  className={`text-center relative ${
                    i % 2 === 1 ? 'mt-16' : ''
                  }`}
                >
                  {/* Step Circle */}
                  <div className="relative z-10 inline-flex mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00A651]/15 transition-all duration-300">
                    <div
                      className="w-11 h-11 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: step.color + '15' }}
                    >
                      <step.icon
                        className="w-5 h-5"
                        style={{ color: step.color }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector dot for alternating layout */}
                  {i % 2 === 1 && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#00A651]/30 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.1 }}
              className="relative flex gap-5 md:gap-6"
            >
              {/* Vertical Line + Dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg flex-shrink-0 relative z-10"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[#00A651]/40 to-[#8BC34A]/20 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-12 flex-1">
                <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: step.color + '15' }}
                    >
                      <step.icon
                        className="w-5 h-5"
                        style={{ color: step.color }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
