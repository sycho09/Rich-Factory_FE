import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import CardDetailContent from "./CardDetailContent";
import { useRecoilState } from "recoil";
import { AllInfo } from "../util/atom";
import axios from "axios";

const CardDetail = () => {
  // 프린트
  const componentRef = useRef();
  // 매물 ID
  const { id } = useParams();

  // 매물 상세 정보
  const [allInfo, setAllInfo] = useRecoilState(AllInfo);
  const [allInfoKeys, setInfoKeys] = useState([]);
  const [allInfoValues, setInfoValues] = useState([]);

  const getPropertyInfo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://15.164.232.13/property/${id}`,
      });
      setAllInfo(response.data);
      setInfoKeys(() => Object.keys(allInfo));
      setInfoValues(() => Object.values(allInfo));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getPropertyInfo();
  }, []);

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
          // pageStyle="@page { size: auto; margin: 5mm; }"
          content={() => componentRef.current}
        />
      </Stack>
      <CardDetailContent printRef={componentRef} />
    </React.Fragment>
  );
};

export default CardDetail;
