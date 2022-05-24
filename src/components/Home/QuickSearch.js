import { Box, Chip, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { PropertyList } from "../../util/atom";

const QuickSearch = () => {
  const [propertyList, setPropertyList] = useRecoilState(PropertyList);

  const handleBuildingArea = async (py) => {
    try {
      const response = await axios.get(
        `http://15.164.232.13/side/building/${py}`
      );
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLandArea = async (py) => {
    try {
      const response = await axios.get(`http://15.164.232.13/side/land/${py}`);
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack spacing={2} mt={1} sx={{ paddingRight: "20px" }}>
      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>공장/창고 검색</QuickTitle>
          <QuickItem>
            화성공장/창고
            <Buttons city="hs" />
          </QuickItem>
          <QuickItem>
            용인공장/창고
            <Buttons city="yi" />
          </QuickItem>
          <QuickItem>
            세종공장/창고
            <Buttons city="sj" />
          </QuickItem>
        </Stack>
      </QuickBox>

      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>건물면적</QuickTitle>
          <QuickItem>
            100평 이하
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleBuildingArea(1)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            100~200평 이하
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleBuildingArea(2)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            200평 이상
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleBuildingArea(3)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
        </Stack>
      </QuickBox>

      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>토지면적</QuickTitle>
          <QuickItem>
            ~500평 이하
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleLandArea(1)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            500~1000평 이하
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleLandArea(2)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            1000~2000평 이하
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleLandArea(3)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            2000평 이상
            <QuickDarkBlueBtn
              component="span"
              onClick={() => handleLandArea(4)}
            >
              검색
            </QuickDarkBlueBtn>
          </QuickItem>
        </Stack>
      </QuickBox>
    </Stack>
  );
};

export default QuickSearch;

const Buttons = ({ city }) => {
  const [propertyList, setPropertyList] = useRecoilState(PropertyList);
  const handleFactorage = async (city, dealType) => {
    try {
      const response = await axios.get(
        `http://15.164.232.13/side/factorage/${city}/${dealType}`
      );
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <QuickBlueBtn
        component="span"
        onClick={() => handleFactorage(city, "임대")}
      >
        임
      </QuickBlueBtn>
      <QuickRedBtn
        component="span"
        onClick={() => handleFactorage(city, "매매")}
      >
        매
      </QuickRedBtn>
    </>
  );
};

const QuickBox = styled(Box)(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "#f2f2f2",
  padding: "15px 5px 15px 20px",
}));

const QuickTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 500,
  color: theme.palette.primary.main,
}));
const QuickItem = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 600,
}));

const QuickBlueBtn = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.lightdark,
  color: "#fff",
  borderRadius: "10px",
  padding: "3px 5px",
  marginLeft: "8px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
const QuickRedBtn = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.red.main,
  color: "#fff",
  borderRadius: "10px",
  padding: "3px 5px",
  marginLeft: "4px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
const QuickDarkBlueBtn = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: theme.palette.primary.lightdark,
  color: "#fff",
  borderRadius: "10px",
  padding: "2px 6px",
  marginLeft: "4px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
