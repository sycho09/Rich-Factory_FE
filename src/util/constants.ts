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
