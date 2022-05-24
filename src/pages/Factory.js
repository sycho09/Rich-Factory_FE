import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ListItem } from "../components/Home/ListCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

const SortBtn = styled.a.attrs({
  href: "#",
})`
  font-size: 13px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border: none;
  padding: 2px 4px;
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
  const getList = async (pathname) => {
    try {
      const response = await axios.get(`http://15.164.232.13/${pathname}`);
      const allPropertyList = response.data.propertyList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      setFactorageList(allPropertyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList(location.pathname);
    setRentOrSale(location.pathname);
    setLoading(false);
  }, [location]);

  //
  const sorting = (e, sort) => {
    // e.preventDefault();
    if (sort === "low") {
      console.log(factorageList);
      const newList = factorageList.sort((a, b) => {
        if (a.price === b.price) {
          return a._id - b._id;
        }
        return a.price - b.price;
      });
      setFactorageList(newList);
    }

    if (sort === "high") {
      const newList = factorageList.sort((a, b) => {
        if (a.price === b.price) {
          return a._id - b._id;
        }
        return b.price - a.price;
      });
      setFactorageList(newList);
    }
    if (sort === "abc") {
      const newList = factorageList.sort((a, b) => {
        const [provinceA, cityA, roadA] = a.address.split(" ");
        const [provinceB, cityB, roadB] = b.address.split(" ");

        if (provinceA !== provinceB && cityA !== cityB) {
          if (provinceA > provinceB) return 1;
          if (provinceA < provinceB) return -1;
          if (provinceA === provinceB) return 0;
        }
        if (provinceA === provinceB && cityA !== cityB) {
          if (cityA > cityB) return 1;
          if (cityA < cityB) return -1;
          if (cityA === cityB) return 0;
        }

        if (roadA > roadB) return 1;
        if (roadA < roadB) return -1;
        if (roadA === roadB) return 0;
      });
      setFactorageList(newList);
    }
    if (sort === "zyx") {
      const newList = factorageList.sort((b, a) => {
        const [provinceA, cityA, roadA] = a.address.split(" ");
        const [provinceB, cityB, roadB] = b.address.split(" ");

        if (provinceA !== provinceB && cityA !== cityB) {
          if (provinceA > provinceB) return 1;
          if (provinceA < provinceB) return -1;
          if (provinceA === provinceB) return 0;
        }
        if (provinceA === provinceB && cityA !== cityB) {
          if (cityA > cityB) return 1;
          if (cityA < cityB) return -1;
          if (cityA === cityB) return 0;
        }

        if (roadA > roadB) return 1;
        if (roadA < roadB) return -1;
        if (roadA === roadB) return 0;
      });
      setFactorageList(newList);
    }
  };

  console.log(factorageList);
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
              <SortBtn onClick={(e) => sorting(e, "high")}>높은가격순</SortBtn>
              <SortBtn onClick={(e) => sorting(e, "low")}>낮은가격순</SortBtn>
              <SortBtn onClick={(e) => sorting(e, "abc")}>
                지역(오름차순)
              </SortBtn>
              <SortBtn onClick={(e) => sorting(e, "zyx")}>
                지역(내림차순)
              </SortBtn>
            </Stack>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            공장/창고 매물 페이지입니다.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 15 }}>
            {factorageList?.map((el, i) => (
              <Grid key={i} item xs={12} sm={6} md={3} mb={2}>
                <ListItem content={el} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Factory;
