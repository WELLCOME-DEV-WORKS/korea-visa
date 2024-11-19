export interface TaxDetails {
  detail: string;
  price: number; // 공과금 가격
}

export interface ServiceItem {
  name: string;
  price: number; // 가격 (0일 경우 무료)
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

export interface PriceObject {
  //   businessVisa: VisaDetails;
  //   businessVisaAdd: VisaDetails;
  jobSearchVisa: VisaDetails;
  employmentVisa: VisaDetails;
  overseasVisa: VisaDetails;
  marriageVisa: VisaDetails;
  residence: VisaDetails;
  accompanyingVisa: VisaDetails;
}

// isIncluded: 기본 서비스에 포함된 항목 여부(ex. 5개 서비스 다 합쳐서 만원 이런식.. )
// isFree: 해당 항목이 무료인지 여부

const PriceObject = (): PriceObject => {
  return {
    // /**
    //   사업비자
    //   **/
    // businessVisa: {
    //   tax: {
    //     detail: "출입국 외국인청 인지료",
    //     price: 130000,
    //   },
    //   basicService: {
    //     detail: [
    //       { name: "사업비자 발급 대행", price: 990000 },
    //       { name: "사업자 등록", price: "무료" },
    //       { name: "통번역", price: "무료" },
    //       { name: "멤버십 서비스 제공", price: "무료" },
    //       { name: "사업 컨설팅", price: "무료" },
    //     ],
    //   },
    //   additionalService: {
    //     detail: [
    //       { name: "제출 대행", price: 100000 },
    //       { name: "업무 지원", price: 100000 },
    //     ],
    //     price: 200000,
    //   },
    //   VAT: 99000,
    // },
    // /**
    //   사업비자의 부가서비스(법인설립)
    //   **/
    // businessVisaAdd: {
    //   tax: {
    //     detail: "출입국 외국인청 인지료",
    //     price: 130000,
    //   },
    //   basicService: {
    //     detail: [
    //       { name: "사업비자 발급 대행", price: 990000 },
    //       { name: "사업자 등록", price: "무료" },
    //       { name: "통번역", price: "무료" },
    //       { name: "멤버십 서비스 제공", price: "무료" },
    //       { name: "사업 컨설팅", price: "무료" },
    //     ],
    //     price: 990000,
    //   },
    //   additionalService: {
    //     detail: [
    //       { name: "제출 대행", price: 100000 },
    //       { name: "업무 지원", price: 100000 },
    //     ],
    //     price: 200000,
    //   },
    //   VAT: 1320000,
    // },

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
          {
            name: "초기상담 및 비자 유형 선정",
            price: 99000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 99000, isIncluded: true },
          { name: "비자 신청서 작성 및 제출", price: 99000, isIncluded: true },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 99000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 99000, isIncluded: true },
          {
            name: "인턴신고 (적합한 직종코드 제안 + 취업컨설팅)",
            price: 0,
            isFree: true,
          },
        ],
      },
      additionalService: {
        detail: [
          { name: "시간제 취업 허가", price: 100000 },
          { name: "제출 대행", price: 150000 },
        ],
      },
      VAT: 9900,
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
          {
            name: "초기상담 및 비자 유형 선정",
            price: 770000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 770000, isIncluded: true },
          { name: "비자 신청서 작성 및 제출", price: 770000, isIncluded: true },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 770000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 770000, isIncluded: true },
        ],
      },
      additionalService: {
        detail: [{ name: "제출 대행", price: 150000 }],
      },
      VAT: 77000,
    },
    /** 
      동포비자
      **/
    overseasVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          {
            name: "초기상담 및 비자 유형 선정",
            price: 250000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 250000, isIncluded: true },
          { name: "비자 신청서 작성 및 제출", price: 250000, isIncluded: true },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 250000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 250000, isIncluded: true },
        ],
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 150000 },
          { name: "범죄경력증명서 아포스티유 ", price: 0, isCounsel: true },
        ],
      },
      VAT: 25000,
    },

    /** 
      결혼비자
      **/
    marriageVisa: {
      tax: {
        detail: "출입국 외국인청 인지료 ",
        price: 130000,
      },
      basicService: {
        detail: [
          {
            name: "초기상담 및 비자 유형 선정",
            price: 880000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 880000, isIncluded: true },
          { name: "비자 신청서 작성 및 제출", price: 880000, isIncluded: true },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 880000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 880000, isIncluded: true },
        ],
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 150000 },
          { name: "범죄경력증명서 아포스티유", price: 0, isCounsel: true },
          { name: "혼인신고 대행", price: 0, isCounsel: true },
        ],
      },
      VAT: 88000,
    },

    /** 
      영주권
      **/
    residence: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 230000,
      },
      basicService: {
        detail: [
          {
            name: "초기상담 및 비자 유형 선정",
            price: 1200000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 1200000, isIncluded: true },
          {
            name: "비자 신청서 작성 및 제출",
            price: 1200000,
            isIncluded: true,
          },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 1200000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 1200000, isIncluded: true },
        ],
      },
      additionalService: {
        detail: [
          { name: "제출 대행", price: 250000 },
          { name: "범죄경력증명서 아포스티유 ", price: 0, isCounsel: true },
        ],
      },
      VAT: 120000,
    },

    /** 
      동반비자
      **/
    accompanyingVisa: {
      tax: {
        detail: "출입국 외국인청 인지료",
        price: 130000,
      },
      basicService: {
        detail: [
          {
            name: "초기상담 및 비자 유형 선정",
            price: 350000,
            isIncluded: true,
          },
          { name: "서류 준비 및 검토", price: 350000, isIncluded: true },
          { name: "비자 신청서 작성 및 제출", price: 350000, isIncluded: true },
          {
            name: "출입국 사무소 대응 및 진행 상황 관리",
            price: 350000,
            isIncluded: true,
          },
          { name: "비자 발급 후 후속관리", price: 350000, isIncluded: true },
        ],
      },
      additionalService: {
        detail: [{ name: "제출 대행", price: 150000 }],
      },
      VAT: 35000,
    },
  };
};
