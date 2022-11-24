import React from "react";
import { Typography, Box } from "@mui/material";
import { NewContext } from "../App";
const Intro = () => {
  return (
    <Box mt={2} mb={10} p={5}>
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        안녕하십니까, 공장/토지 전문 무송부동산입니다.
      </Typography>
      <Typography variant="h6">
        저희 무송부동산은 수년간 공장, 토지를 전문으로 중개 및 개발해왔습니다.
        고객만족과 행복을 위해 최선을 다하겠습니다.
      </Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h6">찾아오시는 길(약도)</Typography>
    </Box>
  );
};

export default Intro;
