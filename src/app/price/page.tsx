"use client";
import React, { useState } from "react";
import PriceTable from "@/pages/price/PriceTable";
import DropDown from "@/pages/price/DropDown";
import { PriceObject } from "@/pages/price/PriceObject";

export default function Page() {
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const priceData = PriceObject();
  // 선택된 비자 정보 가져오기
  const selectedVisaDetails = selectedVisa ? priceData[selectedVisa] : null;

  return (
    <>
      <div className="container bg-white flex flex-col">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">비용 안내</h1>
          <p className="text-blue-600">지금 바로 신청해 보세요!</p>
        </div>

        <div className="w-full items-center justify-center text-center">
          <div>비용이 궁금한 비자종류를 선택해주세요.</div>

          <div className="w-full">
            <DropDown onVisaChange={setSelectedVisa} />
          </div>
          {/* <div className="flex items-center justify-center text-center">
            <div className="w-[15em] rounded-md p-2 text-white bg-blue-600 hover:bg-blue-700 items-center justify-center text-center cursor-pointer">
              비용 계산하기
            </div>
          </div> */}
          <div className="w-full">
            <PriceTable visaDetails={selectedVisaDetails} />
          </div>
        </div>
      </div>
    </>
  );
}
