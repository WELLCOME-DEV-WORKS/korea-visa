import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex gap-5 justify-between w-full bg-[#004098] text-white text-center whitespace-nowrap px-20
     max-md:flex-col max-md:text-center max-md:pb-3
    "
    >
      {/* 로고 폰트 적용 링크 */}
      <Link href="/">
        <div
          className="flex gap-2 p-2.5 items-center justify-center
        "
        >
          <img
            loading="lazy"
            src="/img/Logo.png"
            className="object-contain shrink-0 aspect-auto w-[180px]
            max-md:w-[120px]"
            alt="Well-come logo"
          />
        </div>
      </Link>
      <div className="flex gap-7 items-center justify-center">
        <a
          className="my-auto basis-auto font-museo hover:font-extrabold"
          href="https://z17pcyw51c1.typeform.com/to/xFWIie3s"
        >
          투자
        </a>
        <a
          className="my-auto basis-auto font-museo hover:font-extrabold"
          href="https://z17pcyw51c1.typeform.com/to/fjjFvMYo"
        >
          결혼
        </a>
        <a
          className="my-auto basis-auto font-museo hover:font-extrabold"
          href="https://z17pcyw51c1.typeform.com/to/LwJlV3Ba"
        >
          취업
        </a>
        <a
          className="my-auto basis-auto font-museo hover:font-extrabold"
          href="https://z17pcyw51c1.typeform.com/to/JGBbWErX"
        >
          재외동포
        </a>
        <a
          className="my-auto basis-auto font-museo hover:font-extrabold"
          href="https://z17pcyw51c1.typeform.com/to/bD32oeNv"
        >
          영주
        </a>
      </div>
    </header>
  );
};

export default Header;
