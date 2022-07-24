import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ListItem } from "../components/Home/ListCard";
import { useLocation } from "react-router-dom";
import { TotalPage, RequestUrl } from "../util/atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PaginationComponent from "../components/Pagination";

export const SortBtn = styled.a.attrs({
  href: "#",
})`
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border: none;
  padding: 2px 6px;
  :before {
    content: " ";
    display: inline-block;
    width: 2px;
    height: 2px;
    margin-right: 4px;
    background-color: #999;
    vertical-align: 3px;
  }
  :focus {
    color: red;
  }
  :active {
    color: red;
  }
`;

const Factory = () => {
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);

  const [rentOrSale, setRentOrSale] = useState("");
  const [factorageList, setFactorageList] = useState();

  // 페이지네이션 api & 총 페이지
  const [isSort, setIsSort] = useState("");
  const [requestUrl, setRequestUrl] = useRecoilState(RequestUrl);
  const [totalPage, setTotalPage] = useRecoilState(TotalPage);

  // 현재 페이지 저장
  const [currentPage, setCurrentPage] = useState(1);

  const getList = async (pathname) => {
    try {
      const response = await axios.get(
        `https://www.richfactory.click${pathname}`
      );
      const allPropertyList = response.data.propertyList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      console.log(response.config.url);
      setRequestUrl(response.config.url);
      setTotalPage(response.data.lastPage);
      setFactorageList(allPropertyList);
      setIsSort("");
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList(location.pathname);
    setRentOrSale(location.pathname);
    setLoading(false);
  }, [location.pathname]);

  // pagination
  const handlePaging = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${requestUrl}${isSort}&per=20&page=${currentPage}`,
      });
      // setRequestUrl(requestUrl);
      setFactorageList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isLoading) return;
    handlePaging();
  }, [currentPage]);

  // sorting
  const sortItems = (item) => {
    setIsSort(() => `?sort=${item}`);
  };

  useEffect(() => {
    if (isLoading) return;
    sorting();
  }, [isSort]);

  const sorting = async () => {
    try {
      const response = await axios.get(`${requestUrl}${isSort}`);
      setCurrentPage(1);
      setRequestUrl(requestUrl);
      setFactorageList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mx={5}>
      {!isLoading && (
        <>
          <Stack
            direction="row"
            mt={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              공장/창고
              {rentOrSale === "/property/factorage-rent" ? "임대" : "매매"}
            </Typography>
            <Stack direction="row">
              <SortBtn onClick={(e) => sortItems("price")}>가격순</SortBtn>
              <SortBtn onClick={(e) => sortItems("local")}>
                지역(오름차순)
              </SortBtn>

              <SortBtn onClick={(e) => sortItems("size")}>면적순</SortBtn>
            </Stack>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            공장/창고 매물 페이지입니다.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 15 }}>
            {factorageList.map((el, i) => (
              <Grid key={i} item xs={12} sm={6} md={3} mb={2}>
                <ListItem content={el} />
              </Grid>
            ))}
          </Grid>
          <PaginationComponent
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Box>
  );
};

export default Factory;
