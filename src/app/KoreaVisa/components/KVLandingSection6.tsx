"use client";
import React from "react";
import "@/styles/globals.css";
import "@/styles/Reset.css";
import "@/styles/KoreaVisa/KVLandingSection6.css";

const KVLandingSection6 = () => {
  const openLink = () => {
    window.open("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG", "_blank");
  };

  return (
    <>
      <div className="kv-sixth-container">
        <div className="kv-sixth-title">
          <span>WELL-COME VISA</span>는
          <br />
          모든 유형의 비자를 이해할 뿐만 아니라, 비자 신청의 모든 영역을 다루고
          있습니다.
        </div>

        <article className="kv-sixth-processBox swiper">
          <div className="kv-sixth swiper-wrapper">
            <div className="kv-sixth-processCard type1 swiper-slide">
              <span>
                OASIS
                <br />
                창업수업
              </span>
            </div>
            <div className="kv-sixth-processCard type2 swiper-slide">
              <span>지적 재산</span>
            </div>
            <div className="kv-sixth-processCard type3 swiper-slide">
              <span>우수 인재</span>
            </div>
            <div className="kv-sixth-processCard type4 swiper-slide">
              <span>특허 신청</span>
            </div>
            <div className="kv-sixth-processCard type5 swiper-slide">
              <span>
                and
                <br />
                MORE
              </span>
            </div>
          </div>
        </article>

        <div className="kv-sixth-button kv-sixth" onClick={openLink}>
          한국비자 관련 모든 것 알아보기
        </div>
      </div>

      <div className="kv-sixth-container-mobile">
        <h2 className="kv-sixth-title-mobile">
          <span>WELL-COME VISA</span>는
          <br />
          모든 유형의 비자를 이해할 뿐만 아니라,
          <br />
          비자 신청의 모든 영역을 다루고 있습니다.
        </h2>

        <article className="kv-sixth-processBox kv-sixth-processBox-mobile swiper">
          <div className="kv-sixth-mobile swiper-wrapper">
            <div className="kv-sixth-processCard-mobile type1 swiper-slide">
              <span>
                OASIS
                <br />
                창업수업
              </span>
            </div>
            <div className="kv-sixth-processCard-mobile type2 swiper-slide">
              <span>지적 재산</span>
            </div>
            <div className="kv-sixth-processCard-mobile type3 swiper-slide">
              <span>우수 인재</span>
            </div>
            <div className="kv-sixth-processCard-mobile type4 swiper-slide">
              <span>특허 신청</span>
            </div>
            <div className="kv-sixth-processCard-mobile type5 swiper-slide">
              <span>
                and
                <br />
                MORE
              </span>
            </div>
          </div>
        </article>

        <div className="kv-sixth-button-mobile" onClick={openLink}>
          한국비자 관련 모든 것 알아보기
        </div>
      </div>
    </>
  );
};

export default KVLandingSection6;
