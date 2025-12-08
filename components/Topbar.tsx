// components/Topbar.tsx
"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-blue-500 py-4">
      <div className="flex justify-center items-center w-full">
        <div className="relative w-60 h-20">
          <Image
            src="https://i.postimg.cc/tT1hxmNY/logo.png"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
