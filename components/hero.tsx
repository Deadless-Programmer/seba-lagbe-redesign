// app/components/HeroSection.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const carouselItems = [
  {
    title: "Basic Package",
    service: "Normal patients needing basic support",
    price: "32,900",
    validity: "Monthly",
    gradient: "from-red-600 to-rose-600",
  },
  {
    title: "Advanced Package",
    service: "Bedridden or critical patients",
    price: "57,900",
    validity: "Monthly",
    gradient: "from-pink-600 to-red-600",
  },
  {
    title: "Standard Package",
    service: "Patients who need assistance to live",
    price: "42,900",
    validity: "Monthly",
    gradient: "from-rose-600 to-purple-600",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const item = carouselItems[currentIndex];

  return (
    <section className="min-h-screen bg-black text-white flex items-center overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-red-950/30 via-black to-black" />
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Smooth Carousel (Ager Design Exactly) */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute"
            >
              <div className="relative group">
                {/* Card Background - Glassmorphism */}
                <div className="bg-linear-to-br from-red-500/10 to-rose-500/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-500/20">
                  <div className="bg-gray-800/50 border-2 border-dashed border-red-500/30 rounded-2xl w-96 h-96 lg:w-[420px] lg:h-[420px] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-85`} />
                    
                    <div className="relative z-10 text-center text-white space-y-6">
                      <Heart className="w-16 h-16 mx-auto animate-pulse" fill="currentColor" />
                      
                      <div>
                        <h3 className="text-3xl font-bold">{item.title}</h3>
                        <p className="text-sm mt-2 opacity-90">{item.service}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-5xl font-black">৳{item.price}</p>
                        <p className="text-lg opacity-80">per {item.validity}</p>
                      </div>

                      <div className="flex items-center gap-2 text-sm opacity-80">
                        <Sparkles className="w-4 h-4" />
                        <span>Nurse + Equipment Included</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Price Badge (Ager Style) */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -right-6 bg-linear-to-br from-red-500 to-rose-500 text-white px-10 py-5 rounded-full shadow-2xl font-bold text-2xl flex items-center gap-3"
                  >
                    <Sparkles className="w-7 h-7" />
                    ৳{item.price}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-red-500 w-12" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Text & CTA */}
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Hospital Care
              <br />
              <span className="inline-block bg-linear-to-r from-blue-500 to-rose-500  bg-clip-text text-transparent">
                At Home
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Get professional nursing care and medical equipment delivered to your doorstep. 
            Recover peacefully with hospital-standard treatment — right at home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-5 px-10 rounded-full flex items-center gap-3 transition-all hover:shadow-2xl hover:shadow-red-500/30 text-lg">
              Book Package Now
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border border-gray-700 hover:border-red-500 text-white font-medium py-5 px-10 rounded-full transition-all text-lg">
              View Details
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 text-gray-500"
          >
            <span className="hover:text-red-500 transition cursor-pointer">Twitter</span>
            <span className="hover:text-red-500 transition cursor-pointer">Instagram</span>
            <span className="hover:text-red-500 transition cursor-pointer">Facebook</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}