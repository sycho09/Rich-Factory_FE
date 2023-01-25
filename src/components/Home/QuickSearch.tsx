import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsSearch, PropertyList, RequestUrl, TotalPage } from "../../util/atom";

const QuickSearch = () => {
  const setPropertyList = useSetRecoilState(PropertyList);
  const setRequestUrl = useSetRecoilState(RequestUrl);
  const setTotalPage = useSetRecoilState(TotalPage);
  const [isSearch, setIsSearch] = useRecoilState(IsSearch);
  const handleBuildingArea = async (py) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/side/building/${py}`,
      });
      setRequestUrl(response.config.url);
      setPropertyList(response.data.propertyList);
      setTotalPage(response.data.lastPage);
      if (!isSearch || isSearch !== "area") setIsSearch("area");
    } catch (err) {
      console.log(err);
    }
  };
  const handleLandArea = async (py) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/side/land/${py}`,
      });
      setRequestUrl(response.config.url);
      setPropertyList(response.data.propertyList);
      setTotalPage(response.data.lastPage);
      if (!isSearch || isSearch !== "area") setIsSearch("area");
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
  const setPropertyList = useSetRecoilState(PropertyList);
  const setTotalPage = useSetRecoilState(TotalPage);
  const setRequestUrl = useSetRecoilState(RequestUrl);
  const [isSearch, setIsSearch] = useRecoilState(IsSearch);
  const handleFactorage = async (city, dealType) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/side/factorage/${city}/${dealType}`,
      });
      setRequestUrl(response.config.url);
      setTotalPage(response.data.lastPage);
      setPropertyList(response.data.propertyList);
      if (!isSearch || isSearch !== "city") setIsSearch("city");
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
