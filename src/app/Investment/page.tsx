import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const page = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default page;
