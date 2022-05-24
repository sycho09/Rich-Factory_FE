import {
  Select,
  TextField,
  Grid,
  MenuItem,
  styled,
  Button,
  Paper,
  Typography,
  Box,
  Divider,
  InputBase,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  const { control, register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      type: "공장",
      dealType: "매매",
      status: "possible",
    },
    mode: "onSubmit",
  });

  // 미리보기 이미지(화면에 표시)
  const [previewImgs, setPreviewImgs] = useState([]);
  // 이미지 파일(백엔드 전송)
  const [img, setImg] = useState([]);

  // 업로드한 이미지 미리보기(form data 형태로 전송)
  const onImageChange = (e) => {
    Object.values(e.target.files).map((item) => {
      setImg((img) => [...img, item]);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(item);
      fileReader.onload = function (f) {
        setPreviewImgs((o) => [...o, f.target.result]);
      };
    });
  };

  // react-hook-form 사용 이미지 업로드
  const fileInput = React.createRef();

  const onSubmit = async (data, e) => {
    console.log(data);
    const formdata = new FormData();
    for (let key in img) {
      formdata.append("images", img[key]);
    }
    for (let key in data) {
      formdata.append(key, data[key]);
    }

    try {
      const response = await axios({
        method: "post",
        url: "http://15.164.232.13/property/add",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response);
      console.log("--------");
      e.target.reset();
      alert(response.data.msg);
      navigate("/home");
    } catch (err) {
      alert(err);
    }
  };
  // const onSubmit = (data, e) => {
  //   console.log(data);
  //   e.target.reset();
  // };

  console.log(watch("status"));

  // 이미지 초기화
  const isResetAll = () => {
    const isReset = window.confirm("모든 이미지를 초기화 하시겠습니까?");
    if (isReset) {
      setImg([]);
      setPreviewImgs([]);
    }
  };

  // 평수 계산
  const [py, setPy] = useState("");
  const handleChangeFab = (e, targetName) => {
    setValue(targetName, e.target.value);
    setPy(e.target.value);
  };

  // 대지면적
  const [landPy, setLandPy] = useState("");
  const handleLandArea = (e) => {
    e.preventDefault();
    let pyvalue = Number(py) * 0.3025;
    setLandPy(pyvalue.toFixed(2));
    setPy("");
  };

  // 건물면적
  const [fabPy, setFabPy] = useState("");
  const handleFabArea = (e) => {
    e.preventDefault();
    let pyvalue = Number(py) * 0.3025;
    setFabPy(pyvalue.toFixed(2));
    setPy("");
  };

  useEffect(() => {
    register("landArea");
    register("buildingArea");
    register("status", { required: true });
    console.log("----register");
  }, [register]);

  return (
    <Box mx={5}>
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          매물 등록하기
        </Typography>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box pb={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={6}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <CategoryTitle>✍️ 사진 선택</CategoryTitle>
                <Box mb={0.5}>
                  <Button variant="contained" component="label" size="small">
                    <input
                      accept="image/*"
                      type="file"
                      name="pics"
                      hidden
                      multiple
                      ref={fileInput}
                      onChange={onImageChange}
                    />
                    사진선택
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={isResetAll}
                    size="small"
                    sx={{ marginLeft: 1 }}
                  >
                    이미지 초기화
                  </Button>
                  {previewImgs.length > 0 && (
                    <img
                      alt="대표이미지"
                      src={previewImgs[0]}
                      style={{
                        maxHeight: 80,
                        width: "100%",
                        objectFit: "scale-down",
                      }}
                    />
                  )}
                </Box>
              </Stack>

              <Divider sx={{ marginBottom: 1 }} />
            </Grid>
            <Grid item xs={6} pl={1}>
              <CategoryTitle>✍️ 담당자안내</CategoryTitle>
              <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
                {[
                  { helperText: "상호", name: "store" },
                  { helperText: "담당자", name: "manager" },
                  { helperText: "전화", name: "tel" },
                  { helperText: "주소", name: "storeAddress" },
                  { helperText: "등록번호", name: "registerId" },
                ].map((item) => (
                  <React.Fragment key={item.name}>
                    <Grid item xs={4} sm={4}>
                      <StyledLabel>{item.helperText}</StyledLabel>
                    </Grid>
                    <Grid item xs={8} sm={8}>
                      <Controller
                        name={item.name}
                        control={control}
                        render={({ field }) => (
                          <StyledInput
                            size="small"
                            variant="filled"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {previewImgs.length > 0 && (
                <Stack
                  direction="row"
                  spacing={1}
                  mt={1}
                  sx={{ overflowX: "scroll" }}
                >
                  {previewImgs.map((item, i) => (
                    <Box key={`${item}_i`}>
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
              )}
            </Grid>
          </Grid>

          <CategoryTitle>✍️ 매물정보</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            <Grid item xs={2} sm={2}>
              <StyledLabel>매물종류</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      size="small"
                      sx={{
                        minWidth: "200px",
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        "& .css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            padding: "3px 10px",
                          },
                      }}
                      defaultValue="공장"
                    >
                      <MenuItem value="공장">공장</MenuItem>
                      <MenuItem value="창고">창고</MenuItem>
                      <MenuItem value="토지">토지</MenuItem>
                      <MenuItem value="공장부지">공장부지</MenuItem>
                      <MenuItem value="주택부지">주택부지</MenuItem>
                      <MenuItem value="주택">주택</MenuItem>
                      <MenuItem value="상가">상가</MenuItem>
                      <MenuItem value="원룸">원룸</MenuItem>
                    </Select>
                  </>
                )}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <StyledLabel>매물구분</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="dealType"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      size="small"
                      sx={{
                        minWidth: "200px",
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        "& .css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            padding: "3px 10px",
                          },
                      }}
                      defaultValue="매매"
                    >
                      <MenuItem value="매매">매매</MenuItem>
                      <MenuItem value="임대">임대</MenuItem>
                      <MenuItem value="분양">분양</MenuItem>
                      <MenuItem value="기타">기타</MenuItem>
                    </Select>
                  </>
                )}
              />
            </Grid>

            <Grid item xs={2} sm={2}>
              <StyledLabel>계약상태</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      size="small"
                      sx={{
                        minWidth: "200px",
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        "& .css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-tn3m4m-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            padding: "3px 10px",
                          },
                      }}
                      defaultValue="possible"
                    >
                      <MenuItem value="possible">계약가능</MenuItem>
                      <MenuItem value="done">계약완료</MenuItem>
                      <MenuItem value="pending">계약대기</MenuItem>
                    </Select>
                  </>
                )}
              />
            </Grid>

            <Grid item xs={2} sm={2}>
              <StyledLabel>소재지</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <StyledInput
                    size="small"
                    variant="filled"
                    required
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>

          <CategoryTitle>✍️ 토지정보</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {[
              { helperText: "지목", name: "category" },
              { helperText: "용도지역", name: "useArea" },
              // { helperText: "대지면적", name: "landArea" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledInput
                        size="small"
                        variant="filled"
                        required
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}

            <Grid item xs={2} sm={2}>
              <StyledLabel>대지면적</StyledLabel>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              sx={{
                borderRight: "1px solid #cfcfcf",
                borderBottom: "1px solid #cfcfcf",
              }}
              alignItems="center"
            >
              <input
                style={{
                  width: 150,
                  fontSize: 16,
                  height: "100%",
                }}
                name="landArea"
                type="number"
                placeholder="㎡"
                onChange={(e) => handleChangeFab(e, e.target.name)}
              />
              <button
                onClick={handleLandArea}
                style={{
                  width: 100,
                }}
              >
                계산
              </button>
              {landPy !== "" && (
                <span>
                  <strong
                    style={{ marginLeft: 4, color: "#d74040", fontWeight: 700 }}
                  >
                    {landPy}
                  </strong>
                  평
                </span>
              )}
            </Grid>
          </Grid>

          <CategoryTitle>✍️ 건축물정보</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            <Grid item xs={2} sm={2}>
              <StyledLabel>건물면적</StyledLabel>
            </Grid>
            <Grid
              item
              xs={10}
              sm={10}
              sx={{
                borderRight: "1px solid #cfcfcf",
                borderBottom: "1px solid #cfcfcf",
              }}
              alignItems="center"
            >
              <input
                style={{ width: 150, fontSize: 16, height: "100%" }}
                name="buildingArea"
                type="number"
                placeholder="㎡"
                onChange={(e) => handleChangeFab(e, e.target.name)}
              />
              <button onClick={handleFabArea} style={{ width: 100 }}>
                계산
              </button>
              {fabPy !== "" && (
                <span>
                  <strong
                    style={{ marginLeft: 4, color: "#d74040", fontWeight: 700 }}
                  >
                    {fabPy}
                  </strong>
                  평
                </span>
              )}
            </Grid>
            {[
              // { helperText: "건물면적", name: "buildingArea" },
              { helperText: "바닥면적", name: "groundArea" },
              { helperText: "층별면적", name: "floorArea" },
              { helperText: "호이스트", name: "hoist" },
              { helperText: "전력", name: "electric" },
              { helperText: "층고", name: "height" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledInput size="small" variant="filled" {...field} />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <CategoryTitle>✍️ 임대가격</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {[
              { helperText: "보증금", name: "deposit" },
              { helperText: "월세", name: "monthlyRent" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledInput size="small" variant="filled" {...field} />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <CategoryTitle>✍️ 매매가격</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {[
              { helperText: "평당가격", name: "unitPrice" },
              { helperText: "매매가", name: "price" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledInput size="small" variant="filled" {...field} />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <CategoryTitle>✍️ 매물입지정보</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {[
              { helperText: "고속도로", name: "highway" },
              { helperText: "인접도로", name: "roadNearby" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledInput size="small" variant="filled" {...field} />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <CategoryTitle>✍️ 매물특징</CategoryTitle>
          <Grid container sx={{ borderTop: "1px solid #cfcfcf" }}>
            {[
              { helperText: "간략특징", name: "feature" },
              { helperText: "세부특징", name: "detailInfo" },
            ].map((item) => (
              <React.Fragment key={item.name}>
                <Grid item xs={2} sm={2}>
                  <StyledLabel>{item.helperText}</StyledLabel>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <StyledTextField
                        size="small"
                        rows={item.name === "feature" ? 1 : 4}
                        multiline
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <input
            type="submit"
            value="매물 등록하기"
            style={{
              border: 0,
              outline: 0,
              backgroundColor: "#1a73e8",
              color: "#fff",
              fontSize: 16,
              padding: 10,
              display: "flex",
              margin: "20px auto 5px",
              borderRadius: 10,
              cursor: "pointer",
            }}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Write;

export const StyledPaper = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: "5px",
  // backgroundColor: "rgba(0,0,0,.03)",
  border: "1px solid",
  borderColor: theme.palette.grey.main,
  padding: 0,
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
  "& .MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
  "& .Mui-disabled": {
    WebkitTextFillColor: "#000",
  },
});

export const StyledInput = styled(InputBase)({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  paddingRight: "20px",
  borderBottom: "1px solid #cfcfcf",
  borderRight: "1px solid #cfcfcf",
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

const CategoryTitle = styled(Typography)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 5,
  fontSize: 20,
  fontWeight: 500,
  color: "rgba(0,0,0,0.7)",
}));

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
  fontSize: 16,
  background: "#eaeaea",
}));
