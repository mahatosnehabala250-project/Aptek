'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Will outdoor advertising actually work for MY business?',
    answer:
      'Outdoor advertising works for virtually every business type — from schools and hospitals to real estate and retail. The key is strategic placement, and that\'s exactly what we specialize in. We analyze your target audience, their commute routes, and high-traffic zones to place your ads where they\'ll have maximum impact. Our clients typically see a 30-40% increase in inquiries within the first month of campaign launch.',
  },
  {
    question: 'What is the minimum campaign duration?',
    answer:
      'The minimum campaign duration for hoardings and billboards is typically 30 days. However, for LED screens and digital displays, we offer flexible durations starting from as low as 7 days. For large-scale campaigns, we recommend a minimum of 3 months to maximize brand recall and ROI. We also offer discounted rates for longer-term commitments.',
  },
  {
    question: 'Do you handle design and creative work?',
    answer:
      'Yes, absolutely! We have an in-house creative team that specializes in outdoor advertising design. From concept development and copywriting to high-resolution artwork and 3D mockups, we handle the complete creative process. We provide design revisions until you are 100% satisfied, and all designs are optimized for outdoor viewing distances.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We operate across major cities and highways in India, with a strong presence in Delhi NCR, Rajasthan, Haryana, Punjab, and Uttar Pradesh. Our network includes prime locations on national highways (NH-48, NH-8, NH-44), state highways, and high-traffic urban areas. We are continuously expanding our coverage to serve clients nationwide.',
  },
  {
    question: 'How quickly can you install a hoarding?',
    answer:
      'Our standard turnaround time for hoarding installation is 5-7 working days from design approval. For urgent campaigns, we offer an express service with installation in as little as 3 days. The timeline includes design finalization, high-quality printing, and professional installation by our trained crew. Weather conditions and site accessibility may affect timelines.',
  },
  {
    question: 'What is the cost of outdoor advertising?',
    answer:
      'The cost varies depending on the type of advertising, location, size, and campaign duration. Highway hoardings start from ₹15,000/month, while premium city locations can range from ₹25,000 to ₹2,00,000/month. LED screens and digital displays are priced differently. We offer customized packages to suit every budget. Contact us for a free, no-obligation quote tailored to your specific requirements.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-[#00A651]/20 bg-[#F0FDF4] shadow-sm'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm md:text-base leading-relaxed transition-colors duration-300 ${
            isOpen ? 'text-[#00A651]' : 'text-gray-900'
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-[#00A651] text-white rotate-180'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="pt-0 border-t border-[#00A651]/10">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '80px' });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 heading-gradient-wrap"
          >
            {'Frequently Asked '}
            <span className="text-gradient-brand">{'Questions'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Thinking about outdoor advertising but have questions? We&apos;ve
            answered the most common ones so you can decide with confidence.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div ref={ref} className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggleFAQ(i)}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base mb-4">
            Still not sure? Talk to us directly — no commitment, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A651] text-white font-semibold text-sm hover:bg-[#008C45] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get Your Free Quote Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
