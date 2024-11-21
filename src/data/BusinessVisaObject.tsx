export interface TaxDetails {
  detail: string;
  price: number;
}
export interface ServiceItem {
  name: string;
  price: number;
  isIncluded?: boolean; // 기본 서비스 포함 여부
  isFree?: boolean; // 무료 여부
  isCounsel?: boolean; // '나라별 상이' 인 경우
}
export interface ServiceDetails {
  detail: ServiceItem[];
  price?: number;
}

export interface VisaDetails {
  tax: TaxDetails;
  basicService: ServiceDetails;
  additionalService: ServiceDetails;
  VAT?: number;
}

export interface VisaObject {
  businessVisa: VisaDetails;
  businessVisaAdd: VisaDetails;
}

export interface VisaObject {
  [key: string]: VisaDetails; // 모든 string 키에 대해 VisaDetails 타입을 반환하도록 설정
}

// isIncluded: 기본 서비스에 포함된 항목 여부(ex. 5개 서비스 다 합쳐서 만원 이런식.. )
// isFree: 해당 항목이 무료인지 여부

export const BusinessVisaObject = (): VisaObject => {
  return {
    /**
        사업비자
        **/
    businessVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          { name: "사업비자 발급 대행", price: 990000 },
          { name: "사업자 등록", price: 0, isFree: true },
          { name: "통번역", price: 0, isFree: true },
          { name: "멤버십 서비스 제공", price: 0, isFree: true },
          { name: "사업 컨설팅", price: 0, isFree: true },
        ],
      },
      additionalService: {
        detail: [
          { name: "", price: 0 },
          { name: "", price: 0 },
        ],
        price: 0,
      },
      VAT: 99000,
    },
    /**
        사업비자의 부가서비스(법인설립)
        **/
    businessVisaAdd: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          { name: "사업비자 발급 대행", price: 990000 },
          { name: "사업자 등록", price: 0, isFree: true },
          { name: "통번역", price: 0, isFree: true },
          { name: "멤버십 서비스 제공", price: 0, isFree: true },
          { name: "사업 컨설팅", price: 0, isFree: true },
        ],
        price: 990000,
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 100000 },
          { name: "업무 지원", price: 100000 },
        ],
        price: 200000,
      },
      VAT: 1320000,
    },
  };
};
