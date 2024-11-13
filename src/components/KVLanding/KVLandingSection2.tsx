"use client";
import React from "react";
import "../../styles/globals.css";
import "../../styles/Reset.css";
import "../../styles/KVLanding/KVLandingSection2.css";

const KVLandingSection2 = () => {
  const handleButtonClick = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <>
      {/* second section */}
      <div className="kv-second-container">
        <div className="kv-second-box">
          <div className="kv-second-img-box">
            <img
              src="https://cdn.imweb.me/thumbnail/20241104/24d4af361fef1.png"
              alt="Visa Section Image"
            />
          </div>
        </div>
        <div className="kv-second-button" onClick={handleButtonClick}>
          바로 한국비자 받기
        </div>
      </div>

      {/* Mobile Version */}
      <div className="kv-second-container-mobile">
        <div className="kv-second-box">
          <div className="kv-second-img-box">
            <img
              src="https://cdn.imweb.me/thumbnail/20241108/649edf252dbcc.png"
              alt="Visa Section Mobile Image"
            />
          </div>
        </div>
        <div className="kv-second-button-mobile" onClick={handleButtonClick}>
          바로 한국비자 받기
        </div>
      </div>
    </>
  );
};

export default KVLandingSection2;
