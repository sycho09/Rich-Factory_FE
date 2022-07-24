import React, { useEffect, useState } from "react";
import { Box, Divider, Stack, Grid, Typography } from "@mui/material";
import { ListItem } from "../components/Home/ListCard";
import axios from "axios";

const Land = () => {
  const [isLoading, setLoading] = useState(true);
  const [factorageList, setFactorageList] = useState([]);
  const getList = async () => {
    try {
      const response = await axios.get(
        `https://www.richfactory.click/property/land`
      );
      const allPropertyList = response.data.propertyList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      setFactorageList(allPropertyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
    setLoading(false);
  }, []);

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
              토지 매매 및 임대
            </Typography>
          </Stack>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography variant="body1" sx={{ fontWeight: 600, marginBottom: 2 }}>
            토지 임대 및 매매 페이지입니다.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 15 }}>
            {factorageList.map((el, i) => (
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

export default Land;
