import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">비용 안내</h1>
          <p className="text-blue-600">
            첫 이용 고객에게는 무료 정관 정비 혜택까지! 지금 바로 신청해 보세요
          </p>
        </div>

        <div>
          <div>
            <div>비용이 궁금한 등기/종류를 선택해주세요.</div>
          </div>
          <div className="space-y-4">
            <div>
              <div>
                <div>등기 종류 선택</div>
              </div>
              <div>
                <div>법인 설립 등기</div>
                <div>주소지 변경 등기</div>
                <div>이사 변경 등기</div>
                <div>증자 등기</div>
              </div>
            </div>

            <div className="w-full bg-blue-600 hover:bg-blue-700">
              비용 계산하기
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p>*전자등기를 기준한 가격입니다.</p>
              <p>*등기 종류에 따른 등기의 경우 별도로 문의해주세요.</p>
              <p>*등기는 최영리법률사무소에서 직접 수행합니다.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-none">
          <div className="p-8">
            <div className="text-center space-y-4">
              <div className="h-8 w-8 mx-auto text-blue-600" />
              <div className="text-xl">써보면서 이해하는게 가장 빠릅니다.</div>
              <div>
                지금 바로 회원가입 하고, 등기맨만의 쉬운 등기신청을
                경험해보세요!
              </div>
              <div className="flex gap-4 justify-center pt-4">
                <div>법인설립 신청</div>
                <div className="bg-blue-600 hover:bg-blue-700">
                  변경등기 신청
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
