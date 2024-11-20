import React from "react";
import { VisaDetails } from "./PriceObject";

interface PriceTableProps {
  visaDetails: VisaDetails | null;
}

const PriceTable = ({ visaDetails }: PriceTableProps) => {
  if (!visaDetails) {
    return <div className="text-center mt-2">비자 종류를 선택해주세요.</div>;
  }

  const { tax, basicService, additionalService, VAT } = visaDetails;

  return (
    <>
      <div className="w-full border-gray-300 mt-4 rounded-t-xl">
        <div className="bg-[#373749] text-center flex rounded-t-xl text-white">
          <div className=" border-gray-300 p-2 w-1/2 text-lg rounded-tl-xl">
            공과금
          </div>
          <div className="border border-gray-300 p-2 w-1/2 text-lg rounded-tr-xl">
            기본 서비스
          </div>
        </div>
        {/* 공과금 */}
        <div className="text-left">
          <div className="flex">
            <div className="border border-gray-300 p-2 w-1/2">
              <div className="py-1 h-[2em] border-b border-gray-200 flex flex-row">
                <div className="w-1/2 text-left">{tax.detail}</div>
                <div className="w-1/2 text-right font-semibold">
                  {tax.price.toLocaleString()} 원
                </div>
              </div>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="py-1 h-[2em] border-b border-gray-200"
                ></div>
              ))}
            </div>
            {/* 기본 서비스 */}
            <div className="border border-gray-300 p-2 w-1/2">
              {basicService.detail
                .filter((service) => service.isIncluded)
                .map((service, idx) => (
                  <div
                    key={idx}
                    className={`py-1 ${
                      idx !==
                      basicService.detail.filter((s) => s.isIncluded).length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {service.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-gray-300 border-t-0">
        <div className="bg-[#373749] text-center flex text-white">
          <div className="border border-gray-300 p-2 w-full text-lg">
            부가 서비스
          </div>
        </div>
        <div className="text-left">
          <div className="border border-gray-300 p-2">
            {additionalService.detail.map((service, idx) => (
              <div key={idx} className="flex flex-row w-full">
                <div className="text-left w-1/2">{service.name}</div>
                <div className="text-right w-1/2 font-semibold">
                  {service.isCounsel
                    ? "나라별 상이"
                    : `${service.price.toLocaleString()} 원`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border bg-[#E7E9FC] border-gray-300 border-t-0 rounded-b-xl p-2">
        <div className=" text-center flex justify-between items-center rounded-b-xl">
          <div
            className="w-full justify-end text-right flex flex-row font-bold text-xl text-[#2563EB]"
            p-2
          >
            <div className="w-1/2 text-left">총 비용</div>
            <div className="w-1/2 text-right font-semibold">
              {(basicService.price ?? 0) + (VAT ?? 0)} 원
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
