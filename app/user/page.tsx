// app/page.tsx
import { Calendar, MapPin, Phone, CreditCard, Home, Settings, Mail } from "lucide-react";

export default function UserDashboard() {
 
  const user = {
    name: "Rahim Ahmed",
    phone: "01724-641489",
    address: "House 22/A, Mirpur 2, Dhaka 1216",
    email: "rahim@example.com",
  };

  const bookings = [
    {
      id: "ORD-2025-001",
      service: "Nursing at Home (24/7)",
      status: "Ongoing",
      startDate: "10 Dec 2025",
      nurse: "Sister Fatima Begum",
      price: "৳57,900/month",
    },
    {
      id: "ORD-2025-002",
      service: "Physiotherapy at Home",
      status: "Completed",
      startDate: "15 Nov 2025",
      endDate: "05 Dec 2025",
      sessions: "20 sessions",
      price: "৳24,000",
    },
    {
      id: "ORD-2025-003",
      service: "Doctor Home Visit",
      status: "Completed",
      date: "28 Nov 2025",
      doctor: "Dr. Kamal Hossain",
      price: "৳2,000",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 text-white">
          <h1 className="text-4xl lg:text-6xl font-black mb-4">My Dashboard</h1>
          <p className="text-xl opacity-90">Manage your bookings, profile & services in one place</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sticky top-6">
                <div className="flex items-center gap-5 mb-8">
                  <div className="bg-linear-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{user.name}</h3>
                    <p className="text-gray-600">Patient Account</p>
                  </div>
                </div>

                <div className="space-y-5 text-gray-700">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>{user.address}</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-full transition-all">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Booking History */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                My Bookings & History
              </h2>

              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 lg:p-8 hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-black text-gray-900">{booking.service}</h3>
                          <span
                            className={`px-4 py-1 rounded-full text-sm font-bold ${
                              booking.status === "Ongoing"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-gray-600">Order ID: {booking.id}</p>
                        {booking.startDate && (
                          <p className="text-gray-600 flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4" />
                            Started: {booking.startDate}
                          </p>
                        )}
                        {booking.nurse && (
                          <p className="text-gray-700 mt-2">Assigned Nurse: {booking.nurse}</p>
                        )}
                        {booking.doctor && (
                          <p className="text-gray-700 mt-2">Doctor: {booking.doctor}</p>
                        )}
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-black text-blue-600">{booking.price}</p>
                        <button className="mt-3 text-blue-600 font-bold hover:underline">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <button className="bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold py-6 rounded-3xl hover:shadow-xl transition-all flex flex-col items-center gap-3">
                  <Home className="w-10 h-10" />
                  <span>Book New Service</span>
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-6 rounded-3xl hover:bg-blue-50 transition-all flex flex-col items-center gap-3">
                  <CreditCard className="w-10 h-10" />
                  <span>Payment History</span>
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-6 rounded-3xl hover:bg-blue-50 transition-all flex flex-col items-center gap-3">
                  <Settings className="w-10 h-10" />
                  <span>Account Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}