import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
  Container,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DefaultInput, DefaultLabel, DefaultTextField } from "../Common";
import { getCookie } from "../../util/cookie";
import { factory_API } from "../../util/axios";

interface BoardFormValues {
  [key: string]: any;
}

const BoardWrite = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm({
    mode: "onSubmit",
  });

  const [uploadFiles, setUploadFiles] = useState<File[]>([]);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.values(e.target.files!).map((item: File) => {
      setUploadFiles((file) => [...file, item]);
    });
  };

  const onSubmit: SubmitHandler<BoardFormValues> = (data) => {
    const formdata = new FormData();
    for (const key in uploadFiles) {
      formdata.append("attachedFiles", uploadFiles[key]);
    }
    for (const key in data) {
      formdata.append(key, data[key]);
    }
    formdata.append("isForClient", "notice");
    const loginToken = getCookie("loginToken");
    factory_API.defaults.headers.common.Authorization = `Bearer ${loginToken}`;
    addSubmit(formdata);
  };
  const addSubmit = async (value: FormData) => {
    await factory_API
      .post("/board", value)
      .then((res) => {
        alert("저장완료");
        navigate("/main/board");
      })
      .catch((err) => {
        alert(err);
      });
  };
  console.log(watch("status"));
  return (
    <Container maxWidth="md">
      <Stack direction="row" mt={3} justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          게시판 글 등록하기
        </Typography>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box pb={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            pb={1}
            mb={1}
            sx={{
              borderBottom: "1px dashed #eaeaea",
            }}
          >
            <Grid item xs={2} sm={2}>
              <StyledLabel>작성자</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="writer"
                control={control}
                render={({ field }) => (
                  <StyledInput size="small" variant="filled" {...field} />
                )}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <StyledLabel>분류</StyledLabel>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <StyledInput size="small" variant="filled" {...field} />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            container
            pb={1}
            mb={1}
            sx={{
              borderBottom: "1px dashed #eaeaea",
            }}
          >
            <Grid item xs={2} sm={2}>
              <StyledLabel>제목</StyledLabel>
            </Grid>
            <Grid item xs={10} sm={10}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <StyledInput size="small" variant="filled" {...field} />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            container
            pb={1}
            mb={1}
            sx={{
              borderBottom: "1px dashed #eaeaea",
            }}
          >
            <Grid item xs={2} sm={2}>
              <StyledLabel>내용</StyledLabel>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <StyledTextField
                    size="small"
                    rows={10}
                    multiline
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            container
            pb={1}
            mb={1}
            sx={{
              borderBottom: "1px dashed #eaeaea",
            }}
          >
            <Grid item xs={2} sm={2}>
              <StyledLabel>첨부파일</StyledLabel>
            </Grid>
            <Grid item xs={10} sm={10}>
              <input
                type="file"
                multiple
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .hwp"
                name="Upload"
                onChange={uploadFile}
              />
              {uploadFiles.length > 0 &&
                uploadFiles.map((el) => (
                  <>
                    <p>{el.name}</p>
                  </>
                ))}
            </Grid>
          </Grid>

          <input
            type="submit"
            value="글 등록하기"
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
    </Container>
  );
};

export default BoardWrite;

const StyledLabel = styled(DefaultLabel)(({ theme }) => ({
  paddingLeft: 15,
  fontSize: 16,
}));
interface StyledInputProps {
  variant: string;
}
const StyledInput = styled(DefaultInput)<StyledInputProps>(({ theme }) => ({
  border: "1px solid #cfcfcf",
  borderRadius: "5px",
}));

export const StyledTextField = styled(DefaultTextField)({
  marginLeft: 12,
});
