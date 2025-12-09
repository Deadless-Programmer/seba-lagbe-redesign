// app/components/PackagesSection.tsx
"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const packages = [
  {
    name: "Basic Package",
    subtitle: "Normal patients needing basic support",
    price: "32,900",
    features: [
      "Caregiver (12/7) with 3+ years experience",
      "1+ Free Doctor Consultation per month",
      "6+ Equipments Included",
      "Discount on Diagnostics & Pathology",
    ],
    popular: false,
  },
  {
    name: "Advance Package",
    subtitle: "Bedridden or critical patients",
    price: "57,900",
    features: [
      "Senior Nurse (12/7) with 5+ years experience",
      "5+ Doctor & Nutritionist Consultations per month",
      "15+ Equipments Included",
      "Basic Physiotherapy Support",
      "Discount on Diagnostics & Pathology",
      "5% discount on Medicine Equipment",
    ],
    popular: true,
  },
  {
    name: "Standard Package",
    subtitle: "Patients who need assistance to live",
    price: "42,900",
    features: [
      "Junior Nurse (12/7) with 3+ years experience",
      "2+ Free Doctor Consultations per month",
      "10+ Equipments Included",
      "Discount on Diagnostics & Pathology",
    ],
    popular: false,
  },
];

export default function PackagesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-play for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * (carouselRef.current.clientWidth + 32),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
            Hospital at Home Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect care package for your loved ones. Complete hospital facilities delivered to your home.
          </p>
        </motion.div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Mobile: Manual Scroll Carousel */}
        <div className="block lg:hidden relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth px-4 -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {packages.map((pkg, index) => (
              <div key={index} className="w-full shrink-0 snap-center px-4">
                <PackageCard pkg={pkg} index={index} />
              </div>
            ))}
          </div>

          {/* Manual Navigation Buttons */}
          <button
            onClick={() => scrollToIndex((currentIndex - 1 + packages.length) % packages.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollToIndex((currentIndex + 1) % packages.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? "w-10 h-3 bg-blue-600 rounded-full"
                    : "w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Same Card Component
function PackageCard({ pkg, index }: { pkg: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        pkg.popular ? "lg:scale-110 lg:-mt-8 z-10" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-linear-to-br from-red-600 to-purple-600 text-white px-8 py-2 text-sm font-bold rounded-bl-3xl z-20 shadow-lg">
          POPULAR
        </div>
      )}

      <div className="p-8 lg:p-10 text-center">
        <div className="mb-8">
          <h3 className="text-2xl lg:text-3xl font-black text-gray-900">
            {pkg.name}
          </h3>
          <p className="text-gray-600 mt-2 text-sm lg:text-base">
            {pkg.subtitle}
          </p>
        </div>

        <div className="mb-10">
          <span className="text-5xl lg:text-6xl font-black text-gray-900">
            ৳{pkg.price}
          </span>
          <span className="text-xl text-gray-600 font-medium"> /Monthly</span>
        </div>

        <ul className="space-y-5 text-left mb-10">
          {pkg.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-4">
              <Check className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-red-700 hover:from-purple-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:shadow-lg transform hover:-translate-y-1">
          Book Now
        </button>
      </div>
    </motion.div>
  );
}