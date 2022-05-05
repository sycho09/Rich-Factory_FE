import { atom } from "recoil";

// 관리자 모드(로그인)
export const LoginInfo = atom({
  key: "LoginInfo",
  default: false,
});

// 등록된 매물 리스트 불러오기
export const PropertyList = atom({
  key: "PropertyList",
  default: [],
});

// 매물 등록하기
export const TitleInfo = atom({
  key: "TitleInfo",
  default: "",
});

export const AllInfo = atom({
  key: "AllInfo",
  default: {
    images: [],

    store: "",
    manager: "",
    tel: "",
    address: "",
    registerId: "",

    type: "", // select
    propertyId: 0,
    address: "",
    status: "",

    category: "",
    useArea: "",
    landArea: 0,

    buildingArea: 0,
    groundArea: 0,
    floorArea: "",
    hoist: "",
    electric: "",
    height: "",

    deposit: 0,
    monthlyRent: 0,

    unitPrice: 0,
    price: 0,

    highway: "",
    roadNearby: "",
    feature: "",
    detailInfo: "",

    // - 담당자안내
    // 사진,
    // 상호,
    // 담당자,
    // 전화,
    // 주소,
    // 등록번호

    // - 매물 정보
    // 매물종류
    // 매물번호
    // 소재지
    // 계약상태

    // - 토지 정보
    // 지목
    // 용도지역
    // 대지면적

    // - (부지가 아닐 경우) 건축물정보
    // 건물면적
    // 바닥면적
    // 층별면적
    // 호이스트
    // 전력
    // 층고

    // - (임대일 경우) 임대가격
    // 보증금
    // 월세

    // - (매매일 경우) 매매가격
    // 평당가격
    // 매매가

    // - 매물입지정보
    // 고속도로
    // 인접도로

    // - 매물특징
    // 간략특징
    // 세부특징
  },
});
