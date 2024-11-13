import React from "react";
import "./Section1.css";

const page = () => {
  return (
    <>
      {/* 데스크탑 */}
      <section className="ki-section2-container ki-section2-bg">
        <div className="ki-section2-title">
          세계가 이렇게 넓은데, 왜 한국에 투자해야 할까요?!
        </div>
        <div className="ki-section2-subTitle">
          고급 의료, 선진국, 높은 시민의식, 안전한 치안, 우수한 복지
        </div>
        <div className="ki-section2-box">
          <div className="ki-section2-boxTitle">
            &quot;한국은 세계에서 투자 금액이 가장 적어도 투자 비자를 <br />{" "}
            받을 수 있는 국가 입니다.&quot;
          </div>
          <article className="ki-section2-img">
            <img
              src="https://cdn.imweb.me/thumbnail/20241112/173376a1084b4.png"
              alt=""
            />
          </article>
          <div className="ki-section2-btn" role="button">
            바로 한국비자 받기
          </div>
        </div>
      </section>

      {/* 모바일 */}
      <section className="ki-section2-container-mobile ki-section2-bg">
        <div className="ki-section2-title-mobile">
          세계가 이렇게 넓은데, <br /> 왜 한국에 투자해야 할까요?!
        </div>
        <div className="ki-section2-subTitleBox-mobile">
          <div className="ki-section2-subTitle-mobile">고급 의료</div>
          <div className="ki-section2-subTitle-mobile">선진국</div>
          <div className="ki-section2-subTitle-mobile">치안 안전</div>
          <div className="ki-section2-subTitle-mobile">우수 복지</div>
        </div>
        <div className="ki-section2-boxTitle-mobile">
          &quot;한국은 세계에서 투자 금액이 가장 적어도 투자 비자를 <br /> 받을
          수 있는 국가 입니다.&quot;
        </div>
        <img
          className="ki-section2-img-mobile"
          src="https://cdn.imweb.me/thumbnail/20241113/1b5a22c3c5d0f.png"
          alt=""
        />
        <div className="ki-section2-btn-mobile" role="button">
          바로 한국비자 받기
        </div>
      </section>
    </>
  );
};

export default page;
