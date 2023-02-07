interface TypesListProps {
  [key: string]: string | number;
}

export const TYPE_LIST: TypesListProps[] = [
  { value: "공장", menu: "공장" },
  { value: "창고", menu: "창고" },
  { value: "토지", menu: "토지" },
  { value: "공장부지", menu: "공장부지" },
  { value: "주택부지", menu: "주택부지" },
  { value: "주택상가원룸", menu: "주택/상가/원룸" },
];

export const DEAL_TYPE_LIS: TypesListProps[] = [
  { value: "임대", menu: "임대" },
  { value: "매매", menu: "매매" },
  { value: "분양", menu: "분양" },
];

export const BUILDING_FILTER_LIST: TypesListProps[] = [
  { value: 1, menu: "100평 이하" }, // 330.579제곱미터, 0.3025
  { value: 2, menu: "100~200평 이하" },
  { value: 3, menu: "200평 이상" },
];

export const LAND_FILTER_LIST: TypesListProps[] = [
  { value: 1, menu: "500평 이하" },
  { value: 2, menu: "500~1000평 이하" },
  { value: 3, menu: "1000~2000평 이하" },
  { value: 4, menu: "2000평 이상" },
];

export const INFO_LABEL = [
  {
    store: "상호",
    manager: "담당자",
    tel: "전화",
    storeAddress: "주소",
    registerId: "등록번호",
  },
  {
    _id: "매물번호",
    type: "매물종류",
    dealType: "매물구분",
    address: "소재지",
    status: "계약상태",
  },
  { category: "지목", useArea: "용도지역", landArea: "대지면적" },
  {
    buildingArea: "건물면적(연면적)",
    groundArea: "바닥면적",
    floorArea: "층별면적",
    hoist: "호이스트",
    electric: "전력",
    height: "층고",
  },
  { deposit: "보증금", monthlyRent: "월세" },
  { unitPrice: "평당가격", price: "매매가" },
  { highway: "고속도로", roadNearby: "인접도로" },
  { feature: "간략특징" },
  { images: "이미지" },
];
