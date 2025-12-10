// app/provider/dashboard/page.tsx
import { Calendar, Clock, MapPin, Phone, User, CheckCircle, XCircle, Stethoscope, Home } from "lucide-react";

export default function ProviderDashboard() {
  // Demo data – real project e auth + API diye asbe
  const provider = {
    name: "Sister Fatima Begum",
    role: "Senior Nurse",
    id: "NUR-2025-012",
    phone: "017XX-XXXXXX",
    totalPatients: 8,
    activeAssignments: 3,
  };

  const assignments = [
    {
      id: "ORD-2025-001",
      patientName: "Abdul Karim (72)",
      service: "Nursing at Home (24/7)",
      address: "House 15, Road 8, Banani, Dhaka",
      startDate: "10 Dec 2025",
      duration: "30 days",
      status: "pending", // pending, accepted, ongoing, completed
      phone: "017XX-XXXXXX",
      condition: "Post-stroke care, bedridden",
    },
    {
      id: "ORD-2025-002",
      patientName: "Mrs. Rehana Begum (58)",
      service: "Nursing at Home (12/7)",
      address: "Flat A3, Mirpur 10, Dhaka",
      startDate: "12 Dec 2025",
      duration: "Ongoing",
      status: "accepted",
      phone: "017XX-XXXXXX",
      condition: "Diabetes management, daily injection",
    },
    {
      id: "ORD-2025-003",
      patientName: "Mr. Shahidul Islam (45)",
      service: "Post-surgery Care",
      address: "Uttara Sector 13, Dhaka",
      startDate: "08 Dec 2025",
      endDate: "Completed",
      status: "completed",
      phone: "017XX-XXXXXX",
      condition: "Knee replacement recovery",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-orange-100 text-orange-800";
      case "accepted": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-red-500 to-purple-800 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-6xl font-black mb-2">Welcome back,</h1>
              <p className="text-2xl lg:text-3xl font-bold">{provider.name}</p>
              <p className="text-lg opacity-90">{provider.role} • ID: {provider.id}</p>
            </div>
            <div className="text-center lg:text-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur p-6 rounded-3xl">
                  <p className="text-4xl font-black">{provider.activeAssignments}</p>
                  <p className="text-lg">Active Patients</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-6 rounded-3xl">
                  <p className="text-4xl font-black">{provider.totalPatients}</p>
                  <p className="text-lg">Total Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-10">
            Your Assigned Tasks
          </h2>

          <div className="space-y-8">
            {assignments.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Patient Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-linear-to-br from-red-500 to-purple-800  w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {job.patientName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-gray-900">{job.patientName}</h3>
                          <p className="text-gray-600">{job.service}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-sm lg:text-base">{job.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span className="text-sm lg:text-base">{job.phone}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="text-sm lg:text-base">
                            Start: {job.startDate} {job.endDate && `• End: ${job.endDate}`}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Stethoscope className="w-5 h-5 text-blue-600" />
                          <span className="text-sm lg:text-base">{job.condition}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Status + Action */}
                    <div className="flex flex-col items-center lg:items-end gap-4">
                      <span className={`px-6 py-2 rounded-full font-bold text-sm ${getStatusColor(job.status)}`}>
                        {job.status.toUpperCase()}
                      </span>

                      {job.status === "pending" && (
                        <div className="flex gap-3">
                          <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition">
                            <CheckCircle className="w-5 h-5" />
                            Accept
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition">
                            <XCircle className="w-5 h-5" />
                            Decline
                          </button>
                        </div>
                      )}

                      {job.status === "accepted" && (
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition">
                          Start Visit
                        </button>
                      )}

                      {job.status === "completed" && (
                        <span className="text-gray-500 font-medium">Service Completed</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-linear-to-br from-red-500 to-purple-800  text-white p-8 rounded-3xl text-center">
              <Home className="w-12 h-12 mx-auto mb-3" />
              <p className="text-4xl font-black">3</p>
              <p className="text-lg">Active Homes</p>
            </div>
            <div className="bg-white border-2 border-purple-800 text-blue-600 p-8 rounded-3xl text-center">
              <Calendar className="w-12 h-12 mx-auto mb-3" />
              <p className="text-4xl font-black">24</p>
              <p className="text-lg">Visits This Month</p>
            </div>
            <div className="bg-white border-2 border-purple-800 text-blue-600 p-8 rounded-3xl text-center">
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <p className="text-4xl font-black">98%</p>
              <p className="text-lg">On-Time Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}