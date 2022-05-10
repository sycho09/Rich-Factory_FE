import React, { useRef } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import ReactToPrint from "react-to-print";
import WriteContent from "./WriteContent";

const Write = () => {
  const componentRef = useRef();
  return (
    <Box mx={5}>
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          매물 등록하기
        </Typography>
        {/* <ReactToPrint
          trigger={() => (
            <Button
              size="small"
              variant="contained"
              sx={{ px: 2, borderRaius: "50px" }}
            >
              프린트하기
            </Button>
          )}
          // pageStyle="@page { size: auto; margin: 5mm; }"

          content={() => componentRef.current}
        /> */}
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <WriteContent printRef={componentRef} />
    </Box>
  );
};

export default Write;
