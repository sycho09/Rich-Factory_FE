import React, { useState } from "react";
import {
  Grid,
  Stack,
  Alert,
  AlertTitle,
  Chip,
  Box,
  Typography,
} from "@mui/material";
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
  max-height: 380px;
  background-color: rgba(41, 52, 92, 0.8);
  border-radius: 10px;
  :before {
    content: "";
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-image: url(${bgImg});
    background-size: 100%;
    /* border-radius: 10px 0 0 10px; */
    /* filter: blur(2px);
    -webkit-filter: blur(2px); */
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    z-index: -2;
  }
`;

export const BackgroundHeader = styled.div`
  width: 100%;
  position: relative;
  color: ${(props) => props.theme.palette.primary.dark};
  :before {
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url(${headerImg});
    background-size: 80%;
    background-color: ${(props) => props.theme.palette.primary.light};
    background-position: right bottom;
    /* object-fit: cover; */
    z-index: -2;
  }
`;

const Banner = () => {
  const [activeStep, setActiveStep] = useState(0);
  // const maxSteps = 3;

  // function handleNext() {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // }

  // function handleBack() {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // }

  function handleStepChange(step) {
    setActiveStep(step);
  }
  return (
    <>
      <Grid
        container
        maxWidth="lg"
        columnSpacing={2}
        sx={{
          margin: "2rem auto 0",
          padding: "0 2rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            height: { xs: 380, md: 380 },
          }}
        >
          <BackgroundBox>
            <Map />
          </BackgroundBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ height: { sm: 80, md: 175 }, marginBottom: 1.8 }}
          >
            <Box
              sx={{
                padding: 2,
                margin: { sm: "14px 0 0", md: 0 },
                height: { sm: 80, md: 175 },
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: (theme) => theme.palette.primary.light,
                backgroundColor: "#eaeaea",
              }}
            >
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                📞
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", paddingTop: 1, textAlign: "center" }}
              >
                무송부동산을 찾아주셔서 감사합니다.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: (theme) => theme.palette.red.main,
                  textAlign: "center",
                }}
              >
                365일 전화 상담 가능합니다.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ height: 190 }}>
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
                  key={`li_${i}`}
                  direction="column"
                  justifyContent="space-between"
                  sx={{
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  <Alert
                    sx={{
                      padding: 2,
                      height: 190,
                      borderRadius: 5,
                    }}
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
