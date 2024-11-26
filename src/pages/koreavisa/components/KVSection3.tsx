"use client";
import React from "react";
import "../styles/KVSection3.css";

const KVSection3 = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="kv-third-container">
        <div className="kv-third-title">신청할 비자 유형 선택하세요!</div>
        <div className="kv-third-processBox">
          <div
            className="kv-third-processCard type1"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/xFWIie3s")
            }
          >
            <span>투자 비자</span>
            <p>Investor/Enterprise</p>
          </div>

          <div
            className="kv-third-processCard type2"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/LwJlV3Ba")
            }
          >
            <span>취업 비자</span>
            <p>Work Visa</p>
          </div>

          <div
            className="kv-third-processCard type3"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/fjjFvMYo")
            }
          >
            <span>결혼이민</span>
            <p>Marriage Visa</p>
          </div>

          <div
            className="kv-third-processCard type4"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/hWFwHwCH")
            }
          >
            <span>재외동포</span>
            <p>Overseas Korean</p>
          </div>

          <div
            className="kv-third-processCard type5"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/bD32oeNv")
            }
          >
            <span>영주</span>
            <p>Permanent residence</p>
          </div>
        </div>
        <div className="kv-third-subtext">
          신청할 수 있는 비자 종류를 모르겠다면...?
        </div>
        <div
          className="kv-third-button"
          onClick={() =>
            openLink("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG")
          }
        >
          취득할 수 있는 비자 확인하기
        </div>
      </div>

      <div className="kv-third-container-mobile">
        <div className="kv-third-title-mobile">
          신청할 비자 유형 선택하세요!
        </div>
        <div className="kv-third-processBox-mobile">
          <div
            className="kv-third-processCard-mobile type1"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/vjlgHKDj")
            }
          >
            <span>기업 투자 비자</span>
            <p>Investor/Enterprise</p>
          </div>

          <div
            className="kv-third-processCard-mobile type2"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/hWFwHwCH")
            }
          >
            <span>취업 비자</span>
            <p>Specially Designated Profession</p>
          </div>

          <div
            className="kv-third-processCard-mobile type3"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/BQCoDKCr")
            }
          >
            <span>결혼이민</span>
            <p>Spouse of Korean National</p>
          </div>

          <div
            className="kv-third-processCard-mobile type4"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/hWFwHwCH")
            }
          >
            <span>재외동포</span>
            <p>Overseas Korean</p>
          </div>

          <div
            className="kv-third-processCard-mobile type5"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/hWFwHwCH")
            }
          >
            <span>영주</span>
            <p>Permanent residence</p>
          </div>
        </div>
        <div className="kv-third-subbox-mobile">
          <div className="kv-third-subtext-mobile">
            신청할 수 있는
            <br />
            비자 종류를 모르겠다면...?
          </div>
          <img
            className="kv-third-img"
            src="https://cdn.imweb.me/thumbnail/20241112/c8027dda78129.png"
            alt="emoji"
          />
          <div
            className="kv-third-button-mobile"
            onClick={() =>
              openLink("https://z17pcyw51c1.typeform.com/to/Pe8ZJkpG")
            }
          >
            취득할 수 있는 비자 확인하기
          </div>
        </div>
      </div>
    </>
  );
};

export default KVSection3;
