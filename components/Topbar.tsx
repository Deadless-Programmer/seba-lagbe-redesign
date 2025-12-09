// components/Topbar.tsx
"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-blue-900 from-blue-900/20 via-red to-black py-4">
      <div className="flex justify-center items-center w-full">
        {/* Parent container size fixed */}
        <div className="relative w-60 h-20">
          <Image
            src="https://i.postimg.cc/tT1hxmNY/logo.png"
            alt="logo"
            fill
            priority={true} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

