import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex gap-5 justify-between w-full bg-[#004098] text-white text-center whitespace-nowrap  max-md:max-w-full px-20
    max-md:flex-col max-md:text-center max-md:pb-3
    "
    >
      {/* 로고 폰트 적용 링크 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <Link href="/">
        <div
          className="flex gap-2 p-2.5 items-center justify-center
        max-md:"
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
