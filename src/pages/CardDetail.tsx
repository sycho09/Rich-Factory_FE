import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import axios from "axios";
import { Button, Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { AllInfo } from "@/util/atom";
import { factory_API } from "@/util/axios";
import CardDetailContent from "./CardDetailContent";

const CardDetail = () => {
  // 프린트
  const componentRef = useRef();
  // 매물 ID
  const { id } = useParams();

  // 매물 상세 정보
  const [isLoading, setLoading] = useState(true);
  const setAllInfo = useSetRecoilState(AllInfo);

  const getPropertyInfo = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `https://www.richfactory.click/property/${id}`,
      });
      setAllInfo(response.data);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getPropertyInfo();
  }, [setAllInfo]);

  const deleteProperty = async () => {
    const isDelete = window.confirm("정말 매물을 삭제하시겠습니까?");

    if (isDelete) {
      await factory_API
        .delete(`/property/${id}`)
        .then((res) => {
          alert("complete");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <>
      {!isLoading && (
        <React.Fragment>
          <Stack direction="row" mt={4} mb={1} justifyContent="space-between">
            <Typography variant="h5">
              <Chip
                label={id}
                size="small"
                color="primary"
                sx={{ fontSize: "16px", margin: "5px 10px 7px", padding: 0.2 }}
              />
              매물 상세보기
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <CardDetailButton type="outlined" event={() => alert("Edit")}>
                수정
              </CardDetailButton>
              <CardDetailButton type="outlined" event={deleteProperty}>
                삭제
              </CardDetailButton>
              <ReactToPrint
                trigger={() => (
                  <Button size="small" variant="contained" sx={{ px: 2 }}>
                    프린트하기
                  </Button>
                )}
                // pageStyle="@page { size: auto; margin: 5mm; }"
                content={() => componentRef.current!}
              />
            </Stack>
          </Stack>
          <CardDetailContent printRef={componentRef} />
        </React.Fragment>
      )}
    </>
  );
};

export default CardDetail;

interface CardDetailButtonProps {
  type?: "text" | "outlined" | "contained" | undefined;
  event: () => void;
  children?: string;
}

const CardDetailButton = ({ type, event, children }: CardDetailButtonProps) => {
  return (
    <Button size="small" variant={type} onClick={event || null}>
      {children}
    </Button>
  );
};
