import React, { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Divider,
  Box,
  Chip,
  styled,
  Button,
} from "@mui/material";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { factory_API } from "../../util/axios";
import { getCookie } from "../../util/cookie";
import { BoardContentProps } from "../../layout/types";

const BoardDetail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [boardItem, setBoardItem] = useState({});

  const getBoardItem = async () => {
    setIsLoading(true);
    try {
      const response = await factory_API.get(`/board/${id}`);
      setBoardItem(response.data);
      setIsLoading(false);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  };
  useEffect(() => {
    getBoardItem();
  }, []);

  return <>{!isLoading && <BoardContent {...boardItem} />}</>;
};

export default BoardDetail;

const BoardContent = (boardProps: BoardContentProps) => {
  const {
    _id,
    category,
    clientName,
    content,
    dateWrite,
    fileNameList,
    fileUrlList,
    title,
  } = boardProps;
  const navigate = useNavigate();
  const deleteBoardItem = async (id: number) => {
    const isConfirm = window.confirm("정말 게시물을 삭제하시겠습니까?");

    if (isConfirm) {
      const loginToken = getCookie("loginToken");
      factory_API.defaults.headers.common.Authorization = `Bearer ${loginToken}`;
      try {
        const response = await factory_API.delete(`/board/${id}`);
        alert(response.data.msg);
        navigate("/main/board");
      } catch (error) {
        const err = error as AxiosError;
        if (err.response?.status === 401) {
          alert("권한이 없습니다.");
        }
        if (err.response?.status === 400) {
          alert(err.response?.data.msg);
        }
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledBoardTitle>
          <Chip size="small" label={_id} />
          <p className="category">[{category}]</p> <p>{title}</p>
        </StyledBoardTitle>
        <StyledBoardTitle>
          <span>{dateWrite.slice(2, 10).replaceAll("-", ".")}</span>
          <strong>{clientName}</strong>

          <Button
            variant="outlined"
            onClick={() => deleteBoardItem(_id)}
            size="small"
            sx={{ minWidth: "auto" }}
          >
            게시물 삭제
          </Button>
        </StyledBoardTitle>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ minHeight: "70vh" }}>{content}</Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <StyledBoardTitle pb={3}>
        <span>첨부파일</span>
        {fileUrlList.map((el: string, i: number) => (
          <a href={el} key={i}>
            {fileNameList[i]}
          </a>
        ))}
      </StyledBoardTitle>
    </Container>
  );
};

const StyledBoardTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  "& p": {
    margin: 0,
    marginLeft: "5px",
    fontSize: "1.4rem",
  },
  "& p.category": {
    margin: 0,
    fontSize: "1rem",
    color: theme.palette.primary.main,
  },
  "& span": {
    fontSize: "1rem",
    color: theme.palette.secondary.dark,
  },
}));
