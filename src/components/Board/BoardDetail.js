import { Container, Stack, Divider, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="md">
      <Stack direction="row" mt={3} justifyContent="space-between">
        <Box> {id}. 구분- 제목</Box>
        <Box>작성자. 등록일</Box>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ minHeight: "70vh" }}>본문 내용</Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box pb={3}>첨부파일</Box>
    </Container>
  );
};

export default BoardDetail;
