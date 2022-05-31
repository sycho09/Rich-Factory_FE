import React, { useState, useEffect } from "react";
import { Box, Divider, Stack, Typography, Grid } from "@mui/material";
import { ListItem } from "../components/Home/ListCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Divide = () => {
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);
  const [divideList, setDiovideList] = useState([]);
  const getList = async (pathname) => {
    try {
      const response = await axios.get(`http://15.164.232.13/${pathname}`);
      const allPropertyList = response.data.propertyList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      setDiovideList(allPropertyList);
      console.log(divideList);
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
              분양 매물
            </Typography>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            분양 매물 페이지입니다.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 15 }}>
            {divideList?.map((el, i) => (
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
