import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  styled,
} from "@mui/material";
import { StyledTableRow } from "../../pages/08_FAQ";
import { useNavigate } from "react-router-dom";

const ListTable = ({ propertyList }) => {
  return (
    <>
      {!propertyList.length < 1 ? (
        <TableContainer>
          <Table
            size="small"
            sx={{
              border: "1px solid #eaeaea",
              marginBottom: 5,
            }}
          >
            <TableHead>
              <TableRow>
                <StyledHead rowSpan={2} align="center">
                  매물번호
                </StyledHead>
                <StyledHead rowSpan={2} align="center">
                  구분
                </StyledHead>
                <StyledHead align="center">주소지</StyledHead>
                <StyledHead rowSpan={2} align="center">
                  가격
                </StyledHead>
                <StyledHead align="center">대지면적</StyledHead>
              </TableRow>
              <TableRow>
                <StyledHead align="center">용도지</StyledHead>
                <StyledHead align="center">건물면적</StyledHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertyList?.map((el, i) => (
                <ListRow key={i} content={el} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ margin: "40px auto" }}>
          <Typography variant="h5">매물이 없습니다</Typography>
        </Box>
      )}
    </>
  );
};

export default ListTable;

const ListRow = ({ content }) => {
  const navigate = useNavigate();
  return (
    <>
      <StyledTableRow
        onClick={() => navigate(`/main/page/${content._id}`)}
        sx={{
          cursor: "pointer",
          borderTop: "1px solid ",
          borderColor: (theme) => theme.palette.grey.second,
        }}
      >
        <TableCell rowSpan={2} align="center">
          {content._id}
        </TableCell>
        <TableCell>{content.dealType}</TableCell>
        <TableCell>
          <b>{content.address}</b>
        </TableCell>
        <TableCell>
          <b>{content.dealType === "매매" ? "매매가" : "보증금"}&nbsp;&nbsp;</b>
          {content.dealType === "매매"
            ? content.price.toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })
            : content.deposit.toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })}
          만원
        </TableCell>
        <TableCell>
          <b>
            {(content.landArea * 0.3025).toLocaleString(undefined, {
              maximumFractionDigits: 1,
            })}
            평&nbsp;&nbsp;
          </b>
          {content.landArea.toLocaleString(undefined, {
            maximumFractionDigits: 1,
          })}
          ㎡
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell>{content.type}</TableCell>
        <TableCell> {content.useArea || "-"}</TableCell>
        <TableCell>
          <b>{content.dealType === "매매" ? "평당" : "월세"}&nbsp;&nbsp;</b>
          {content.dealType === "매매"
            ? content.unitPrice.toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })
            : content.monthlyRent.toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })}
          만원
        </TableCell>
        <TableCell>
          <b>
            {(content.buildingArea * 0.3025).toLocaleString(undefined, {
              maximumFractionDigits: 1,
            })}
            평&nbsp;&nbsp;
          </b>
          {content.buildingArea.toLocaleString(undefined, {
            maximumFractionDigits: 1,
          })}
          ㎡
        </TableCell>
      </StyledTableRow>
    </>
  );
};

export const StyledHead = styled(TableCell)(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: "#fff",
  borderRight: " 1px solid #eaeaea",
}));
