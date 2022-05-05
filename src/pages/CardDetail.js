import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import CardDetailContent from "./CardDetailContent";

const CardDetail = () => {
  const componentRef = useRef();
  return (
    <React.Fragment>
      <Stack direction="row" mt={4} mb={1} justifyContent="space-between">
        <Typography variant="h5">
          <Chip
            label="0"
            size="small"
            color="primary"
            sx={{ fontSize: "16px", margin: "5px 10px 7px", padding: 0.2 }}
          />
          매물 상세보기
        </Typography>
        <ReactToPrint
          trigger={() => (
            <Button size="small" variant="contained" sx={{ px: 2 }}>
              프린트하기
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Stack>
      <CardDetailContent printRef={componentRef} />
    </React.Fragment>
  );
};

export default CardDetail;
