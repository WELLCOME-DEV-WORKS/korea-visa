export interface TaxDetails {
  detail: string;
  price: number | "무료";
}

export interface ServiceItem {
  name: string;
  price: number | "무료";
}

export interface ServiceDetails {
  detail: ServiceItem[];
  price: number | "무료";
}

export interface VisaDetails {
  tax: TaxDetails;
  basicService: ServiceDetails;
  additionalService: ServiceDetails;
  totalPrice: number;
}

export interface PriceObject {
  businessVisa: VisaDetails;
  jobSearchVisa: VisaDetails;
  employmentVisa: VisaDetails;
  overseasVisa: VisaDetails;
  marriageVisa: VisaDetails;
  residence: VisaDetails;
  accompanyingVisa: VisaDetails;
}
const PriceObject = (): PriceObject => {
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
          { name: "사업자 등록", price: "무료" },
          { name: "통번역", price: "무료" },
          { name: "멤버십 서비스 제공", price: "무료" },
          { name: "사업 컨설팅", price: "무료" },
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
      totalPrice: 1320000,
    },

    /** 
      구직비자
      **/
    jobSearchVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          { name: "초기상담 및 비자 유형 선정", price: 200000 },
          { name: "서류 준비 및 검토 ", price: 150000 },
          { name: "비자 신청서 작성 및 제출", price: 150000 },
        ],
        price: 500000,
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 100000 },
          { name: "업무 지원", price: 100000 },
        ],
        price: 200000,
      },
      totalPrice: 830000,
    },

    /** 
      취업비자
      **/
    employmentVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          { name: "취업 상담", price: 200000 },
          { name: "서류 검토", price: 150000 },
          { name: "비자 신청서 작성 및 제출", price: 150000 },
        ],
        price: 500000,
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 100000 },
          { name: "업무 지원", price: 100000 },
        ],
        price: 200000,
      },
      totalPrice: 830000,
    },

    /** 
      동포비자
      **/
    overseasVisa: {
      tax: {
        detail: "투자 비자 공과금",
        price: 200000,
      },
      basicService: {
        detail: [
          { name: "투자 상담", price: 500000 },
          { name: "서류 준비 및 검토", price: 300000 },
          { name: "비자 신청서 제출", price: 200000 },
        ],
        price: 1000000,
      },
      additionalService: {
        detail: [
          { name: "사업 등록 지원", price: 200000 },
          { name: "법률 자문", price: 100000 },
        ],
        price: 300000,
      },
      totalPrice: 1500000,
    },

    /** 
      결혼비자
      **/
    marriageVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          { name: "초기상담 및 비자 유형 선정", price: 200000 },
          { name: "서류 준비 및 검토", price: 300000 },
          { name: "비자 신청서 작성 및 제출", price: 200000 },
          { name: "출입국 사무소 대응 및 진행 상황 관리", price: 100000 },
          { name: "비자 발급 후 후속관리", price: 80000 },
        ],
        price: 880000,
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 50000 },
          { name: "범죄경력증명서 아포스티유", price: 70000 },
          { name: "혼인신고 대행", price: 30000 },
        ],
        price: 150000,
      },
      totalPrice: 1160000,
    },

    /** 
      영주권
      **/
    residence: {
      tax: {
        detail: "재외동포 관련 공과금",
        price: 80000,
      },
      basicService: {
        detail: [
          { name: "초기 상담", price: 200000 },
          { name: "서류 검토", price: 200000 },
          { name: "비자 발급 지원", price: 200000 },
        ],
        price: 600000,
      },
      additionalService: {
        detail: [
          { name: "추가 서류 준비", price: 80000 },
          { name: "현지 사무소 대응", price: 70000 },
        ],
        price: 150000,
      },
      totalPrice: 830000,
    },

    /** 
      동반비자
      **/
    accompanyingVisa: {
      tax: {
        detail: "영주권 공과금",
        price: 150000,
      },
      basicService: {
        detail: [
          { name: "영주 상담", price: 300000 },
          { name: "서류 검토", price: 300000 },
          { name: "영주권 신청 지원", price: 300000 },
        ],
        price: 900000,
      },
      additionalService: {
        detail: [
          { name: "현지 지원", price: 150000 },
          { name: "추가 자문", price: 100000 },
        ],
        price: 250000,
      },
      totalPrice: 1300000,
    },
  };
};
