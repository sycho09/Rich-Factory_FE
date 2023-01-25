import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const Etc = () => {
  return (
    <Box mx={5}>
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          기타 매물
        </Typography>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
    </Box>
  );
};

export default Etc;
