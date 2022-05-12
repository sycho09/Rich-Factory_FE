import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React from "react";

const FAQ = () => {
  function createData(id, name, category, type, area, date) {
    return { id, name, category, type, area, date };
  }

  const rows = [
    createData(1, "김**", "매수", "공장/창고", "용인, 화성", "2022-04-02"),
    createData(2, "이**", "매도", "토지", "화성 전지역", "2022-04-21"),
    createData(3, "이**", "매도", "토지", "화성", "2022-04-21"),
    createData(4, "김**", "매수", "공장/창고", "용인", "2022-05-02"),
    createData(5, "김**", "매수", "공장/창고", "세종", "2022-05-02"),
    createData(6, "김**", "매수", "공장/창고", "평택", "2022-05-04"),
    createData(7, "박**", "매수", "토지", "화성", "2022-05-04"),
    createData(8, "김**", "매수", "공장/창고", "용인", "2022-05-04"),
    createData(9, "이**", "분양", "주택", "용인", "2022-05-04"),
  ];

  return (
    <div style={{ padding: "2rem 3rem" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          문의게시판
        </Typography>
        <Button variant="outlined" size="small" sx={{ adding: "0 1rem" }}>
          작성하기
        </Button>
      </Stack>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        {/* <TableContainer> */}
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead
            sx={{
              background: (theme) => theme.palette.primary.main,
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,
                  width: 70,
                }}
              >
                번호
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,

                  width: 120,
                }}
              >
                작성자
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,
                  width: 100,
                }}
              >
                구분
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,
                  width: 150,
                }}
              >
                종류
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,
                  width: 180,
                }}
              >
                지역정보
              </TableCell>
              <TableCell
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  borderRight: "1px solid #fff",
                  fontSize: 16,
                  width: 200,
                }}
              >
                조회
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: 16, cursor: "pointer" }}
                  onClick={() => alert("작성자만 열람할 수 있습니다")}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: 16, cursor: "pointer" }}
                  onClick={() => alert("작성자만 열람할 수 있습니다")}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: 16, cursor: "pointer" }}
                  onClick={() => alert("작성자만 열람할 수 있습니다")}
                >
                  {row.type}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: 16, cursor: "pointer" }}
                  onClick={() => alert("작성자만 열람할 수 있습니다")}
                >
                  {row.area}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: 16, cursor: "pointer" }}
                  onClick={() => alert("작성자만 열람할 수 있습니다")}
                >
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FAQ;
