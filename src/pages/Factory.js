import React, { useRef } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Factory = () => {
  return (
    <Box mx={5}>
      <Stack
        direction="row"
        mt={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          공장/창고 매매 및 임대
        </Typography>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        공장/창고 매매 및 임대 페이지입니다. 매매와 임대를 각각 확인하기
        위해서는 상단 네이비게이션 공장창고에서 하위 메뉴를 선택해주세요
      </Typography>
    </Box>
  );
};

export default Factory;
