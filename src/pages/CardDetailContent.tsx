import React, { useEffect, useState } from "react";
import {
  styled,
  Grid,
  InputBase,
  Typography,
  Divider,
  Stack,
  Box,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { AllInfo } from "../util/atom";
import {
  DefaultInput,
  DefaultLabel,
  DefaultTextField,
} from "../components/Common";
import { INFO_LABEL } from "../util/constants";
import { getPropertyDetail } from "@/util/getPropertyDetail";

const CardDetailContent = ({ printRef }: any) => {
  const [isLoading, setLoading] = useState(true);
  const allInfo = useRecoilValue(AllInfo);
  const [sections, setSections] = useState<{}[]>([]);

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

    const normalizedData = INFO_LABEL.map((item) =>
      getPropertyDetail(item, allInfo)
    );
    setSections(normalizedData);
    setLoading(false);
  }, []);
  console.log("sections", sections);

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
                    {/* {(sections[8].images as string[]).length > 0 ? (
                      <img
                        alt="매물 사진"
                        src={(sections[8].images as string[])[0]}
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
                    )} */}
                  </PrintBox>
                </>
              )}
            </Grid>
            <Grid item xs={6}>
              {sections.length > 0 && (
                <>
                  <StyledTitle>☑ 담당자 안내</StyledTitle>
                  <Divider />
                  {Object.entries(sections[0]).map(([key, val]) => (
                    <React.Fragment key={key}>
                      <Grid container sx={{ width: "100%" }}>
                        <Grid item xs={4} sm={4}>
                          <StyledLabel>{key}</StyledLabel>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                          <StyledInput
                            id={key}
                            disabled
                            name={key}
                            value={val}
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  ))}
                  {/* {Object.entries(INFO_LABEL[0]).map((label, i) => (
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
                  ))} */}
                </>
              )}
            </Grid>
            {/* {(sections[8].images as string[]).length > 1 && (
              <Grid item sm={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  mt={1}
                  sx={{ overflowX: "scroll" }}
                >
                  {(sections[8].images as string[]).map((item, i) => (
                    <Box key={item}>
                      <img
                        alt={`이미지_${i}`}
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
            )} */}
          </Grid>

          <StyledTitle>☑ 매물 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(sections[1]).map(([key, val]) => (
              <React.Fragment key={key}>
                <Grid item xs={2} sm={2}>
                  {/* <StyledLabel>{label[1]}</StyledLabel> */}
                  <StyledLabel>{key}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <StyledInput id={key} disabled name={key} value={val} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <StyledTitle>☑ 토지 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(sections[2]).map(([key, val]) => (
              <React.Fragment key={key}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{key}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  {key !== "landArea" ? (
                    <StyledInput id={key} disabled name={key} value={val} />
                  ) : (
                    <Stack direction="row">
                      <StyledInput
                        id={key}
                        disabled
                        name={key}
                        value={`${(val as number).toLocaleString(undefined, {
                          maximumFractionDigits: 1,
                        })}㎡`}
                      />
                      <StyledPyInput
                        value={`${((val as number) * 0.3025).toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 1,
                          }
                        )}평`}
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
                {Object.entries(sections[3]).map(([key, val]) => (
                  <React.Fragment key={key}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{key}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      {key !== "buildingArea" && key !== "groundArea" && (
                        <StyledInput id={key} disabled name={key} value={val} />
                      )}

                      {key === "buildingArea" && (
                        <Stack direction="row">
                          <StyledInput
                            id={key}
                            disabled
                            name={key}
                            value={`${(val as number).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}㎡`}
                          />
                          <StyledPyInput
                            value={`${((val as number) * 0.3025).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}평`}
                          />
                        </Stack>
                      )}

                      {key === "groundArea" && (
                        <Stack direction="row">
                          <StyledInput
                            id={key}
                            disabled
                            name={key}
                            value={`${(val as number).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}㎡`}
                          />
                          <StyledPyInput
                            value={`${((val as number) * 0.3025).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 1,
                              }
                            )}평`}
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
                {Object.entries(sections[5]).map(([key, val]) => (
                  <React.Fragment key={key}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{key}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <StyledInput
                        id={key}
                        disabled
                        name={key}
                        value={`${(val as number).toLocaleString(undefined, {
                          maximumFractionDigits: 1,
                        })}만원`}
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
                {Object.entries(sections[4]).map(([key, val]) => (
                  <React.Fragment key={key}>
                    <Grid item xs={2} sm={2}>
                      <StyledLabel>{key}</StyledLabel>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <StyledInput
                        id={key}
                        disabled
                        name={key}
                        value={`${(val as number).toLocaleString(undefined, {
                          maximumFractionDigits: 1,
                        })}만원`}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </>
          )}
          <StyledTitle>☑ 매물 입지 정보</StyledTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {Object.entries(sections[6]).map(([key, val]) => (
              <React.Fragment key={key}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{key}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <StyledInput id={key} disabled name={key} value={val} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <StyledTitle>☑ 매물특징</StyledTitle>
          <Grid container>
            <Grid item xs={2} sm={2}>
              <StyledLabel>
                {Object.keys(sections[6]).map((item) => item)}
              </StyledLabel>
            </Grid>
            <Grid item xs={12} sm={12}>
              <StyledTextField
                rows={3}
                multiline
                disabled
                name="feature"
                value={Object.values(sections[6]).map((key) => key)}
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
