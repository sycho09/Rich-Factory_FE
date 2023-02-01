export interface allPropertyListProps {
  [key: string]: string | number | string[];
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
