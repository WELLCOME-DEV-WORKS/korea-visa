"use client";

import { useState } from "react";

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#004098] text-white px-[6em]">
      <nav
        className="flex gap-5 items-center justify-between w-full bg-[#004098] text-white text-center whitespace-nowrap p-4 
     max-md:flex-col max-md:text-center max-md:pb-3"
      >
        <div className="flex items-center lg:flex-1">
          <a href="/KoreaVisa" className="-m-1.5 p-1.5">
            <img
              alt="Well-come logo"
              src="/img/Logo.png"
              className="object-contain shrink-0 aspect-auto w-[150px]
            max-md:w-[120px]"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <a
          href="https://z17pcyw51c1.typeform.com/to/xFWIie3s"
          className="text-base/6 "
        >
          투자
        </a>
        <a
          href="https://z17pcyw51c1.typeform.com/to/fjjFvMYo"
          className="text-base/6  "
        >
          결혼
        </a>
        <a
          href="https://z17pcyw51c1.typeform.com/to/LwJlV3Ba"
          className="text-base/6 "
        >
          취업
        </a>
        <a
          href="https://z17pcyw51c1.typeform.com/to/JGBbWErX"
          className="text-base/6 "
        >
          재외동포
        </a>
        <a
          href="https://z17pcyw51c1.typeform.com/to/bD32oeNv"
          className="text-base/6 "
        >
          영주
        </a>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6">
            {/* 여기에 로그인 글자 삽입 */}
          </a>
        </div>
      </nav>
    </header>
  );
}
