"use client";

import { useState } from "react";
import { User } from "lucide-react";
import Topbar from "./Topbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      {/* Topbar */}
      <Topbar />

      {/* Main Navbar */}
      <div className=" px-4 h-20 flex  items-center justify-between relative">
        {/* Center Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-[15px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li className="cursor-pointer hover:text-primary transition">Home</li>
          <li className="cursor-pointer hover:text-primary transition">Packages</li>
          <li className="cursor-pointer text-blue-500 relative">
            Services
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-500"></span>
          </li>
          <li className="cursor-pointer hover:text-primary transition">Contact Us</li>
          <li className="cursor-pointer hover:text-primary transition">ABOUT ME</li>
        </ul>

        {/* User Icon - right corner */}
        <div className="hidden md:flex items-center space-x-4 absolute right-20 top-1/2 transform -translate-y-1/2">
          <User className="w-6 h-6 cursor-pointer hover:text-primary transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-0"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[3px] bg-black"></span>
            <span className="block w-6 h-[3px] bg-black"></span>
            <span className="block w-6 h-[3px] bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 px-4 max-w-7xl mx-auto">
          <ul className="flex flex-col gap-4 font-semibold">
            <li className="cursor-pointer hover:text-primary transition">Home</li>
            <li className="cursor-pointer hover:text-primary transition">Packages</li>
            <li className="cursor-pointer hover:text-primary transition">Service</li>
            <li className="cursor-pointer hover:text-primary transition">Contact Us</li>
            <li className="cursor-pointer hover:text-primary transition">ABOUT ME</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
