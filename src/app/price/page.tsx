"use client";
import React, { useState } from "react";
import PriceTable from "@/pages/price/PriceTable";
import BusinessVisaTable from "@/pages/price/BusinessVisaTable";
import DropDown from "@/pages/price/DropDown";
import { VisaObject } from "@/data/VisaObject";
import { BusinessVisaObject } from "@/data/BusinessVisaObject";

const Page = () => {
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const visaData = VisaObject(); //
  const businessVisaData = BusinessVisaObject(); // businessVisa 데이터 로드
  // 선택된 비자 정보 가져오기
  const selectedVisaDetails =
    selectedVisa === "businessVisa"
      ? businessVisaData["businessVisa"]
      : selectedVisa
      ? visaData[selectedVisa] // selectedVisa가 null이 아닌 경우에만 접근
      : null;

  return (
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
        {/* 사업비자 */}
        {selectedVisa === "businessVisa" && (
          <div className="w-full">
            <BusinessVisaTable visaDetails={selectedVisaDetails} />
          </div>
        )}
        {/* 구직비자 ~ 동반비자 */}
        {selectedVisa && selectedVisa !== "businessVisa" && (
          <div className="w-full">
            <PriceTable visaDetails={selectedVisaDetails} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
