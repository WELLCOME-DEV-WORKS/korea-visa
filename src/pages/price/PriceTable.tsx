import React from "react";
import { VisaDetails } from "./PriceObject";

interface PriceTableProps {
  visaDetails: VisaDetails | null;
}

const PriceTable = ({ visaDetails }: PriceTableProps) => {
  if (!visaDetails) {
    return <div className="text-center mt-4">비자를 선택해주세요.</div>;
  }

  const { tax, basicService, additionalService, VAT } = visaDetails;

  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100 text-center">
          <th className="border border-gray-300 p-2">공과금</th>
          <th className="border border-gray-300 p-2">기본 서비스</th>
          <th className="border border-gray-300 p-2">부가 서비스</th>
        </tr>
      </thead>
      <tbody className="text-left">
        <tr>
          <td className="border border-gray-300 p-2">{tax.detail}</td>
          <td className="border border-gray-300 p-2">
            {basicService.detail.map((service, idx) => (
              <div key={idx}>
                {service.name} - {service.price}원
              </div>
            ))}
          </td>
          <td className="border border-gray-300 p-2">
            {additionalService.detail.map((service, idx) => (
              <div key={idx}>
                {service.name} - {service.price || "상담 필요"}원
              </div>
            ))}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2" colSpan={3}>
            <div className="flex justify-between items-center">
              <div className="text-left ">총 비용</div>
              <div className="text-right ">
                {(basicService.price ?? 0) + (VAT ?? 0)}원
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
