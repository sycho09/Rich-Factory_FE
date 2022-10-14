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
  Collapse,
  Chip,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import React, { useState } from "react";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "0.8rem 0",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
  "& span.secret": {
    fontSize: "0.8rem",
    paddingLeft: 10,
    color: theme.palette.primary.lightdark,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: theme.palette.grey.main,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const FAQ = () => {
  function createData(id, name, content) {
    return { id, name, content };
  }

  const rows = [
    createData(1, "기타", "매매계약시 필수로 확인해야 하는 부분은 무엇인가요?"),
    createData(2, "매매", "모든 부동산의 실거래가를 제공하나요?"),
    createData(3, "매매", "질문 등록 전입니다"),
    createData(4, "매매", "질문 등록 전입니다"),
    createData(5, "매매", "질문 등록 전입니다"),
  ];

  return (
    <div style={{ padding: "2rem 3rem" }}>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        자주 묻는 질문
      </Typography>
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
                    width: "85%",
                  }}
                >
                  조회
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

export default FAQ;

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);
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
          onClick={() => setOpen(!open)}
        >
          {row.name === "매매" ? (
            <Chip
              label={row.name}
              sx={{
                fontSize: 14,
                fontWeight: 300,
                color: "#fff",
                backgroundColor: (theme) => theme.palette.primary.lightdark,
              }}
            />
          ) : (
            <Chip
              label={row.name}
              color="primary"
              sx={{ fontSize: 14, fontWeight: 300 }}
            />
          )}
        </StyledTableCell>

        <StyledTableCell
          sx={{ fontWeight: 600, cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {row.content}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box p={2}> 답변 등록 전입니다</Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};
