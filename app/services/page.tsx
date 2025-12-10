// app/services/page.tsx
import { Heart, Stethoscope, Activity, Phone, TestTube2,  Hospital } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

const services = [
  {
    title: "Nursing at Home",
    icon: Heart,
    desc: "24/7 certified & trained nurses for post-surgery, elderly care, chronic illness & ICU-level support at home.",
    features: ["12/7 or 24/7 availability", "Permanent employed nurses", "Medication & wound care"],
    price: "From ৳32,900/month",
    popular: false,
  },
  {
    title: "Doctor Home Visit",
    icon: Stethoscope,
    desc: "Experienced doctors visit your home for consultation, check-up & treatment planning.",
    features: ["MBBS & specialist doctors", "Prescription & follow-up", "Emergency visit available"],
    price: "From ৳1,500/visit",
    popular: false,
  },
  {
    title: "Physiotherapy at Home",
    icon: Activity,
    desc: "Professional physiotherapists help you recover faster from injury, surgery or stroke.",
    features: ["Personalized treatment plan", "Post-surgery rehab", "Pain management"],
    price: "From ৳1,200/session",
    popular: true,
  },
  {
    title: "Pathology & Diagnostic Test",
    icon: TestTube2,
    desc: "Sample collection from home & digital report delivery within hours.",
    features: ["Blood test, urine, ECG", "100% accurate reports", "Home sample collection"],
    price: "From ৳500/test",
    popular: false,
  },
  {
    title: "Medical Equipment Rental",
    icon: Hospital,
    desc: "Rent or buy oxygen concentrator, hospital bed, wheelchair, suction machine & more.",
    features: ["Brand new & sanitized", "Free delivery & installation", "24/7 support"],
    price: "From ৳2,000/month",
    popular: false,
  },
  {
    title: "Emergency Response",
    icon: Phone,
    desc: "Instant ambulance coordination & emergency nurse/doctor dispatch within 30–60 mins in Dhaka.",
    features: ["24/7 hotline", "Ambulance with oxygen", "Trained paramedic"],
    price: "Call for immediate help",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-500 to-red-600 py-20  lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Complete hospital-level care delivered to your doorstep. Choose the service that fits your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 ${
                    service.popular ? "ring-4 ring-blue-500 ring-opacity-30 lg:scale-105" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-linear-to-r from-red-600 to-rose-600 text-white px-5 py-2 rounded-full text-sm font-bold z-10">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-8 lg:p-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="bg-linear-to-br from-purple-500 to-red-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center">
                        <Icon className="w-9 h-9 lg:w-11 lg:h-11 text-white" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm lg:text-base">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-8">
                      <p className="text-3xl font-black text-blue-600">
                        {service.price}
                      </p>
                    </div>

                    {/* CTA Button */}

                    <Link href={`/services/${service.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
                    
                    <button className="w-full  cursor-pointer bg-linear-to-br from-purple-500 to-red-600 hover:from-red-700 hover:to-blue-500 text-white font-bold text-lg py-4 rounded-full transition-all hover:shadow-lg transform hover:scale-105">
                      Book Now
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-r mb-20 from-red-600 to-blue-800">
        <div className="container mx-auto px-6  lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
            Need Custom Care Package?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Call us anytime – our team will create a personalized care plan for your loved one.
          </p>
          <a
            href="tel:01724641489"
            className="inline-flex items-center gap-4 bg-white text-blue-700 font-bold text-2xl px-12 py-6 rounded-full hover:bg-gray-100 transition shadow-2xl"
          >
            <Phone className="w-8 h-8" />
            Call 01724-641489
          </a>
        </div>
      </section>
    </>
  );
}