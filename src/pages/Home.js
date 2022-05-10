import {
  Grid,
  Stack,
  Typography,
  Divider,
  Button,
  styled,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { SelectBox } from "../components/Common";
import ListCard from "../components/Home/ListCard";
import QuickSearch from "../components/Home/QuickSearch";

const Home = () => {
  const typeList = [
    { value: "공장", menu: "공장" },
    { value: "창고", menu: "창고" },
    { value: "토지", menu: "토지" },
    { value: "공장부지", menu: "공장부지" },
    { value: "주택부지", menu: "주택부지" },
    { value: "주택/상가/원룸", menu: "주택/상가/원룸" },
  ];
  const dealTypeList = [
    { value: "임대", menu: "임대" },
    { value: "매매", menu: "매매" },
    { value: "분양", menu: "분양" },
  ];
  const buildingFilter = [
    { value: 330.579, menu: "100평 이하" }, // 330.579제곱미터, 0.3025
    { value: 661.157, menu: "200평 이하" },
    { value: 0, menu: "200평 이상" },
  ];
  const landFilter = [
    { value: 1652.89, menu: "500평 이하" },
    { value: 3305.79, menu: "1000평 이하" },
    { value: 66115.702, menu: "2000평 이하" },
    { value: 0, menu: "2000평 이상" },
  ];

  // 검색 선택
  const [search, setSearch] = useState({
    type: "",
    dealType: "",
    building: 0,
    land: 0,
  });

  // 검색하기
  const handleSearch = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://15.164.232.13/property/search?type=${search.type}&landAreaPy=${search.land}&buildingAreaPy=${search.building}&id=`,
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
                  type="type"
                  search={search}
                  setSearch={setSearch}
                  label="매물구분"
                >
                  {typeList.map((item, i) => (
                    <StyledMenuItem key={`li_${i}`} value={item.value}>
                      {item.menu}
                    </StyledMenuItem>
                  ))}
                </SelectBox>
                <SelectBox
                  type="dealType"
                  search={search}
                  setSearch={setSearch}
                  label="가격구분"
                >
                  {dealTypeList.map((item, i) => (
                    <StyledMenuItem key={`li_${i}`} value={item.value}>
                      {item.menu}
                    </StyledMenuItem>
                  ))}
                </SelectBox>
                <SelectBox
                  type="building"
                  search={search}
                  setSearch={setSearch}
                  label="건물면적"
                >
                  {buildingFilter.map((item, i) => (
                    <StyledMenuItem key={`li_${i}`} value={item.value}>
                      {item.menu}
                    </StyledMenuItem>
                  ))}
                </SelectBox>
                <SelectBox
                  type="land"
                  search={search}
                  setSearch={setSearch}
                  label="토지면적"
                >
                  {landFilter.map((item, i) => (
                    <StyledMenuItem key={`li_${i}`} value={item.value}>
                      {item.menu}
                    </StyledMenuItem>
                  ))}
                </SelectBox>
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
