import React from "react";
import VisaList from "@/pages/price/VisaList";

const page = () => {
  return (
    <>
      <div className="container bg-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">비용 안내</h1>
          <p className="text-blue-600">지금 바로 신청해 보세요!</p>
        </div>

        <div>
          <div>
            <div>비용이 궁금한 비자종류를 선택해주세요.</div>
          </div>
          <div>
            <VisaList />
          </div>

          <div className="w-full rounded-md p-2 text-white bg-blue-600 hover:bg-blue-700 ">
            비용 계산하기
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
