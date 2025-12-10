// app/components/SatisfiedClientsSection.tsx
"use client";

// import Image from 'next/image';

export default function SatisfiedClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white bg-linear-to-r from-blue-600 to-red-700 inline-block px-12 py-6 rounded-3xl shadow-lg">
            Our Satisfied Clients
          </h2>
        </div>

        {/* Video Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/SHzZpJUHl9Q?si=Af2dtBUU3tvak3BH"
                title="Sheba Lagbe - Patient Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Optional: Caption */}
            <div className="p-8 lg:p-10 text-center">
              <p className="text-2xl font-bold text-gray-800">
                Sheba Lagbe brought the entire hospital to our home when we needed it most.
              </p>
              <p className="text-lg text-gray-600 mt-3">
                — Mr. Rahman, Dhaka (Father of ICU Patient)
              </p>
            </div>
          </div>
        </div>

        {/* Future: Multiple Testimonials (Grid) */}
      
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-200 border-2 border-dashed border-gray-300"></div>
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-800">Patient Name</p>
                <p className="text-gray-600">Location</p>
              </div>
            </div>
          ))}
        </div>
        */}

      </div>
    </section>
  );
}