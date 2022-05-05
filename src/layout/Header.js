import { Grid, styled, Toolbar, Container, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <StyledContainer sx={{ minWith: "600px" }} maxWidth="lg">
      <Toolbar>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={4} sx={{ height: "100%" }}>
            <LogoTitle>무송부동산</LogoTitle>
          </Grid>
          <Grid item xs={12} md={8}>
            <Navigation />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledContainer>
  );
};

export default Header;

const LogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.2rem",
    backgroundColor: "#eaeaea",
    padding: "10px 0",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
    paddingLeft: 0,
    "& .MuiToolbar-root": {
      padding: 0,
    },
  },
}));
