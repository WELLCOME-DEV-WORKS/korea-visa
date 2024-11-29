import React from "react";
import LandingPage from "./(header-blue)/koreavisa/page";
import RootLayout from "./(header-blue)/layout";
import DB from "@/utils/DB";

export default function Home() {
  return (
    <>
      <RootLayout>
        <DB></DB>
        <LandingPage />
      </RootLayout>
    </>
  );
}
