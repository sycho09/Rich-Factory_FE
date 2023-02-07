import { atom } from "recoil";
import { AllInfoProps, allPropertyListProps } from "./types";

// 관리자 모드(로그인)
export const LoginInfo = atom({
  key: "LoginInfo",
  default: false,
});

export const Token = atom<string>({
  key: "Token",
  default: "",
});

// 등록된 매물 리스트 불러오기
export const PropertyList = atom<allPropertyListProps[]>({
  key: "PropertyList",
  default: [],
});

// pagination api
export const RequestUrl = atom({
  key: "RequestUrl",
  default: "",
});

// pagination total page
export const TotalPage = atom({
  key: "TotalPage",
  default: 0,
});

// quick search flag
export const IsSearch = atom({
  key: "IsSearch",
  default: "",
});

// 매물 등록하기
export const TitleInfo = atom({
  key: "TitleInfo",
  default: "",
});

export const AllInfo = atom<AllInfoProps>({
  key: "AllInfo",
  default: {
    images: [],

    store: "",
    manager: "",
    tel: "",
    storeAddress: "",
    registerId: "",

    type: "", // select
    dealType: "",
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
  },
});
