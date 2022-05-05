import React, { useRef } from "react";
import { Button, Divider, Stack } from "@mui/material";
import ReactToPrint from "react-to-print";
import WriteContent from "./WriteContent";

const Write = () => {
  const componentRef = useRef();
  return (
    <React.Fragment>
      <Stack mx={5} alignItems="flex-end">
        <ReactToPrint
          trigger={() => (
            <Button
              size="small"
              variant="contained"
              sx={{ px: 2, borderRaius: "50px" }}
            >
              프린트하기
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Stack>
      <Divider sx={{ margin: "0.5rem 2rem 0" }} />
      <WriteContent printRef={componentRef} />
    </React.Fragment>
  );
};

export default Write;
