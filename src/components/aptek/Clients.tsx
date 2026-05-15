'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Shield, Zap, CheckCircle } from 'lucide-react';

const clients = [
  { name: 'Delhi Public School', abbr: 'DPS', description: 'India\'s Premier Educational Institution' },
  { name: 'Punjab National Bank', abbr: 'PNB', description: 'One of India\'s Largest Public Sector Banks' },
  { name: 'Shyam Steel', abbr: 'SS', description: 'Leading Steel Manufacturing Company' },
];

const whyChooseUs = [
  {
    icon: Award,
    title: '10+ Years of Experience',
    description: 'Over a decade helping businesses grow through outdoor advertising. We know what works — and what doesn\'t.',
  },
  {
    icon: Users,
    title: '500+ Successful Campaigns',
    description: 'From schools to banks to steel companies — we\'ve helped businesses of every size get noticed across India.',
  },
  {
    icon: Shield,
    title: 'Zero Hassle for You',
    description: 'Design, printing, installation — we handle everything. You focus on running your business, we handle the rest.',
  },
  {
    icon: Zap,
    title: 'Results in Days, Not Weeks',
    description: 'Need it fast? Our express service gets your brand live in as little as 3 days. Standard campaigns launch in 5-7 days.',
  },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '80px' });

  return (
    <section id="clients" className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 heading-gradient-wrap"
          >
            {'Brands That '}
            <span className="text-gradient-brand">{'Trust Us'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re proud to partner with India&apos;s most recognized brands,
            delivering advertising solutions that drive real results.
          </motion.p>
        </div>

        {/* Client Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.abbr}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="group relative rounded-2xl p-6 md:p-8 bg-[#F8FAFC] border border-gray-100 hover:border-[#00A651]/20 transition-all duration-500 text-center overflow-hidden group-hover:scale-[1.02] group-hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDF4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-2xl bg-white flex items-center justify-center border border-gray-100 group-hover:border-[#00A651]/20 transition-colors duration-500 shadow-sm">
                  <span className="text-2xl md:text-3xl font-black text-[#00A651] tracking-tight">
                    {client.abbr}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="section-divider mb-4 md:mb-6" />

        <div className="text-center mb-4 md:mb-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 inline-block border-l-4 border-[#00A651] pl-4"
          >
            Why Choose <span className="text-gradient-brand">APTEK MEDIA</span>?
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i + 0.15 }}
              className="text-center p-5 md:p-6 rounded-xl bg-[#F8FAFC] border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#F0FDF4] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#00A651]" />
                </div>
                <CheckCircle size={20} className="text-[#00A651] opacity-60" />
              </div>
              <h4 className="text-gray-900 font-bold text-base md:text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
