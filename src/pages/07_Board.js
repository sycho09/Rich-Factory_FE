import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  styled,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "./08_FAQ";

const Board = () => {
  const navigate = useNavigate();
  function createData(id, category, title, writer, date) {
    return { id, category, title, writer, date };
  }

  const rows = [
    createData(
      1,
      "기타",
      "기타 계약서 다운로드(PDF, HWP)",
      "관리자",
      "2022-05-02"
    ),
    createData(2, "기타", "부동산 동향(22.05)", "관리자", "2022-05-02"),
    createData(
      3,
      "기타",
      "부동산 정보 통합 열람 사이트",
      "관리자",
      "2022-05-01"
    ),
    createData(4, "기타", "토지 규제 정보", "관리자", "2022-03-28"),
    createData(
      5,
      "매매",
      "매매 관련 계약서 다운로드(PDF, DOC)",
      "관리자",
      "2022-03-21"
    ),
  ];

  return (
    <div style={{ padding: "2rem 3rem" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          게시판
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/main/board/write")}
        >
          작성하기
        </Button>
      </Stack>
      <Paper elevation={3}>
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
              {rows.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Board;

const Row = ({ row }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <StyledTableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <StyledTableCell component="th" scope="row" align="center">
          {row.id}
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
          onClick={() => navigate(`${row.id}`)}
        >
          {row.title}
        </StyledTableCell>
        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigate(`${row.id}`)}
        >
          {row.writer}
        </StyledTableCell>
        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigate(`${row.id}`)}
        >
          {row.date}
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};
