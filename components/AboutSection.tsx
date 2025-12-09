// app/components/AboutSection.tsx
"use client";

import { Heart, Stethoscope, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side - Video Card */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl   border border-gray-200 overflow-hidden">
              <div className="relative w-full pt-[56.25%] h-[480px]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/CAILmTEzQrY?si=5f9c803b-a77d-4c86-aceb-03a5aee58471"
                  title="Sheba Lagbe - Hospital at Home Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-10 lg:space-y-12 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                About Us
              </h2>
            </div>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl">
              Sheba Lagbe – Hospital at Home is a revolutionary healthcare startup from Bangladesh, 
              introducing the world’s first fully home-based hospital service. Our mission is to 
              decentralize traditional hospital systems and bring complete medical care directly 
              to your doorstep.
            </p>

            {/* Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-linear-to-r from-pink-600 to-purple-600 p-4 lg:p-5 rounded-2xl shrink-0">
                  <Heart className="w-9 h-9 lg:w-11 lg:h-11 text-white" />
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Compassionate Care</h4>
                  <p className="text-gray-600">Our nurses treat every patient like family with dignity and love</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-linear-to-r from-pink-600 to-purple-600 p-4 lg:p-5 rounded-2xl shrink-0">
                  <Stethoscope className="w-9 h-9 lg:w-11 lg:h-11 text-white" />
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Full Hospital Setup at Home</h4>
                  <p className="text-gray-600">ICU equipment, oxygen, monitors — everything delivered & installed</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-linear-to-r from-pink-600 to-purple-600 p-4 lg:p-5 rounded-2xl shrink-0">
                  <Users className="w-9 h-9 lg:w-11 lg:h-11 text-white" />
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">24/7 Medical Team</h4>
                  <p className="text-gray-600">Doctors, nurses, medicine delivery & emergency response anytime</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-linear-to-br from-purple-600 to-red-800 rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl lg:text-6xl font-black text-white">142+</h3>
                <p className="text-blue-100 font-semibold mt-3">Happy Patients</p>
              </div>
              <div className="bg-linear-to-br from-purple-600 to-red-800 rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl lg:text-6xl font-black text-white">66+</h3>
                <p className="text-blue-100 font-semibold mt-3">Qualified Nurses</p>
              </div>
              <div className="bg-linear-to-br from-purple-600 to-red-800  rounded-3xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl lg:text-6xl font-black text-white">3</h3>
                <p className="text-blue-100 font-semibold mt-3">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}