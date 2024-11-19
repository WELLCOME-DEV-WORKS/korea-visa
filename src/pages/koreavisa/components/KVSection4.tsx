"use client";
import React from "react";
import "../styles/KVSection4.css";

const KVSection4 = () => {
  const openLink = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <>
      <div className="kv-fourth-container">
        <div className="kv-fourth-title">
          <span>WELL-COME VISA</span>
          는 나이, 학력, 소득, 국적에 관계없이 고객에게 최적의 비자 경로를
          제안합니다.
          <br />
          한국·해외 졸업생, 우수 인재, 창업 희망자, 해외 동포 등 각자의 목표에
          맞춘
        </div>
        <div className="kv-fourth-subtitle">
          맞춤형 비자 서비스를 만나보세요.
        </div>
        <div className="kv-fourth-img_box">
          <img
            src="https://cdn.imweb.me/thumbnail/20241104/6d6801a69d384.png"
            alt="WELL-COME VISA 이미지"
          />
        </div>
        <div className="kv-fourth-button" onClick={openLink}>
          즉시 신청
        </div>
      </div>
      <div className="kv-fourth-container-mobile">
        <div className="kv-fourth-title-mobile">
          <span>WELL-COME VISA</span>
          는 나이, 학력, 소득, 국적에
          <br />
          관계없이 고객에게 최적의 비자 경로를 제안합니다.
          <br />
          한국·해외 졸업생, 우수 인재,
          <br />
          창업 희망자, 해외 동포 등 각자의 목표에 맞춘
        </div>
        <div className="kv-fourth-subtitle-mobile">
          맞춤형 비자 서비스를 만나보세요.
        </div>
        <div className="kv-fourth-img_box-mobile">
          <img
            src="https://cdn.imweb.me/thumbnail/20241104/6d6801a69d384.png"
            alt="WELL-COME VISA 이미지 모바일"
          />
        </div>
        <div className="kv-fourth-button-mobile" onClick={openLink}>
          즉시 신청
        </div>
      </div>
    </>
  );
};

export default KVSection4;
