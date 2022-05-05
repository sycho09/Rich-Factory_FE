import { Box, Chip, Stack, styled, Typography } from "@mui/material";
import React from "react";

const QuickSearch = () => {
  return (
    <Stack spacing={2} mt={1} sx={{ paddingRight: "20px" }}>
      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>공장/창고 검색</QuickTitle>
          <QuickItem>
            화성공장/창고
            <Buttons />
          </QuickItem>
          <QuickItem>
            용인공장/창고
            <Buttons />
          </QuickItem>
          <QuickItem>
            세종공장/창고
            <Buttons />
          </QuickItem>
        </Stack>
      </QuickBox>

      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>건물면적</QuickTitle>
          <QuickItem>
            100평 이하
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            200평 이하
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            200평 이상
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
        </Stack>
      </QuickBox>

      <QuickBox>
        <Stack direction="column" spacing={0.5}>
          <QuickTitle>토지면적</QuickTitle>
          <QuickItem>
            ~500평 이하
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            ~1000평 이하
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            ~2000평 이히
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              보러가기
            </QuickDarkBlueBtn>
          </QuickItem>
          <QuickItem>
            2000평 이상
            <QuickDarkBlueBtn component="span" onClick={() => alert("hi")}>
              이동하기
            </QuickDarkBlueBtn>
          </QuickItem>
        </Stack>
      </QuickBox>
    </Stack>
  );
};

export default QuickSearch;

const Buttons = () => {
  return (
    <>
      <QuickBlueBtn component="span" onClick={() => alert("hi")}>
        임
      </QuickBlueBtn>
      <QuickRedBtn component="span" onClick={() => alert("hi")}>
        매
      </QuickRedBtn>
    </>
  );
};

const QuickBox = styled(Box)(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "#f2f2f2",
  padding: "15px 20px",
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
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "10px",
  padding: "3px 4px",
  marginLeft: "12px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
const QuickRedBtn = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.red.main,
  color: "#fff",
  borderRadius: "10px",
  padding: "3px 4px",
  marginLeft: "4px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
const QuickDarkBlueBtn = styled(Typography)(({ theme }) => ({
  backgroundColor: "#235eab",
  color: "#fff",
  borderRadius: "10px",
  padding: "3px 6px",
  marginLeft: "4px",
  fontSize: "0.8rem",
  cursor: "pointer",
}));
