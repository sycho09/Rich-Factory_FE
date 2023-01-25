import React, { useEffect, useState } from "react";
import {
  styled,
  Grid,
  InputBase,
  Typography,
  Divider,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { AllInfo } from "../util/atom";
import testImg from "./testImg.png";
import {
  DefaultInput,
  DefaultLabel,
  DefaultTextField,
} from "../components/Common";

const labeling = [
  {
    store: " 상호",
    manager: "담당자",
    tel: "전화",
    storeAddress: "주소",
    registerId: "등록번호",
  },
  {
    _id: "매물번호",
    type: "매물종류",
    dealType: "매물구분",
    address: "소재지",
    status: "계약상태",
  },
  { category: "지목", useArea: "용도지역", landArea: "대지면적" },
  {
    buildingArea: "건물면적(연면적)",
    groundArea: "바닥면적",
    floorArea: "층별면적",
    hoist: "호이스트",
    electric: "전력",
    height: "층고",
  },
  { deposit: " 보증금", monthlyRent: "월세" },
  { unitPrice: "평당가격", price: "매매가" },
  { highway: "고속도로", roadNearby: "인접도로" },
  { feature: " 간략특징" },
  { images: [] },
];

const CardDetailContent = ({ printRef }) => {
  const [isLoading, setLoading] = useState(true);
  const [allInfo, setAllInfo] = useRecoilState(AllInfo);
  const [sections, setSections] = useState([]);

  // 임대 or 매매
  const [isSale, setIsSale] = useState(true);

  // 건축물정보 포함 or not
  const [hasBuilding, setHasBuilding] = useState(true);

  const noBuildingList = ["임야", "전", "답", "토지"];
  useEffect(() => {
    if (allInfo.dealType !== "매매") {
      setIsSale(false);
    }
    const noBuilding = noBuildingList.some((el) => allInfo.type.includes(el));
    setHasBuilding(!noBuilding);
    setSections([]);

    // 불러온 매물 정보 카테고리별로 입력
    for (var key in labeling) {
      const newArr = Object.keys(allInfo)
        .filter((data) => Object.keys(labeling[key]).includes(data))
        .reduce((obj, key) => {
          obj[key] = allInfo[key];
          return obj;
        }, {});
      setSections((old) => [...old, { ...newArr }]);
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Divider sx={{ marginBottom: "20px" }} />
      {!isLoading && (
        <Box mb={20} p={1} ref={printRef}>
          <Grid container>
            <Grid item xs={6}>
              {sections.length > 0 && (
                <>
                  <StyledTitle>☑ 매물 사진</StyledTitle>
                  <PrintBox
                    style={{
                      width: "100%",
                    }}
                  >
                    {sections[8].images.length > 0 ? (
                      <img
                        src={sections[8].images[0]}
                        style={{
                          width: "100%",
                          maxHeight: "100%",
                          border: "2px solid #cfcfcf",
                        }}
                      />
                    ) : (
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderTop: "1px solid #cfcfcf",
                        }}
                      >
                        <p>이미지가 없습니다</p>
                      </Box>
                    )}
                  </PrintBox>
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              {sections.length > 0 && (
                <div style={{ paddingLeft: "4px" }}>
                  <StyledTitle>☑ 담당자 안내</StyledTitle>
                  <Divider />
                  {Object.entries(labeling[0]).map((label, i) => (
                    <React.Fragment key={label[1]}>
                      <Grid container sx={{ width: "100%" }}>
                        <Grid item xs={4} sm={4}>
                          <StyledLabel>{label[1]}</StyledLabel>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                          <StyledInput
                            id={label[1]}
                            disabled
                            name={label[0]}
                            value={sections[0][label[0]]}
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </Grid>
            {sections[8].images.length > 1 && (
              <Grid item sm={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  mt={1}
                  sx={{ overflowX: "scroll" }}
                >
                  {sections[8].images.map((item) => (
                    <Box key={item}>
                      <img
                        src={item}
                        style={{
                          border: "2px solid #eaeaea",
                          maxHeight: 80,
                          width: "100%",
                          objectFit: "scale-down",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Grid>
            )}
          </Grid>

          <StyledTitle>☑ 매물 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(labeling[1]).map((label, i) => (
              <React.Fragment key={label[1]}>
                <Grid item xs={2} sm={2}>
                  {/* <StyledLabel>{label[1]}</StyledLabel> */}
                  <StyledLabel>{label[1]}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <StyledInput
                    id={label[1]}
                    disabled
                    name={label[0]}
                    value={sections[1][label[0]]}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <StyledTitle>☑ 토지 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(labeling[2]).map((label, i) => (
              <React.Fragment key={label[1]}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{label[1]}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  {label[0] !== "landArea" ? (
                    <StyledInput
                      id={label[1]}
                      disabled
                      name={label[0]}
                      value={sections[2][label[0]]}
                    />
                  ) : (
                    <Stack direction="row">
                      <StyledInput
                        id={label[1]}
                        disabled
                        name={label[0]}
                        value={`${sections[2][label[0]].toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 1,
                          }
                        )}㎡`}
                      />
                      <StyledPyInput
                        value={`${(
                          sections[2][label[0]] * 0.3025
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 1,
                        })}평`}
                      />
                    </Stack>
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          {hasBuilding && (
            <>
              <StyledTitle>☑ 건축물 정보</StyledTitle>
              <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
                {Object.entries(labeling[3]).map((label, i) => (
                  <React.Fragment key={label[1]}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{label[1]}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      {label[0] !== "buildingArea" &&
                        label[0] !== "groundArea" && (
                          <StyledInput
                            id={label[1]}
                            disabled
                            name={label[0]}
                            value={
                              sections[3][label[0]] === "undefined"
                                ? ""
                                : sections[3][label[0]]
                            }
                          />
                        )}

                      {label[0] === "buildingArea" && (
                        <Stack direction="row">
                          <StyledInput
                            id={label[1]}
                            disabled
                            name={label[0]}
                            value={`${sections[3][label[0]].toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}㎡`}
                          />
                          <StyledPyInput
                            value={`${(
                              sections[3][label[0]] * 0.3025
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 1,
                            })}평`}
                          />
                        </Stack>
                      )}

                      {label[0] === "groundArea" && (
                        <Stack direction="row">
                          <StyledInput
                            id={label[1]}
                            disabled
                            name={label[0]}
                            value={`${sections[3][label[0]].toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}㎡`}
                          />
                          <StyledPyInput
                            value={`${(
                              sections[3][label[0]] * 0.3025
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 1,
                            })}평`}
                          />
                        </Stack>
                      )}
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </>
          )}
          {isSale ? (
            <>
              <StyledTitle>☑ 매매가격</StyledTitle>
              <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
                {Object.entries(labeling[5]).map((label, i) => (
                  <React.Fragment key={label[1]}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{label[1]}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <StyledInput
                        id={label[1]}
                        disabled
                        name={label[0]}
                        value={`${sections[5][label[0]].toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 1,
                          }
                        )}만원`}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <StyledTitle>☑ 임대가격</StyledTitle>
              <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
                {Object.entries(labeling[4]).map((label, i) => (
                  <React.Fragment key={label[1]}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{label[1]}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <StyledInput
                        id={label[1]}
                        disabled
                        name={label[0]}
                        value={`${sections[4][label[0]].toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 1,
                          }
                        )}만원`}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </>
          )}
          <StyledTitle>☑ 매물 입지 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(labeling[6]).map((label, i) => (
              <React.Fragment key={label[1]}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{label[1]}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <StyledInput
                    id={label[1]}
                    disabled
                    name={label[0]}
                    value={
                      sections[6][label[0]] === "undefined"
                        ? ""
                        : sections[6][label[0]]
                    }
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <StyledTitle>☑ 매물특징</StyledTitle>
          <Grid container>
            <Grid item xs={2} sm={2}>
              <StyledLabel>{labeling[7]["feature"]}</StyledLabel>
            </Grid>
            <Grid item xs={12} sm={12}>
              <StyledTextField
                rows={3}
                multiline
                disabled
                name="feature"
                value={
                  sections[7]["feature"] === "undefined"
                    ? ""
                    : sections[7]["feature"]
                }
              />
            </Grid>
          </Grid>

          <br />
        </Box>
      )}
    </>
  );
};

export default CardDetailContent;

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  padding: "1.5rem 0 0.2rem",
  ["@media print"]: {
    fontSize: "12px",
    padding: "4px 0 1px",
  },
}));

const StyledLabel = styled(DefaultLabel)(({ theme }) => ({
  textAlign: "center",
  fontSize: 14,
  background: "#eaeaea",
  borderBottom: "1px solid #cfcfcf",
}));

export const StyledTextField = styled(DefaultTextField)({
  // "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
  //   WebkitTextFillColor: "#000",
  // },

  ["@media print"]: {
    fontSize: "12px",
  },
});

export const StyledInput = styled(DefaultInput)({
  borderRight: "1px solid #cfcfcf",
  ["@media print"]: {
    fontSize: "12px",
  },
});

export const StyledPyInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  paddingRight: "20px",
  borderBottom: "1px solid #cfcfcf",
  borderRight: "1px solid #cfcfcf",
  "& .Mui-disabled": {
    WebkitTextFillColor: theme.palette.red.main,
  },
  "& .css-yz9k0d-MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: theme.palette.red.main,
  },
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    width: "100%",
    // lineHeight: 2,
    paddingLeft: "10px",
    fontWeight: 500,
    WebkitTextFillColor: theme.palette.red.main,
  },
  ["@media print"]: {
    fontSize: "12px",
  },
}));

export const PrintBox = styled(Box)(({ theme }) => ({
  height: 380,
  ["@media print"]: {
    height: 280,
  },
}));
