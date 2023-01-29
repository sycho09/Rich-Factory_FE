export interface allPropertyListProps {
  [key: string]: string | number | string[];
}

export interface RouteProps {
  path: string;
  element: JSX.Element;
  children?: any[];
}
