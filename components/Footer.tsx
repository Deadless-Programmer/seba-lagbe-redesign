// app/components/Footer.tsx
"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-600 via-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Logo + Description */}
          <div className="space-y-6">
            <div className="relative w-64 h-24">
              <Image
                src="https://i.postimg.cc/tT1hxmNY/logo.png"
                alt="Sheba Lagbe Logo"
                fill
                priority
                sizes="(max-width: 768px) 200px, 260px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-sm lg:text-base text-blue-100 leading-relaxed max-w-xs">
              Sheba Lagbe envisions a world where healthcare is personal, affordable, and accessible for everyone, starting from your living room.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="hover:text-white transition">Hospital at Home</li>
              <li className="hover:text-white transition">Nursing at Home</li>
              <li className="hover:text-white transition">Physiotherapy</li>
              <li className="hover:text-white transition">Pathology & Diagnostic Test</li>
              <li className="hover:text-white transition">Consult With Doctor</li>
              <li className="hover:text-white transition">Medical Equipment</li>
            </ul>
          </div>

          {/* Our Policies + Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Our Policies</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="hover:text-white transition">Privacy Policy</li>
                <li className="hover:text-white transition">Terms & Conditions</li>
                <li className="hover:text-white transition">Refund and Returns Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-blue-100 text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>01724641489</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@shebalagbe.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Mirpur 2, Dhaka 1216</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-blue-100 mb-4 text-sm lg:text-base">
              Subscribe to our newsletter to get latest update and discount offer.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-3 rounded-full text-white placeholder-white border-2 focus:outline-none flex-1"
              />
              <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition whitespace-nowrap">
                SEND
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            Copyright © 2025 Sheba Lagbe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}