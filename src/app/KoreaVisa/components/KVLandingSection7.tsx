"use client";
import React from "react";
import "@/styles/globals.css";
import "@/styles/Reset.css";
import "@/styles/KoreaVisa/KVLandingSection7.css";
import "@/styles/KV_landing_global.css";

const KVLandingSection7 = () => {
  const openLink = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <section className="kv-container">
      <article className="kv-seventh-mobile-box">
        <img
          className="kv-seventh-img"
          src="https://cdn.imweb.me/thumbnail/20241106/2bef43d560e10.png"
          alt="맞춤형 솔루션 모바일 이미지"
        />
        <div className="kv-button-mobile" onClick={openLink}>
          맞춤형 솔루션 받기
        </div>
      </article>
      <article className="kv-seventh-desktop-box">
        <img
          className="kv-seventh-img"
          src="https://cdn.imweb.me/thumbnail/20241106/b7f82040c8d41.png"
          alt="맞춤형 솔루션 데스크탑 이미지"
        />
      </article>
      <div className="kv-button" onClick={openLink}>
        맞춤형 솔루션 받기
      </div>
    </section>
  );
};

export default KVLandingSection7;
