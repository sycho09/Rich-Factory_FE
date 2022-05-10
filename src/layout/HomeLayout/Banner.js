import React, { useState } from "react";
import { Grid, Stack, Alert, AlertTitle, Chip } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

import Map from "./Map";
import bgImg from "../factory_bg.jpg";
import headerImg from "../header.jpg";
import styled from "styled-components";

import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const BackgroundBox = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(41, 52, 92, 0.8);
  /* border-radius: 10px 0 0 10px; */
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
    /* border-radius: 10px 0 0 10px; */
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    /* filter: blur(2px);
    -webkit-filter: blur(2px); */
    z-index: -2;
  }
`;

export const BackgroundHeader = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
  :before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url(${headerImg});
    background-position: left bottom;
    background-size: 100%;
    object-fit: contain;
    /* filter: grayscale(100%);
    -webkit-filter: grayscale(100%); */
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
  background-color: #eaeaea;
  font-size: 2rem;
`;

const Banner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }
  return (
    <>
      <Grid
        m={0}
        px={5}
        py={2}
        container
        maxWidth="lg"
        pb={2}
        sx={{ margin: "0 auto" }}
      >
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
          <AdBox>
            <AutoPlaySwipeableViews
              interval={4000}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {["추천매물", "급매", "분양"].map((item, i) => (
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  sx={{
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  <Alert
                    sx={{ height: { xs: 198, md: 398 }, padding: 2 }}
                    variant="filled"
                    size="small"
                    severity={i === 1 ? "error" : i === 2 ? "info" : "success"}
                    color={i === 1 ? "warning" : i === 2 ? "info" : "success"}
                  >
                    <AlertTitle sx={{ fontSize: 28 }}>{item}</AlertTitle>
                    <Chip
                      sx={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                      onClick={() => alert("매물이 없습니다")}
                      label="매물 확인하기 >"
                    />
                  </Alert>
                </Stack>
              ))}
            </AutoPlaySwipeableViews>
          </AdBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
