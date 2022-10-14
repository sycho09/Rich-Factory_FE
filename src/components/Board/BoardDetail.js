import { Container, Stack, Divider, Box, Chip, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { factory_API } from "../../util/axios";

const BoardDetail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [boardItem, setBoardItem] = useState({});

  const getBoardItem = async () => {
    setIsLoading(true);
    try {
      const response = await factory_API.get(`/board/${id}`);
      setBoardItem(response.data);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBoardItem();
  }, []);

  return <>{!isLoading && <BoardContent {...boardItem} />}</>;
};

export default BoardDetail;

const BoardContent = ({
  _id,
  category,
  clientName,
  content,
  dateEdit,
  dateWrite,
  fileNameList,
  fileUrlList,
  isForClient,
  title,
  writer,
}) => {
  console.log(fileUrlList);

  return (
    <Container maxWidth="md">
      <Stack direction="row" mt={3} justifyContent="space-between">
        <StyledBoardTitle>
          <Chip size="small" label={_id} />
          <p className="category">[{category}]</p> <p>{title}</p>
        </StyledBoardTitle>
        <StyledBoardTitle>
          <span>{dateWrite.slice(2, 10).replaceAll("-", ".")}</span>
          <strong>{clientName}</strong>
        </StyledBoardTitle>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ minHeight: "70vh" }}>{content}</Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <StyledBoardTitle pb={3}>
        <span>첨부파일</span>
        {fileUrlList.map((el, i) => (
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
    color: theme.palette.grey.second,
  },
}));
