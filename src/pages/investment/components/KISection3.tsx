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
          <section>
            <div className="flex flex-row w-full text-[1.5rem] mt-8">
              <div className="flex flex-col  text-left p-6 w-[12em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">일반 투자 비자</span>
                <span className="text-[1.5rem] mb-3">D-8-1</span>
                <span className="text-[1rem]">
                  외국인이 한국에 법인을 설립하거나 한국 기업의 주식을 보유할
                  경우에 해당하며, 최소 투자금액은 1억 원입니다.
                </span>
              </div>
              <div className="flex flex-col text-left p-6 w-[12em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">
                  기술 및 상업 협력 비자
                </span>
                <span className="text-[1.5rem] mb-3">D-8-2</span>
                <span className="text-[1rem]">
                  기업 또는 개인이 기술 협력 방식으로 한국에 진출하여 법인을
                  설립할 때 해당됩니다.
                </span>
              </div>
              <div className="flex flex-col text-left p-6 w-[12em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">벤처 투자 비자</span>
                <span className="text-[1.5rem] mb-3">D-8-3</span>
                <span className="text-[1rem]">
                  벤처 자금이 한국에 투자되는 경우에 해당됩니다.
                </span>
              </div>
              <div className="flex flex-col text-left p-6 w-[12em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">창업 투자 비자</span>
                <span className="text-[1.5rem] mb-3">D-8-4</span>
                <span className="text-[1rem]">
                  일정 조건(점수제)을 충족하는 투자자에게 발급됩니다.
                </span>
              </div>
            </div>
            {/* <div className="flex items-stretch"> */}
            <div className="flex justify-between flex-row w-full text-[1.5rem] mt-8">
              <div className="flex flex-col text-left p-6 w-[16em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">무역 비자</span>
                <span className="text-[1.5rem] mb-3">D-9</span>
                <span className="text-[1rem]">
                  한국에서 지속적인 영업 활동을 하려는 외국인이 관련 허가를 받은
                  후 신청할 수 있습니다.
                </span>
              </div>
              <div className="flex flex-col text-left p-6 w-[16em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">거주 비자</span>
                <span className="text-[1.5rem] mb-3">F-2</span>
                <span className="text-[1rem]">
                  투자자가 일정 기간 동안 한국에 거주하고 정해진 경제 기여
                  기준을 충족할 경우, F-2 장기 거주 비자를 신청하여 더 유연하게
                  생활하고 근무할 수 있습니다.
                </span>
              </div>
              <div className="flex flex-col text-left p-6 w-[16em] rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
                <span className="text-[1.5rem] mb-3">영주</span>
                <span className="text-[1.5rem] mb-3">F-5</span>
                <span className="text-[1rem]">
                  한국에서의 투자와 일정 기간 거주, 납세, 자금 요건 등을 충족한
                  외국인은 F-5 비자(영주권)를 신청할 수 있으며, 이를 통해 한국
                  국민과 거의 동일한 권리를 누릴 수 있습니다.
                </span>
              </div>
            </div>
          </section>

          <div
            className="w-[12em] h-12 rounded-3xl text-center cursor-pointer flex justify-center items-center transition-colors duration-200 ease-in-out bg-gradient-to-r from-[#f2e9ff] to-[#8c5bd0] text-transparent bg-clip-text border-2 border-[#ccb4ed] font-suit font-extrabold text-[1.2rem] leading-[65px] my-12"
            role="button"
          >
            적합한 비자 유형 확인하기
          </div>
        </div>
      </section>

      {/* 모바일 */}
      <div className="hidden max-md:flex  overflow-hidden flex-col px-4 pt-10 pb-20 mx-auto w-full max-w-[480px] bg-[#0F0F0F]">
        <div
          className="self-center text-center
        text-[2rem] font-[400] font-gangwon bg-gradient-to-left bg-clip-text text-transparent text-shadow-purple"
        >
          한국 투자 비자에 대해 얼마나 알고 계신가요?
        </div>
        <div className="self-center mt-8 text-xl  text-center text-white">
          한국 투자 시 취득 가능한 비자 종류
        </div>
        <div className="flex justify-between  gap-2 mt-6 text-sm font-medium leading-loose text-center text-white">
          <div className="px-8 py-1 w-1/2 h-1/2 rounded-3xl border border-white border-solid">
            D-8(기업 투자)
          </div>
          <div className="px-8 py-1 w-1/2 h-1/2 rounded-3xl border border-white border-solid">
            {" "}
            D-9(무역 비자)
          </div>
        </div>
        <div className="flex  justify-between gap-2 mt-2.5 text-sm font-medium leading-loose text-center text-white">
          <div className="px-8 py-1 w-1/2 h-1/2 rounded-3xl border border-white border-solid">
            F-2(거주 비자)
          </div>
          <div className="px-8 py-1 w-1/2 h-1/2 whitespace-nowrap rounded-3xl border border-white border-solid">
            F-5(영주)
          </div>
        </div>
        {/* <div className="flex flex-col text-left p-6 w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] mr-5">
          <span className="text-[1.5rem] mb-3">무역 비자</span>
          <span className="text-[1.5rem] mb-3">D-9</span>
          <span className="text-[1rem]">
            한국에서 지속적인 영업 활동을 하려는 외국인이 관련 허가를 받은 후
            신청할 수 있습니다.
          </span>
        </div> */}
        <div className="flex gap-2.5 mt-6  text-white">
          <div
            className="flex flex-col flex-1 items-start px-5 py-7 mb-2
           w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">일반 투자 비자</div>
            <div className="mt-2.5 text-sm font-black">D-8-1</div>
            <div className="self-stretch mt-5 text-xs font-medium">
              외국인이 한국에 법인을 설립하거나 한국 기업의 주식을 보유할 경우에
              해당하며, 최소 투자금액은 1억 원입니다.
            </div>
          </div>
          <div
            className="flex flex-col flex-1 px-5 pt-6 pb-11 
          w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">기술 및 상업 협력 비자</div>
            <div className="self-start mt-2.5 text-sm font-black">D-8-2</div>
            <div className="mt-5 text-xs font-medium">
              {" "}
              기업 또는 개인이 기술 협력 방식으로 한국에 진출하여 법인을 설립할
              때 해당됩니다.
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 mt-5 text-white mb-2s">
          <div
            className="flex flex-col flex-1 items-start px-5 pt-6 pb-16  mb-2
          w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">벤처 투자 비자</div>
            <div className="mt-2.5 text-sm font-black">D-8-3</div>
            <div className="self-stretch mt-5 text-xs font-medium">
              벤처 자금이 한국에 투자되는 경우에 해당됩니다.
            </div>
          </div>
          <div
            className="flex flex-col flex-1 items-start px-5 pt-6 pb-16 
          w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">창업 투자 비자</div>
            <div className="mt-2.5 text-sm font-black">D-8-4</div>
            <div className="self-stretch mt-5 text-xs font-medium">
              일정 조건(점수제)을 충족하는 투자자에게 발급됩니다.
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start px-5 pt-6 pb-10 mt-2.5 mb-2 max-w-full text-white 
        w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)] "
        >
          <div className="text-base font-bold">무역 비자</div>
          <div className="mt-2.5 text-sm font-black">D-9</div>
          <div className="self-stretch mt-5 text-xs font-medium">
            한국에서 지속적인 영업 활동을 하려는 외국인이 관련 허가를 받은 후
            신청할 수 있습니다.
          </div>
        </div>
        <div className="flex gap-2.5 mt-2.5 text-white">
          <div
            className="flex flex-col flex-1 items-start px-5 py-7 mb-2
          w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">영주</div>
            <div className="mt-2.5 text-sm font-black">F-5</div>
            <div className="self-stretch mt-5 text-xs font-medium">
              한국에서의 투자와 일정 기간 거주, 납세, 자금 요건 등을 충족한
              외국인은 F-5 비자(영주권)를 신청할 수 있으며, 이를 통해 한국
              국민과 거의 동일한 권리를 누릴 수 있습니다.
            </div>
          </div>
          <div
            className="flex flex-col flex-1 items-start px-5 pt-6 pb-10 
          w-1/2 rounded-[0.6875rem] border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-[#D9D9D9] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0.00)]"
          >
            <div className="text-base font-bold">거주 비자</div>
            <div className="mt-2.5 text-sm font-black">F-2</div>
            <div className="self-stretch mt-5 text-xs font-medium">
              투자자가 일정 기간 동안 한국에 거주하고 정해진 경제 기여 기준을
              충족할 경우, F-2 장기 거주 비자를 신청하여 더 유연하게 생활하고
              근무할 수 있습니다.
            </div>
          </div>
        </div>
        <div
          className="self-center w-[12em] h-12 rounded-3xl text-md text-center cursor-pointer flex justify-center items-center transition-colors duration-200 ease-in-out bg-gradient-to-r from-[#f2e9ff] to-[#8c5bd0] text-transparent bg-clip-text border-2 border-[#ccb4ed] font-suit font-extrabold text-[1.2rem] leading-[65px] my-12"
          role="button"
        >
          적합한 비자 유형 확인하기
        </div>
      </div>
    </>
  );
};

export default Section3;
