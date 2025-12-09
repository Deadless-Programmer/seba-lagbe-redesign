// app/components/CallToActionSection.tsx
"use client";

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-20 lg:py-24 bg-linear-to-br from-red-600 to-purple-600">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
            One Call Can Bring
            <br className="hidden lg:block" />
            Hospital at Your Doorstep
          </h2>

          {/* Call Button */}
          <motion.a
            href="tel:+880123456789" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-white text-blue-600 font-bold text-xl lg:text-2xl px-10 lg:px-12 py-5 lg:py-6 rounded-full shadow-2xl hover:shadow-blue-300 transition-all duration-300"
          >
            <Phone className="w-7 h-7 lg:w-8 lg:h-8" />
            Call Us Today
          </motion.a>

          {/* Optional: Number display below */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg lg:text-xl mt-6 font-medium"
          >
            Hotline: <span className="font-bold">+880 123 456 789</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}