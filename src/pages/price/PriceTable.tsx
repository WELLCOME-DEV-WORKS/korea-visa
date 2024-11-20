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
          <div className=" border-gray-300 p-3 w-1/2 text-lg rounded-tl-xl">
            기본 서비스
          </div>
          <div className="border-l border-gray-300 p-3 w-1/2 text-lg rounded-tr-xl">
            공과금
          </div>
        </div>

        <div className="flex">
          {/* 기본 서비스 */}
          <div className="border border-gray-300 border-y-0 w-5/12">
            {basicService.detail
              .filter((service) => service.isIncluded)
              .map((service, idx) => (
                <div
                  key={idx}
                  className={`py-2.5 px-6 h-1/6 flex items-center justify-start ${
                    idx !==
                    basicService.detail.filter((s) => s.isIncluded).length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {service.name}
                </div>
              ))}
            <div className="relative border-t border-gray-200 flex flex-col h-1/6">
              <div className="flex py-2.5 px-6 items-center justify-start h-full">
                부가세
              </div>
            </div>
          </div>
          {/* 가격은 한 번만 표시 */}
          <div className=" text-right font-bold flex flex-col items-center justify-center w-1/12">
            <div className="py-2.5 h-5/6 w-full flex items-center justify-center ">
              {basicService.detail.some((service) => service.isIncluded)
                ? `${basicService.detail[0].price.toLocaleString()}원`
                : ""}
            </div>
            <div className="h-1/6 w-full flex items-center justify-center border-t border-gray-200">
              {VAT ? `${VAT.toLocaleString()}원` : "0원"}
            </div>
          </div>

          {/* 공과금 */}
          <div className="flex flex-col border border-gray-300 border-b-0 w-6/12">
            <div className="py-1 flex flex-row p-2">
              <div className="w-1/2 text-left py-1 px-4">{tax.detail}</div>
              <div className="w-1/2 text-right font-semibold py-1 px-4">
                {tax.price.toLocaleString()}원
              </div>
            </div>
            {/* 공백 */}
            {/* {[...Array(4)].map((_, index) => (
                <div key={index} className="py-1  border-gray-200"></div>
              ))} */}
            {/* 부가 서비스 */}
            <div className="flex flex-col h-full justify-start">
              <div className=" bg-[#373749] text-center flex text-white ">
                <div className="border-gray-200 p-3 w-full text-lg">
                  부가 서비스
                </div>
              </div>
              <div className="text-left">
                {additionalService.detail.map((service, idx) => (
                  <div key={idx} className="flex flex-row w-full ">
                    <div className=" text-left w-full py-2.5 px-6 border-b border-gray-200 flex items-center justify-start">
                      {service.name}
                    </div>
                    <div className="py-2.5 px-6 text-right w-full font-semibold border-b border-gray-200">
                      {service.isCounsel
                        ? "나라별 상이"
                        : `${service.price.toLocaleString()}원`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 부가서비스 */}
      {/* <div className="flex">
        <div className=" border-gray-300 border border-t-0 justify-end h-auto"></div>
        <div className=" border-gray-300 border-t-0 justify-end ">
          <div className=" bg-[#373749] text-center flex text-white ">
            <div className="border-gray-300 p-3 w-full text-lg">
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
                      : `${service.price.toLocaleString()}원`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full border bg-[#E7E9FC] border-gray-300 border-t-0 rounded-b-xl p-2">
        <div className=" text-center flex justify-between items-center rounded-b-xl">
          <div className="w-full justify-end text-right flex flex-row font-bold text-xl text-[#2563EB] py-1 px-4">
            <div className="w-1/2 text-left">총 비용</div>
            <div className="w-1/2 text-right font-semibold">
              {(basicService.price ?? 0) + (VAT ?? 0)}원
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
