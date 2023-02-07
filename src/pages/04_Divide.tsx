import React, { useState, useEffect } from "react";
import { Box, Divider, Stack, Typography, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ListItem } from "../components/Home/ListCard";
import compare from "@/util/compare";

const Divide = () => {
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);
  const [divideList, setDiovideList] = useState([]);
  const getList = async (pathname: string) => {
    try {
      const response = await axios.get(
        `https://www.richfactory.click/${pathname}`
      );
      const allPropertyList = response.data.propertyList.sort(compare);
      setDiovideList(allPropertyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList(location.pathname);
  }, [location]);
  useEffect(() => {
    if (divideList) {
      setLoading(false);
    }
  }, [divideList]);
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
              분양 매물
            </Typography>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            분양 매물 페이지입니다.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 15 }}>
            {divideList.map((el, i) => (
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

export default Divide;
