'use client';
import React from 'react';
import '../../styles/globals.css';
import '../../styles/Reset.css';
import '../../styles/KV_landing_global.css';
import '../../styles/KVLanding/KVLandingSection8.css';

const KVLandingSection8 = () => {
  const openLink = () => {
    window.open('https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG', '_blank');
  };

  return (
    <section className="kv-container">
      <div className="kv-title-blue">WELL-COME을 선택한 이유?</div>
      <article className="kv-eighth-mobile-box">
        <img src="https://cdn.imweb.me/thumbnail/20241106/21d465269b4da.png" />
      </article>
      <article className="kv-eighth-desktop-box">
        <img
          src="https://cdn.imweb.me/thumbnail/20241106/56f6df93f28d2.png"
          alt=""
        />
      </article>

      <div className="kv-button" onClick={openLink}>
        한국비자 신청하기
      </div>
      <div className="kv-button-mobile" onClick={openLink}>
        한국비자 신청하기
      </div>
    </section>
  );
};

export default KVLandingSection8;
