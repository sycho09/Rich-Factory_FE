import {
  Grid,
  Stack,
  Typography,
  Divider,
  Button,
  Switch,
  styled,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { SelectBox } from "../components/Common";
import axios from "axios";
import ListCard from "../components/Home/ListCard";
import QuickSearch from "../components/Home/QuickSearch";

const Home = () => {
  const itemList01 = [
    { value: "공장임대", menu: "공장임대" },
    { value: "공장매매", menu: "공장매매" },
    { value: "창고임대", menu: "창고임대" },
    { value: "창고매매", menu: "창고매매" },
    { value: "임야전답", menu: "임야,전,답" },
    { value: "토지분양", menu: "토지분양" },
    { value: "공장부지", menu: "공장부지" },
  ];
  const itemList02 = [
    { value: "1", menu: "300이하" },
    { value: "2", menu: "300초과 ~ 500이하" },
    { value: "3", menu: "500초과 ~ 1000이하" },
    { value: "4", menu: "1000초과 ~ 2000이하" },
    { value: "5", menu: "2000초과" },
  ];
  const items01 = itemList01.map((item, i) => (
    <StyledMenuItem key={`li_${i}`} value={item.value}>
      {item.menu}
    </StyledMenuItem>
  ));
  const items02 = itemList02.map((item, i) => (
    <StyledMenuItem key={`li_${i}`} value={item.value}>
      {item.menu}
    </StyledMenuItem>
  ));

  // 검색 선택
  const [search, setSearch] = useState({
    property: "",
    land: "",
    building: "",
    number: "",
  });

  // 검색하기
  const handleSearch = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `/property/search?type=${search.property}&landAreaPy=${search.land}&buildingAreaPy=${search.building}&id=`,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Stack>
        {/* Search - 매물 찾기 */}
        <Grid py={5} m={0} container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ paddingLeft: "5px" }}
            >
              🔎 매물상세검색
            </Typography>
            <Divider sx={{ margin: "0.2rem 0 " }} />
          </Grid>
          <Grid item xs={12}>
            <Stack justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <SelectBox
                  type="property"
                  search={search}
                  setSearch={setSearch}
                  label="매물구분"
                >
                  {items01}
                </SelectBox>
                <SelectBox
                  type="land"
                  search={search}
                  setSearch={setSearch}
                  label="대지면적"
                >
                  {items02}
                </SelectBox>
                <SelectBox
                  type="building"
                  search={search}
                  setSearch={setSearch}
                  label="건물면적"
                >
                  {items02}
                </SelectBox>
                <SelectBox
                  type="number"
                  search={search}
                  setSearch={setSearch}
                  label="매물번호"
                ></SelectBox>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ padding: "0.4rem 1.2rem" }}
                  onClick={handleSearch}
                >
                  검색
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid py={5} m={0} container spacing={2}>
          {/* Quick Search - 빠른 찾기 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ paddingLeft: "5px" }}
            >
              🔎 빠른검색
            </Typography>
            <Divider sx={{ margin: "0.2rem 0 " }} />
            <Stack>
              <QuickSearch />
            </Stack>
          </Grid>
          {/* Property List - 매물 리스트 */}
          <Grid item xs={12} md={9}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ paddingLeft: "5px" }}
            >
              📣 매물 리스트
            </Typography>
            <Divider sx={{ margin: "0.2rem 0 " }} />
            <ListCard />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Home;

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "3px 15px",
  fontSize: "0.9rem",
}));
