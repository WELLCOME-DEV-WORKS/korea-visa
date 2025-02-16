"use client";
import React from "react";
// import "@/styles/KoreaVisa/KVLandingSection1.css";
import "../styles/KVSection1.css";

const KVSection1 = () => {
  const openForm = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <>
      <div className="kv-first-container">
        <div className="kv-slogan">
          한국에서 활동을 시작하는
          <br />
          <span className="sloganText1">First Step</span>&nbsp;
          <span className="sloganText2">Visa!</span>
        </div>
        <div className="kv-first-button" onClick={openForm}>
          한국비자 신청하기
        </div>
      </div>

      {/* Mobile Version -firstcontainer */}
      <div className="kv-first-container-mobile">
        <div className="kv-slogan-mobile">
          <div className="sloganText-mobile">한국에서 활동을 시작하는</div>
          <div className="sloganText2-mobile">
            <span className="sloganText1">First Step</span>&nbsp;
            <span>Visa!</span>
          </div>
        </div>
        <div className="kv-first-button-mobile" onClick={openForm}>
          <div className="text">한국비자 신청하기</div>
        </div>
      </div>
    </>
  );
};

export default KVSection1;
