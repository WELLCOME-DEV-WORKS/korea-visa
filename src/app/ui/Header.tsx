import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-full bg-[#004098] text-white text-center pr-[8vw]">
      <nav
        className="flex gap-5 justify-between w-full whitespace-nowrap mx-[18vw] my-1 content-center items-center
     max-lg:flex-col max-lg:text-center max-lg:pb-0  max-lg:my-0 max-lg:h-[15vh]"
      >
        {/* 로고 폰트 적용 링크 */}
        <Link href="/">
          <div className="flex gap-2 p-2.5 items-center justify-center">
            <img
              loading="lazy"
              src="/img/Logo.png"
              className="object-contain shrink-0 aspect-auto w-[160px]
            max-lg:w-[140px]"
              alt="Well-come logo"
            />
          </div>
        </Link>
        <div className="flex gap-7 items-center justify-center text-base/6">
          <a
            className="my-auto basis-auto font-museo  hover:font-extrabold"
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
        <div className="flex items-center content-center">
          <a href="#" className="text-base/6">
            {/* 로그인 */}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
