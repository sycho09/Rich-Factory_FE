import React from "react";
import { Container, Divider, Grid, Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Divider sx={{ boxShadow: "1px 1px 5px 0 rgba(0,0,0,0.1)" }} />
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "5rem",
        }}
      >
        <LayoutContainer maxWidth="lg" pb={10}>
          <Outlet />
        </LayoutContainer>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

const LayoutContainer = styled(Container)(({ theme }) => ({
  paddingTop: 5,
  //   [theme.breakpoints.down("md")]: {
  paddingRight: 0,
  paddingLeft: 0,
  "& .MuiContainer-root": {
    padding: 0,
  },
  //   },
}));
