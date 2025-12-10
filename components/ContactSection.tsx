// app/components/ContactSection.tsx
"use client";

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side – Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Contact Us Today
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reach out to Sheba Lagbe—your trusted partner for quick, reliable service whenever you need it most.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-4 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">01724641489</p>
                  <p className="text-gray-600">Call anytime – 24/7 available</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-4 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">info@shebalagbe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-4 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">22/15/A, 60Feet, Borobagh</p>
                  <p className="text-gray-600">Mirpur-2, Dhaka 1216</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-6">
              <p className="text-lg font-semibold text-gray-800">Get in touch</p>
             <div className="flex gap-3">
  {/* Facebook */}
  <a 
    href="https://facebook.com/shebalagbe" 
    target="_blank" 
    rel="noopener noreferrer"
    className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-3 rounded-full transition"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a 
    href="https://instagram.com/shebalagbe" 
    target="_blank" 
    rel="noopener noreferrer"
    className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-3 rounded-full  transition"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281 .te059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a 
    href="https://twitter.com/shebalagbe" 
    target="_blank" 
    rel="noopener noreferrer"
    className="cursor-pointer bg-purple-600 hover:bg-blue-700 p-3 rounded-full  transition"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 1.666 1.769 1.136 3.872 1.8 6.126 1.8 7.356 0 11.382-6.103 11.382-11.402 0-.174-.004-.348-.012-.521 1.783-.894 3.327-2.01 4.818-3.286z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/company/shebalagbe" 
    target="_blank" 
    rel="noopener noreferrer"
    className="cursor-pointer bg-purple-600 p-3 rounded-full ansition"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a 
    href="https://youtube.com/@shebalagbe" 
    target="_blank" 
    rel="noopener noreferrer"
    className="cursor-pointer bg-purple-600 p-3 rounded-full  transition"
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
    </svg>
  </a>
</div>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8">
              You tell us. We listen.
            </h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-4  rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-lg"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-lg resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-purple-600 hover:bg-blue-700 text-white font-bold text-xl py-5 rounded-full transition-all hover:shadow-lg"
              >
                SEND
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}