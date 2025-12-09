"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Search, ShoppingCart, Menu, X } from "lucide-react";
import Topbar from "./Topbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <Topbar></Topbar>

      {/* Main Navbar */}
      <div className="px-4 h-20 flex items-center justify-between relative">
        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex gap-10 font-semibold text-[15px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            className="cursor-pointer hover:text-primary transition"
          >
            Home
          </Link>

          <Link
            href="/packages"
            className="cursor-pointer hover:text-primary transition"
          >
            Packages
          </Link>

          <Link href="/services">Services</Link>

          <Link
            href="/contact"
            className="cursor-pointer hover:text-primary transition"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="cursor-pointer hover:text-primary transition"
          >
            About Me
          </Link>
        </div>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-6 space-x-6 absolute right-20 top-1/2 transform -translate-y-1/2">
          <Search className="w-6 h-6 cursor-pointer hover:text-primary transition" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-primary transition" />
          <User className="w-6 h-6 cursor-pointer hover:text-primary transition" />
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3 absolute right-14 z-20">
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-3 z-20"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-h duration-700 ease-in-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 font-semibold p-4! space-y-5 bg-white border-t border-gray-100  ">
          <Link
            href="/"
            className=" block w-full  cursor-pointer hover:text-primary transition"
          >
            Homee
          </Link>

          <Link
            href="/packages"
            className="cursor-pointer hover:text-primary transition"
          >
            Packages
          </Link>

          <Link
            href="/services"
            className="cursor-pointer hover:text-primary transition "
          >
            Service
          </Link>

          <Link
            href="/contact"
            className="cursor-pointer hover:text-primary transition ml-5"
          >
            Contact Us
          </Link>

          <Link
            href="/about"
            className="cursor-pointer hover:text-primary transition block"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
