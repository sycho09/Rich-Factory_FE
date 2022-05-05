import React from "react";
import { Grid } from "@mui/material";
import Map from "./Map";
import bgImg from "../factory_bg.jpg";

import styled from "styled-components";

const BackgroundBox = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(41, 52, 92, 0.8);
  border-radius: 10px 0 0 10px;
  :before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url(${bgImg});
    background-size: 100%;
    border-radius: 10px 0 0 10px;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    /* filter: blur(2px);
    -webkit-filter: blur(2px); */
    z-index: -2;
  }
`;

const AdBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background-color: royalblue;
  font-size: 2rem;
`;

const Banner = () => {
  return (
    <>
      <Grid m={0} px={5} py={2} container>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            height: { xs: 400, md: 400 },
          }}
        >
          <BackgroundBox>
            <Map />
          </BackgroundBox>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: { xs: 200, md: 400 } }}>
          <AdBox>광고자리</AdBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
