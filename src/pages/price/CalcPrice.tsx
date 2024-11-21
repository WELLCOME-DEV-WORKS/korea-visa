// 총 비용 계산
export const calcPrice = (
  taxPrice: number | undefined,
  basicPrice: number | undefined,
  VAT: number | undefined,
  selectedAdditional: string[],
  additionalServices: { name: string; price: number }[]
): number => {
  const tax = taxPrice ?? 0;
  const basic = basicPrice ?? 0;
  const vat = VAT ?? 0;

  // 선택된 추가 서비스의 가격 합산
  const additionalTotal = selectedAdditional.reduce((sum, name) => {
    const service = additionalServices.find((s) => s.name === name);
    return sum + (service?.price ?? 0);
  }, 0);

  return tax + basic + vat + additionalTotal;
};
