// app/services/[service]/page.tsx
"use Client";
import { notFound } from "next/navigation";
import { 
  Heart, Stethoscope, Activity, Phone, TestTube2, Hospital, 
   User,
   Calendar,
   Clock,
   MessageSquare, 
} from "lucide-react";
import { use } from "react"; // ← Ei line add koro!

const serviceData: Record<string, any> = {
  "nursing-at-home": {
    title: "Nursing at Home",
    icon: Heart,
    price: "From ৳32,900/month",
    desc: "24/7 certified & trained nurses for post-surgery, elderly care, chronic illness & ICU-level support at home.",
    features: ["12/7 or 24/7 availability", "Permanent employed nurses", "Medication & wound care", "Daily vital monitoring", "Family coordination"],
  },
  "doctor-home-visit": {
    title: "Doctor Home Visit",
    icon: Stethoscope,
    price: "From ৳1,500/visit",
    desc: "Experienced MBBS & specialist doctors visit your home for consultation & treatment.",
    features: ["Prescription & medicine advice", "Follow-up visits", "Emergency availability", "Digital report sharing"],
  },
  "physiotherapy-at-home": {
    title: "Physiotherapy at Home",
    icon: Activity,
    price: "From ৳1,200/session",
    desc: "Professional physiotherapists help you recover faster from injury, surgery or stroke.",
    features: ["Personalized treatment plan", "Post-surgery rehab", "Pain management", "Home exercise guidance"],
  },
  "pathology-diagnostic-test": {
    title: "Pathology & Diagnostic Test",
    icon: TestTube2,
    price: "From ৳500/test",
    desc: "Sample collection from home & digital report delivery within hours.",
    features: ["Blood, urine, ECG, X-ray", "100% accurate reports", "Home collection", "Digital delivery"],
  },
  "medical-equipment-rental": {
    title: "Medical Equipment Rental",
    icon: Hospital,
    price: "From ৳2,000/month",
    desc: "Rent oxygen concentrator, hospital bed, wheelchair, suction machine & more.",
    features: ["Free delivery & setup", "Brand new & sanitized", "24/7 support", "Flexible rental period"],
  },
  "emergency-response": {
    title: "Emergency Response",
    icon: Phone,
    price: "Call for immediate help",
    desc: "Instant ambulance & medical team dispatch within 30–60 mins in Dhaka.",
    features: ["24/7 hotline", "Ambulance with oxygen", "Trained paramedic", "Hospital coordination"],
  },
};

export default function ServiceBookingPage({ 
  params 
}: { 
  params: Promise<{ service: string }> 
}) {
  const { service } = use(params);
  const resolvedService = serviceData[service];

  if (!resolvedService) notFound();

  const Icon = resolvedService.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur p-6 rounded-3xl">
              <Icon className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-4">{resolvedService.title}</h1>
          <p className="text-2xl opacity-90">{resolvedService.price}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Service Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                Service Details
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {resolvedService.desc}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What’s Included
              </h3>
              <ul className="space-y-4">
                {resolvedService.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Complete Booking Form with Date & Time */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-10">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Book This Service
              </h3>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none" 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="tel" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none" 
                      placeholder="01XXXXXXXXX" 
                      required 
                    />
                  </div>
                </div>

                {/* Date & Time - Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="date" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none" 
                        min={new Date().toISOString().split("T")[0]}
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="time" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                    <textarea 
                      rows={4} 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none resize-none" 
                      placeholder="Any special request or patient condition?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl py-5 rounded-full transition-all hover:shadow-2xl transform hover:scale-105"
                >
                  Confirm Booking Request
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We will call you within <strong>10 minutes</strong> to confirm your booking
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
