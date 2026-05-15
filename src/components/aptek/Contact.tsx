'use client';

import { useRef, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '80px' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    // Direct WhatsApp redirect with form data
    const waMessage = encodeURIComponent(
      `Hi APTEK MEDIA!\n\nI'd like to inquire about your advertising services.\n\n📋 *Name:* ${name}\n📱 *Phone:* ${phone}\n🔧 *Service:* ${service}${message ? `\n💬 *Message:* ${message}` : ''}\n\nPlease share pricing and availability. Thanks!`
    );
    window.open(`https://wa.me/919932138191?text=${waMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 md:py-28 bg-[#F8FAFC]">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900"
          >
            {"Let's Build Your "}
            <span className="text-gradient-brand">{'Brand'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Fill the form below — your inquiry goes directly to our WhatsApp for instant response.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-5 sm:p-6 md:p-8 bg-white border border-gray-100 shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send an Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Your Name *</label>
                    <input type="text" name="name" required placeholder="Enter your name" className="form-input-aptek w-full px-4 py-3 rounded-xl text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="Enter phone number" className="form-input-aptek w-full px-4 py-3 rounded-xl text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Service Required *</label>
                  <select name="service" required className="form-input-aptek w-full px-4 py-3 rounded-xl text-sm appearance-none">
                    <option value="">Select a service</option>
                    <option value="Hoardings">Hoardings</option>
                    <option value="Outdoor Advertising">Outdoor Advertising</option>
                    <option value="Flex Printing">Flex Printing</option>
                    <option value="Shop Branding">Shop Branding</option>
                    <option value="Banner Printing">Banner Printing</option>
                    <option value="Event Branding">Event Branding</option>
                    <option value="Political Campaign Branding">Political Campaign Branding</option>
                    <option value="Billboard Installation">Billboard Installation</option>
                    <option value="LED Sign Boards">LED Sign Boards</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Message</label>
                  <textarea name="message" rows={3} placeholder="Tell us about your project requirements..." className="form-input-aptek w-full px-4 py-3 rounded-xl text-sm resize-none" />
                </div>

                {/* Single CTA — WhatsApp Direct */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Inquiry via WhatsApp
                </button>

                <p className="text-center text-gray-400 text-xs">
                  Clicking the button will open WhatsApp with your details pre-filled
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 sm:space-y-5"
          >
            <div className="rounded-2xl p-4 sm:p-5 md:p-6 bg-white border border-gray-100 shadow-sm space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A651]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Office Address</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">APTEK Media<br />Main Road, City Center<br />India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A651]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Phone</h4>
                  <a href="tel:+919932138191" className="text-gray-600 text-xs sm:text-sm hover:text-[#00A651] transition-colors">+91 99321 38191</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A651]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Email</h4>
                  <a href="mailto:info@aptekmedia.in" className="text-gray-600 text-xs sm:text-sm hover:text-[#00A651] transition-colors">info@aptekmedia.in</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A651]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-xs sm:text-sm mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-40 sm:h-48 md:h-56 hover:shadow-md transition-shadow duration-300">
              <iframe
                src="https://maps.google.com/maps?q=23.3268592,86.3674747&z=16&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="APTEK Media Office Location"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919932138191?text=Hi%20APTEK%20MEDIA%2C%20I%20need%20a%20quick%20quote%20for%20advertising."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-4 sm:p-5 md:p-6 bg-[#F0FDF4] border border-[#00A651]/10 hover:border-[#00A651]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#00A651]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A651]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm sm:text-base group-hover:text-[#008C45] transition-colors">Need Instant Response?</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">Chat with us on WhatsApp for a quick quote</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
