import React from "react";

const Section3 = () => {
  return (
    <>
      {/* 데스크탑 */}
      <section className="hidden md:flex flex-col items-center   text-white  bg-[#0F0F0F]">
        <div className="container">
          <div className="text-[2.5rem] font-[400] font-gangwon bg-gradient-to-left bg-clip-text text-transparent text-shadow-purple ">
            한국 투자 비자에 대해 얼마나 알고 계신가요?
          </div>
          <div className="text-[2rem] font-suit mt-5 font-light">
            한국 투자 시 취득 가능한 비자 종류
          </div>
          <div className="flex flex-row text-[1.5rem] mt-8">
            <div className="rounded-[50px] border-[1px] border-white px-[2.3rem] py-1 mr-5">
              D-8 (기업 투자 비자)
            </div>
            <div className="rounded-[50px] border-2 border-white px-[2.3rem] py-1 mr-5">
              D-9 (무역 비자)
            </div>
            <div className="rounded-[50px] border-2 border-white px-[2.3rem] py-1 mr-5">
              F-2 (거주 비자)
            </div>
            <div className="rounded-[50px] border-2 border-white px-[2.3rem] py-1 mr-5">
              F-5 (영주)
            </div>
          </div>
          <div className="flex flex-row w-full text-[1.5rem] mt-8">
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">일반 투자 비자</span>
              <span className="text-[1.5rem] mb-3">D-8-1</span>
              <span className="text-[1rem]">
                외국인이 한국에 법인을 설립하거나 한국 기업의 주식을 보유할
                경우에 해당하며, 최소 투자금액은 1억 원입니다.
              </span>
            </div>
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">기술 및 상업 협력 비자</span>
              <span className="text-[1.5rem] mb-3">D-8-2</span>
              <span className="text-[1rem]">
                기업 또는 개인이 기술 협력 방식으로 한국에 진출하여 법인을
                설립할 때 해당됩니다.
              </span>
            </div>
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">벤처 투자 비자</span>
              <span className="text-[1.5rem] mb-3">D-8-3</span>
              <span className="text-[1rem]">
                벤처 자금이 한국에 투자되는 경우에 해당됩니다.
              </span>
            </div>
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">창업 투자 비자</span>
              <span className="text-[1.5rem] mb-3">D-8-4</span>
              <span className="text-[1rem]">
                일정 조건(점수제)을 충족하는 투자자에게 발급됩니다.
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full text-[1.5rem] mt-8">
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">무역 비자</span>
              <span className="text-[1.5rem] mb-3">D-9</span>
              <span className="text-[1rem]">
                한국에서 지속적인 영업 활동을 하려는 외국인이 관련 허가를 받은
                후 신청할 수 있습니다.
              </span>
            </div>
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">거주 비자</span>
              <span className="text-[1.5rem] mb-3">F-2</span>
              <span className="text-[1rem]">
                투자자가 일정 기간 동안 한국에 거주하고 정해진 경제 기여 기준을
                충족할 경우, F-2 장기 거주 비자를 신청하여 더 유연하게 생활하고
                근무할 수 있습니다.
              </span>
            </div>
            <div className="flex flex-col text-left p-6 w-[15em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
              <span className="text-[1.5rem] mb-3">영주</span>
              <span className="text-[1.5rem] mb-3">F-5</span>
              <span className="text-[1rem]">
                한국에서의 투자와 일정 기간 거주, 납세, 자금 요건 등을 충족한
                외국인은 F-5 비자(영주권)를 신청할 수 있으며, 이를 통해 한국
                국민과 거의 동일한 권리를 누릴 수 있습니다.
              </span>
            </div>
          </div>

          <div
            className="w-[15em] h-12 rounded-3xl text-center cursor-pointer flex justify-center items-center transition-colors duration-200 ease-in-out bg-gradient-to-r from-[#f2e9ff] to-[#8c5bd0] text-transparent bg-clip-text border-2 border-[#ccb4ed] font-suit font-extrabold text-[1.2rem] leading-[65px] my-12"
            role="button"
          >
            적합한 비자 유형 확인하기
          </div>
        </div>
      </section>

      {/* 모바일 */}
      {/* <section className="ki-section2-container-mobile ki-section2-bg">
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
          loading="lazy"
          src="img/ki-section2-img.png"
          alt=""
        />
        <div className="ki-section2-btn-mobile" role="button">
          바로 한국비자 받기
        </div>
      </section> */}
    </>
  );
};

export default Section3;
