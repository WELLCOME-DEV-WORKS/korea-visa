import React from "react";

// interface PricingTableProps {
//   basicPrice: number;
//   additionalPrice: number;
//   tax: number;
// }

const PriceTable = ({
  basicPrice,
  tax,
  additionalPrice,
}: PricingTableProps) => {
  const totalPrice = basicPrice + tax + additionalPrice;

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
          <td className="border border-gray-300 p-2">내용1</td>
          <td className="border border-gray-300 p-2">내용2</td>
          <td className="border border-gray-300 p-2">내용3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">내용1</td>
          <td className="border border-gray-300 p-2">내용2</td>
          <td className="border border-gray-300 p-2">내용3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">내용1</td>
          <td className="border border-gray-300 p-2">내용2</td>
          <td className="border border-gray-300 p-2">내용3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2 " colSpan={3}>
            <div className="flex justify-between items-center">
              <div className="text-left ">총 비용</div>
              <div className="text-right ">
                12345<span className="ml-2">원</span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
