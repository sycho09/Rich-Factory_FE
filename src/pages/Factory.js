import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ListItem } from "../components/Home/ListCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Factory = () => {
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);
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
    setLoading(false);
  }, [location]);
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
              공장/창고 매매 및 임대
            </Typography>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            공장/창고 매매 및 임대 페이지입니다. 매매와 임대를 각각 확인하기
            위해서는 상단 네이비게이션 공장창고에서 하위 메뉴를 선택해주세요
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
