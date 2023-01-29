export interface SearchProps {
  [key: string]: string | number;
}

export interface SelectBoxProps {
  children: JSX.Element[];
  type: string;
  label: string;
  search: SearchProps;
  setSearch: React.Dispatch<React.SetStateAction<SearchProps>>;
}

export interface PaginationComponentProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
