import {
  Grid,
  Stack,
  Typography,
  Divider,
  Button,
  styled,
  MenuItem,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SortBtn } from "./02_Factory";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  IsSearch,
  LoginInfo,
  PropertyList,
  RequestUrl,
  TotalPage,
} from "../util/atom";
import { SelectBox } from "../components/Common";
import PaginationComponent from "../components/Pagination";
import ListCard from "../components/Home/ListCard";
import QuickSearch from "../components/Home/QuickSearch";
import ListTable from "../components/Home/ListTable";

const Home = () => {
  const typeList = [
    { value: "공장", menu: "공장" },
    { value: "창고", menu: "창고" },
    { value: "토지", menu: "토지" },
    { value: "공장부지", menu: "공장부지" },
    { value: "주택부지", menu: "주택부지" },
    { value: "주택상가원룸", menu: "주택/상가/원룸" },
  ];
  const dealTypeList = [
    { value: "임대", menu: "임대" },
    { value: "매매", menu: "매매" },
    { value: "분양", menu: "분양" },
  ];
  const buildingFilter = [
    { value: 1, menu: "100평 이하" }, // 330.579제곱미터, 0.3025
    { value: 2, menu: "100~200평 이하" },
    { value: 3, menu: "200평 이상" },
  ];
  const landFilter = [
    { value: 1, menu: "500평 이하" },
    { value: 2, menu: "500~1000평 이하" },
    { value: 3, menu: "1000~2000평 이하" },
    { value: 4, menu: "2000평 이상" },
  ];
  // 로그인 정보 및 리스트 표시
  const isLogin = useRecoilValue(LoginInfo);
  const [showList, setShowList] = useState(false);

  // 리스트 저장
  const [isloading, setIsLoading] = useState(true);
  const [propertyList, setPropertyList] = useRecoilState(PropertyList);

  // 검색 선택
  const [search, setSearch] = useState({
    type: "",
    dealType: "",
    building: "",
    land: "",
  });

  // 전체매물
  // 페이지네이션 api & 총 페이지
  const [requestUrl, setRequestUrl] = useRecoilState(RequestUrl);
  const [totalPage, setTotalPage] = useRecoilState(TotalPage);

  // 현재 페이지 저장
  const [currentPage, setCurrentPage] = useState(1);

  const [isSearch, setIsSearch] = useRecoilState(IsSearch);

  // 검색하기
  const handleSearch = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/property/search?type=${search.type}&dealType=${search.dealType}&buildingArea=${search.building}&landArea=${search.land}`,
      });
      setRequestUrl(response.config.url);
      setPropertyList(response.data.propertyList);
      setTotalPage(response.data.lastPage);
      if (isSearch) setIsSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  const setList = async () => {
    console.log("loading List......");
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/propertyall`,
      });
      setRequestUrl(response.config.url);
      setTotalPage(response.data.lastPage);
      const allPropertyList = response.data.propertyList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      setPropertyList(allPropertyList);
      setIsLoading(false);
      if (isSearch) setIsSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  // sorting
  const [isSort, setIsSort] = useState("");

  const sortItems = (e, item) => {
    e.preventDefault();
    setIsSort(() => `?sort=${item}`);
  };

  useEffect(() => {
    if (isloading) return;
    sorting();
  }, [isSort]);

  useEffect(() => {
    setIsSort("");
  }, [requestUrl]);

  const sorting = async () => {
    try {
      const response = await axios.get(`${requestUrl}${isSort}`);
      setCurrentPage(1);
      setRequestUrl(requestUrl);
      setPropertyList(response.data.propertyList);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePaging = async () => {
    try {
      if (!isSort) {
        const response = await axios({
          method: "get",
          url: `${requestUrl}?per=20&page=${currentPage}`,
        });
        setPropertyList(response.data.propertyList);
      }
      if (isSort) {
        const response = await axios({
          method: "get",
          url: `${requestUrl}${isSort}&per=20&page=${currentPage}`,
        });

        setPropertyList(response.data.propertyList);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // 처음 렌더링
  useEffect(() => {
    if (!isloading) return;
    setIsSearch("");
    setList();
    setShowList(false);
  }, []);

  // pagination
  useEffect(() => {
    if (isloading) return;
    handlePaging();
  }, [currentPage]);

  return (
    <>
      <Stack>
        <Grid pt={2} m={0} container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                paddingLeft: "5px",
                color: (theme) => theme.palette.primary.dark,
              }}
            >
              🔎 매물상세검색
            </Typography>
            <Divider sx={{ margin: "0.2rem 0 " }} />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              px={1.5}
            >
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
              </Stack>
              <SearchBtn onClick={handleSearch}>검색</SearchBtn>
            </Stack>
          </Grid>
        </Grid>

        <Grid pt={2} pb={2} m={0} container spacing={2}>
          {/* Quick Search - 빠른 찾기 */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                paddingLeft: "5px",
                color: (theme) => theme.palette.primary.dark,
              }}
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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  paddingLeft: "5px",
                  color: (theme) => theme.palette.primary.dark,
                }}
              >
                📣 매물 리스트
              </Typography>
              <Stack direction="row" spacing={4}>
                {isSearch === "city" && (
                  <Stack direction="row" alignItems="center">
                    <SortBtn onClick={(e) => sortItems(e, "local")}>
                      지역별
                    </SortBtn>
                    <SortBtn onClick={(e) => sortItems(e, "price")}>
                      가격별
                    </SortBtn>
                  </Stack>
                )}
                {isSearch === "area" && (
                  <Stack direction="row" alignItems="center">
                    <SortBtn onClick={(e) => sortItems(e, "local")}>
                      지역별
                    </SortBtn>
                    <SortBtn onClick={(e) => sortItems(e, "size")}>
                      면적별
                    </SortBtn>
                  </Stack>
                )}
                <Stack direction="row" spacing={1}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      control={
                        <Switch
                          size="small"
                          checked={showList}
                          onChange={(e) => setShowList(e.target.checked)}
                          name="show-list"
                        />
                      }
                      label="리스트보기"
                    />
                  </FormControl>
                  <Button variant="outlined" size="small" onClick={setList}>
                    전체 매물 보기
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ margin: "0.2rem 0 0.8rem" }} />
            {showList ? (
              <ListTable propertyList={propertyList} />
            ) : (
              <ListCard propertyList={propertyList} />
            )}
            <PaginationComponent
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
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

const SearchBtn = styled(Button)(({ theme }) => ({
  // width: "180px",
  width: "300px",
  padding: "6px 20px",
  marginLeft: "20px",
  color: "#fff",
  backgroundColor: theme.palette.primary.dark,
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: 400,
  "&: hover": {
    border: "1px solid black",
    color: theme.palette.primary.dark,
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    width: "120px",
  },
}));
