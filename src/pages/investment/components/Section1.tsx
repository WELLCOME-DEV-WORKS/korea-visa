"use client";
import React from "react";
import "../styles/KI_Global.css";
import "../styles/Section1.css";

const Section1 = () => {
  return (
    <section className="ki-container">
      <h1 className="ki-section1-title">
        한국에 투자?
        <br />
        <span className="ki-section1-subTitle">투자 비자</span>도 챙기세요!
      </h1>
      <div className="ki-section1-btn " role="button">
        투자비자 신청하기
      </div>
    </section>
  );
};

export default Section1;
