// 총 비용 계산
export const calcPrice = (
  taxPrice: number | undefined,
  basicPrice: number | undefined,
  VAT: number | undefined,
  selectedAdditional: number[]
): number => {
  // 기본 값이 undefined일 경우 0으로 처리
  const tax = taxPrice ?? 0;
  const basic = basicPrice ?? 0;
  const vat = VAT ?? 0;

  // 추가 서비스 비용 합산
  const additionalTotal = selectedAdditional.reduce(
    (sum, price) => sum + price,
    0
  );

  // 총 비용 계산
  return tax + basic + vat + additionalTotal;
};
