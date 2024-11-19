"use client";
import React from "react";
import "../styles/KVSection5.css";

const KVSection5 = () => {
  const openLink = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <>
      <div className="kv-fifth-container">
        <div className="kv-fifth-title">
          <span>WELL-COME VISA</span>는 다양한 비자 서비스를 제공하여 고객의
          다양한 요구를 충족합니다.
        </div>

        {/* Circle Icons with Blue Tones and Hover Effect */}
        <div className="kv-fifth-box">
          <div
            className="kv-fifth-circle"
            style={{ backgroundColor: "#183262" }}
          >
            개인 비자
          </div>
          <div
            className="kv-fifth-circle"
            style={{ backgroundColor: "#004098" }}
          >
            가족 이민
          </div>
          <div
            className="kv-fifth-circle"
            style={{ backgroundColor: "#2357ba" }}
          >
            국제 결혼
          </div>
          <div
            className="kv-fifth-circle"
            style={{ backgroundColor: "#4b80d0" }}
          >
            해외 투자
          </div>
          <div
            className="kv-fifth-circle"
            style={{ backgroundColor: "#a3c7ff" }}
          >
            한국 취업
          </div>
        </div>

        <div className="kv-fifth-description">
          한국에서의 꿈, 새로운 삶을 시작하세요.
          <br />
          <span>WELL-COME VISA</span>가 맞춤형 서비스로 당신의 목표를 위해
          함께합니다.
        </div>

        <div className="kv-fifth-button" onClick={openLink}>
          새로운 가능성을 발견하세요!
        </div>
      </div>

      <div className="kv-fifth-container-mobile">
        <div className="kv-fifth-img-box">
          <img
            src="https://cdn.imweb.me/thumbnail/20241113/d32f6bccf3412.png"
            alt="Visa Services"
          />
        </div>
        <div className="kv-fifth-button-mobile" onClick={openLink}>
          새로운 가능성을 발견하세요!
        </div>
      </div>
    </>
  );
};

export default KVSection5;
