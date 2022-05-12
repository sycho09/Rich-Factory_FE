import React, { useRef, useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PropertyList } from "../util/atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Land = () => {
  return (
    <Box mx={5}>
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          토지 매매 및 임대
        </Typography>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <LandList />
    </Box>
  );
};

export default Land;

const LandList = () => {
  const propertyList = useRecoilValue(PropertyList);
  const [isLoading, setIsLoading] = useState(true);
  const [landList, setLandList] = useState();

  useEffect(() => {
    const landList = propertyList.filter((el) => el.type === "토지");
    setLandList(landList);
    setIsLoading(false);
  }, []);

  console.log(landList);
  return (
    <>
      {!isLoading && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>소재지</TableCell>
                <TableCell>매물구분</TableCell>
                <TableCell>용도지역</TableCell>
                <TableCell>면적</TableCell>
                <TableCell>가격</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {landList.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item._id}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.dealType}</TableCell>
                  <TableCell>
                    {item.useArea}㎡ {item.landArea * 0.3025} 평
                  </TableCell>
                  <TableCell>{item.landArea}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
