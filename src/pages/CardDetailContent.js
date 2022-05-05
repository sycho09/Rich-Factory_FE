import React, { useEffect, useState } from "react";
import {
  styled,
  Grid,
  Paper,
  InputBase,
  Typography,
  Divider,
  Button,
  Stack,
  Chip,
  Box,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fakedata } from "../util/mockup";
import { AllInfo } from "../util/atom";
import testImg from "./testImg.png";

const labeling = [
  {
    store: " 상호",
    manager: "담당자",
    tel: "전화",
    storeAddress: "주소",
    registerId: "등록번호",
  },
  {
    type: "매물종류",
    propertyId: "매물번호",
    address: "소재지",
    status: "계약상태",
  },
  { category: "지목", useArea: "용도지역", landArea: "대지면적" },
  {
    buildingArea: "  건물면적",
    groundArea: "바닥면적",
    floorArea: "층별면적",
    hoist: "호이스트",
    electric: "전력",
    height: "층고",
  },
  { deposit: " 보증금", monthlyRent: "월세" },
  { unitPrice: "평당가격", price: "매매가" },
  { highway: "고속도로", roadNearby: "인접도로" },
  { feature: " 간략특징", detailInfo: "세부특징" },
];

const CardDetailContent = () => {
  const { id } = useParams();

  const [allInfo, setAllInfo] = useRecoilState(AllInfo);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setAllInfo(fakedata);
    // 불러온 매물 정보 카테고리별로 입력
    if (allInfo.length > 0) {
      for (var key in labeling) {
        const newArr = Object.keys(allInfo[0])
          .filter((data) => Object.keys(labeling[key]).includes(data))
          .reduce((obj, key) => {
            obj[key] = allInfo[0][key];
            return obj;
          }, {});
        setSections((old) => [...old, { ...newArr }]);
      }
    }
  }, [allInfo, setAllInfo]);

  // 업로드한 이미지(form data 형태로 전송)
  const [saveImgs, setSaveImgs] = useState([]);
  // 미리보기 이미지(화면에 표시)
  const [previewImgs, setPreviewImgs] = useState([]);

  const onImageChange = (e) => {};
  return (
    <>
      <Divider sx={{ marginBottom: "20px" }} />
      <Box mb={20} p={1}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            {sections.length > 0 && (
              <>
                <StyledTitle>☑ 매물 사진</StyledTitle>
                <div style={{ height: 300 }}>
                  {allInfo[0].images.length > 0 ? (
                    <img src={allInfo[0].images[0]} style={{ width: "100%" }} />
                  ) : (
                    <img
                      src={testImg}
                      style={{
                        border: "2px solid #eaeaea",
                        maxHeight: 300,
                        width: "100%",
                        objectFit: "scale-down",
                      }}
                    />
                  )}
                </div>
              </>
            )}
          </Grid>
          <Grid item sm={6}>
            {sections.length > 0 && (
              <>
                <StyledTitle>☑ 담당자 안내</StyledTitle>
                <Divider />
                {Object.values(labeling[0]).map((label, i) => (
                  <React.Fragment key={label}>
                    <Grid container rowspacing={1} sx={{ width: "100%" }}>
                      <Grid item xs={4} sm={4}>
                        <StyledLabel>{label}</StyledLabel>
                      </Grid>
                      <Grid item xs={8} sm={8}>
                        <StyledInput
                          id={`${label}_content`}
                          disabled
                          name={Object.values(sections[0])[i]}
                          value={Object.values(sections[0])[i]}
                        />
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </>
            )}
          </Grid>
          <Grid item sm={12}>
            <Stack direction="row" spacing={1} sx={{ overflowX: "scroll" }}>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <Box sx={{ border: "1px solid #cfcfcf" }}>
                  <img
                    src={testImg}
                    style={{
                      border: "2px solid #eaeaea",
                      maxHeight: 100,
                      width: "100%",
                      objectFit: "scale-down",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        {sections.length > 0 && (
          <>
            <StyledTitle>☑ 매물 정보</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[1]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[1])[i]}
                      value={Object.values(sections[1])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 토지 정보</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[2]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[2])[i]}
                      value={Object.values(sections[2])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 건축물 정보</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[3]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[3])[i]}
                      value={Object.values(sections[3])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 임대가격</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[4]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[4])[i]}
                      value={Object.values(sections[4])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 매매가격</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[5]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[5])[i]}
                      value={Object.values(sections[5])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 매물 입지 정보</StyledTitle>
            <Grid
              container
              rowspacing={1}
              sx={{ borderTop: "1px solid #cfcfcf" }}
            >
              {Object.values(labeling[6]).map((label, i) => (
                <React.Fragment key={label}>
                  <Grid item xs={4} sm={2}>
                    <StyledLabel>{label}</StyledLabel>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <StyledInput
                      id={`${label}_content`}
                      disabled
                      name={Object.values(sections[6])[i]}
                      value={Object.values(sections[6])[i]}
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>

            <StyledTitle>☑ 매물특징</StyledTitle>
            <Grid container rowspacing={1}>
              <Grid item xs={4} sm={2}>
                <StyledLabel>{Object.values(labeling[7])[0]}</StyledLabel>
              </Grid>
              <Grid item xs={8} sm={12}>
                <StyledTextField
                  rows={1}
                  multiline
                  disabled
                  name={Object.values(sections[7])[0]}
                  value={Object.values(sections[7])[0]}
                />
              </Grid>

              <Grid item xs={4} sm={2}>
                <StyledLabel>{Object.values(labeling[7])[1]}</StyledLabel>
              </Grid>
              <Grid item xs={8} sm={12}>
                <StyledTextField
                  rows={3}
                  multiline
                  disabled
                  name={Object.values(sections[7])[1]}
                  value={Object.values(sections[7])[1]}
                />
              </Grid>
            </Grid>
          </>
        )}
        <br />
      </Box>
    </>
  );
};

export default CardDetailContent;

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  padding: "2rem 0 0.5rem 0.2rem",
}));

export const StyledLabel = styled(Box)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  color: theme.palette.grey.second,
  wordBreak: "keep-all",
  padding: "5px",
  borderBottom: "1px solid #cfcfcf",
  [theme.breakpoints.down("sm")]: {
    minWidth: "50px",
  },
  fontSize: 14,
  background: "#eaeaea",
}));

export const StyledTextField = styled(TextField)({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  padding: "0",
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    width: "100%",
    lineHeight: 2,
    paddingLeft: "10px",
    fontWeight: 500,
    WebkitTextFillColor: "#000",
  },
  // "& .css-i43bvf-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled": {
  //   padding: '2px ',
  // },
});

export const StyledInput = styled(InputBase)({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  // padding: "5px",
  paddingRight: "20px",
  borderBottom: "1px solid #cfcfcf",
  "& .Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
  "& .css-yz9k0d-MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    width: "100%",
    // lineHeight: 2,
    paddingLeft: "10px",
    fontWeight: 500,
    WebkitTextFillColor: "#000",
  },
});
