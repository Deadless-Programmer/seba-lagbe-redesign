// app/components/AdditionalServicesSection.tsx
"use client";

import { motion } from 'framer-motion';
import { 
  UserCheck, 
  TestTube2, 
  Activity, 
  Video, 
  Pill, 
  Stethoscope  
} from 'lucide-react';

const services = [
  {
    icon: UserCheck,
    title: "Nursing at Home",
    desc: "Experienced nurses available 24/7 at your doorstep",
  },
  {
    icon: TestTube2,
    title: "Pathology Test",
    desc: "Sample collection & reports delivered to your home",
  },
  {
    icon: Activity,
    title: "Physiotherapy at Home",
    desc: "Professional physio sessions for faster recovery",
  },
  {
    icon: Video,
    title: "Doctor Consultancy",
    desc: "Video & in-person consultation with specialist doctors",
  },
  {
    icon: Pill,
    title: "Medicine & Accessories",
    desc: "Genuine medicine & medical accessories delivery",
  },
  {
    icon: Stethoscope, 
    title: "Medical Equipment",
    desc: "Rent or buy oxygen, wheelchairs, hospital beds & more",
  },
];

export default function AdditionalServicesSection() {
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
            Our Additional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete healthcare support beyond packages — everything you need, delivered to your home.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:border-blue-300">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div className="bg-linear-to-br from-purple-500 to-blue-600 p-6 rounded-3xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}