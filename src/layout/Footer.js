import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        sx={{ fontSize: 16, fontWeight: 600, marginBottom: { xs: 0.5, sm: 0 } }}
      >
        copyright©무송부동산&nbsp;2022
      </Typography>
      <Typography sx={{ fontSize: 12, color: "#000" }}>
        대표자: 대표 | 사업자등록번호: 000-000-00-00 | 등록번호:
        제023402903-012012 | 전화: 020-2292-20239
      </Typography>
    </FooterContainer>
  );
};

export default Footer;

export const FooterContainer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #eaeaea;
  color: ${(props) => props.theme.palette.primary.dark};
  word-break: keep-all;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
