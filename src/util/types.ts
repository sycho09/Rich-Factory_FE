export interface allPropertyListProps {
  // [key: string]: string | number | string[];
  _id: number;
  address: string;
  buildingArea: number;
  buildingAreaPy: number;
  category: string;
  dateEdit: string;
  dateWrite: string;
  dealType: string;
  deposit: number;
  electric: string;
  feature: string;
  floorArea: string;
  groundArea: number;
  height: string;
  highway: string;
  hoist: string;
  images: string[];
  landArea: number;
  manager: string;
  monthlyRent: number;
  price: number;
  registerId: string;
  roadNearby: string;
  status: string;
  store: string;
  storeAddress: string;
  tel: string;
  type: string;
  unitPrice: number;
  useArea: string;
}

export interface RouteProps {
  path: string;
  element: JSX.Element;
  children?: any[];
}

export interface BoardListProps {
  [key: string]: string | number | any[];
  _id: number;
  dateWrite: string;
}
