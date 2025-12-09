// app/components/WhatWeAreSection.tsx
"use client";

import Image from 'next/image';

export default function WhatWeAreSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* What We Are – Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
              What We Are
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>Sheba Lagbe is a new kind of healthcare company—built with purpose, care, and vision.</p>
              <p>We provide <strong>certified, trained, and permanently employed nurses</strong> along with essential medical equipment, to deliver complete hospital-level care in the comfort of your home. Every service we offer is managed directly by us—no brokers, no compromises.</p>
              <p>Our goal is simple but bold: to decentralize hospital care and make quality healthcare more personal, accessible, and dignified...</p>
              <p className="font-semibold text-gray-800">We are not a link in the chain. We are the chain.</p>
              <p className="text-xl font-bold text-blue-600">We are Sheba Lagbe. We bring the hospital home.</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1758206523745-1f334f702660?q=80&w=1172&auto=format&fit=crop"
                alt="Sheba Lagbe nurses providing compassionate care"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* What We Are Not – Image Left, Text Right (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image – Left on desktop, top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1758691462519-99076ad0d485?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="We are not brokers – professional healthcare team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Text – Right on desktop, bottom on mobile */}
          <div className="space-y-6 order-2 lg:order-2">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
              What We Are Not
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>Sheba Lagbe is not a broker agency.</p>
              <p>We do not act as middlemen who simply connect patients with caregivers and walk away. Many broker agencies provide untrained, temporary nurses without accountability...</p>
              <p>We believe healthcare is a serious responsibility—not a transaction. That’s why we employ skilled, certified nurses under permanent contracts...</p>
              <p className="font-semibold text-gray-800">We are not brokers. We are responsible healthcare providers.</p>
              <p className="text-xl font-bold text-red-600">We are committed to setting a higher standard in home healthcare.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}