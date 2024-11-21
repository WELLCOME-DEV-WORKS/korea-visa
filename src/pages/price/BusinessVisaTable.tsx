import React, { useState } from "react";
import { VisaDetails } from "../../data/BusinessVisaObject";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { calcPrice } from "../../utils/CalcPrice";

interface BusinessVisaTableProps {
  visaDetails: VisaDetails | null;
}

const BusinessVisaTable = ({ visaDetails }: BusinessVisaTableProps) => {
  if (!visaDetails) {
    return <div className="text-center mt-2">비자 종류를 선택해주세요.</div>;
  }
  const { tax, basicService, additionalService, VAT } = visaDetails;

  return (
    <>
      <section>
        <div className="w-full border-gray-300 mt-4 rounded-t-xl">
          <div className="w-full border-gray-300 mt-4 rounded-t-xl">
            <div className="bg-[#373749] text-center flex rounded-t-xl text-white">
              <div className=" border-gray-300 p-3 w-1/2 text-lg rounded-tl-xl">
                기본 서비스
              </div>
              <div className="border-l border-gray-300 p-3 w-1/2 text-lg rounded-tr-xl">
                공과금
              </div>
            </div>
          </div>
          <div className="flex">
            {/* 기본 서비스 */}
            <div></div>
            <div></div>
            <div className="flex flex-col border border-gray-300 border-y-0 w-1/2">
              <div className="p-2 flex flex-row">
                <div className="w-1/2">
                  {basicService.detail.map((service, idx) => (
                    <div
                      key={idx}
                      className={`w-full text-left py-1 px-4 ${
                        idx !== basicService.detail.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
                <div className="w-1/2">
                  {basicService.detail.map((service, idx) => (
                    <div
                      key={idx}
                      className={`w-full text-right font-semibold py-1 px-4 ${
                        idx !== basicService.detail.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {service.isFree
                        ? "무료"
                        : `${service.price.toLocaleString()}원`}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative border-t border-gray-200 flex flex-col">
                <div className="flex flex-row p-2">
                  <div className="flex py-1 px-4 items-center justify-start h-full w-full text-left">
                    부가세
                  </div>
                  <div className=" flex py-1 px-4 w-full items-center justify-center text-right">
                    {VAT ? `${VAT.toLocaleString()}원` : "0원"}
                  </div>
                </div>
              </div>
            </div>
            {/* 가격은 한 번만 표시 */}
            {/* <div className=" text-right font-bold flex flex-col items-center justify-center w-1/12">
              <div className="py-2.5 h-5/6 w-full flex items-center justify-center">
                {basicService.detail.some((service) => service.isIncluded)
                  ? `${basicService.detail[0].price.toLocaleString()}원`
                  : ""}
              </div>
              <div className="h-1/6 w-full flex items-center justify-center border-t border-gray-200">
                {VAT ? `${VAT.toLocaleString()}원` : "0원"}
              </div>
            </div> */}

            {/* 공과금 */}
            <div className="flex flex-col border border-gray-200 border-b-0 w-1/2">
              <div className="py-1 flex flex-row p-2">
                <div className="w-1/2 text-left py-1 px-4">{tax.detail}</div>
                <div className="w-1/2 text-right font-semibold py-1 px-4">
                  {tax.price.toLocaleString()}원
                </div>
              </div>
              {/* 부가 서비스 */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessVisaTable;
