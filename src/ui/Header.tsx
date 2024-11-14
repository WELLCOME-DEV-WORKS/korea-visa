import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./details/Button";
import UserAccountNav from "./UserAccountNav";

interface HeaderProps {
  title: string;
  buttonText: string;
}

const Header = async () => {
  const session = await getAuthSession();
  return (
    <header
      className="flex gap-5 justify-between w-full bg-wellcome-white text-center whitespace-nowrap  max-md:max-w-full px-20
    max-sm:px-6 max-md:px-6
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
          className="flex gap-2 p-2.5 text-xl font-extrabold text-wellcome-pink
        max-sm:gap-1"
        >
          <img
            loading="lazy"
            src="logo.webp"
            className="object-contain shrink-0 aspect-[1.95] w-[65px]
            max-md:w-[45px] max-sm:w-[25px]"
            alt="Well-come logo"
          />
          <div className="my-auto basis-auto font-museo ">Well-Come</div>
        </div>
      </Link>

      {session ? (
        <div className="flex">
          <UserAccountNav user={session.user} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        </div>
      )}
      {/* <button className="px-4 py-1 text-lg font-bold tracking-tight text-white bg-wellcome-pink rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-3">
        {buttonText}
      </button> */}
    </header>
  );
};

export default WellcomeHeader;
