import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "./08_FAQ";
import { LoginInfo } from "../util/atom";
import { useRecoilValue } from "recoil";
import { factory_API } from "../util/axios";

const Board = () => {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(LoginInfo);

  const [isLoading, setIsLoading] = useState(true);
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    setIsLoading(true);
    try {
      const response = await factory_API.get("/board");
      console.log(response.data.postList);
      const allBoardList = response.data.postList.sort((a, b) =>
        a._id > b._id ? -1 : 1
      );
      setBoardList(allBoardList);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div style={{ padding: "2rem 3rem" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          게시판
        </Typography>
        {isLogin && (
          <Button
            variant="outlined"
            onClick={() => navigate("/main/board/write")}
          >
            작성하기
          </Button>
        )}
      </Stack>
      <Paper elevation={3}>
        {!isLoading && (
          <TableContainer sx={{ marginTop: 2 }}>
            {/* <TableContainer> */}
            <Table sx={{ minWidth: 650 }}>
              <TableHead
                sx={{
                  background: (theme) => theme.palette.primary.main,
                }}
              >
                <StyledTableRow>
                  <StyledTableCell
                    sx={{
                      width: "5%",
                    }}
                  ></StyledTableCell>

                  <StyledTableCell
                    align="center"
                    sx={{
                      width: "10%",
                    }}
                  >
                    구분
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      width: "60%",
                    }}
                  >
                    제목
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      width: "10%",
                    }}
                  >
                    작성자
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      width: "15%",
                    }}
                  >
                    등록일
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {boardList.map((row) => (
                  <Row key={row._id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </div>
  );
};

export default Board;

const Row = ({ row }) => {
  const navigate = useNavigate();

  const navigateItem = (_id) => {
    if (row.isForClient === "client") {
      alert("접근 권한을 확인해주세요");
    }

    if (row.isForClient === "notice") {
      navigate(_id);
    }
  };

  return (
    <React.Fragment>
      <StyledTableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <StyledTableCell component="th" scope="row" align="center">
          {row._id}
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ fontWeight: 500, cursor: "pointer" }}
        >
          {row.category === "매매" ? (
            <Chip
              label={row.category}
              sx={{
                fontSize: 14,
                fontWeight: 300,
                color: "#fff",
                backgroundColor: (theme) => theme.palette.primary.lightdark,
              }}
            />
          ) : (
            <Chip
              label={row.category}
              color="primary"
              sx={{ fontSize: 14, fontWeight: 300 }}
            />
          )}
        </StyledTableCell>

        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigateItem(`${row._id}`)}
        >
          {row.title}
          <span className="secret">
            {row.isForClient === "client" && "비밀글"}
          </span>
        </StyledTableCell>
        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigateItem(`${row._id}`)}
        >
          {row.writer}
        </StyledTableCell>
        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigateItem(`${row._id}`)}
        >
          {row.dateWrite.slice(2, 10)}
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};
