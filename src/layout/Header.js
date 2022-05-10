import { Grid, styled, Toolbar, Container, Typography } from "@mui/material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import React from "react";
import Navigation from "./Navigation";
import { BackgroundHeader } from "./HomeLayout/Banner";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { isHome } = props;
  const navigate = useNavigate();
  return (
    <>
      {isHome && (
        <BackgroundHeader>
          <StyledContainer sx={{ minWith: "600px" }} maxWidth="lg">
            <Toolbar sx={{ height: 200 }}>
              <Grid
                container
                direction="column"
                sx={{
                  alignItems: "stretch",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Grid item>
                  <HomeLogoTitle onClick={() => navigate("/home")}>
                    무송부동산
                  </HomeLogoTitle>
                  <Typography
                    pl={1}
                    sx={{
                      width: "80%",
                      fontSize: 22,
                      fontWeight: 700,
                      paddingLeft: 2,
                      borderRadius: "50px 0 0 50px",
                      fontStyle: "italic",
                      fontFamily: "Gowun Batang, serif",
                      background: "rgb(255,255,255)",
                      background:
                        "linear-gradient(121deg, rgba(255,255,255,0.9) 18%, rgba(255,255,255,0) 100%)",
                      color: "black",
                    }}
                  >
                    010-9020-0202
                  </Typography>
                </Grid>
                <Grid item>
                  <Navigation
                    isHome={true}
                    // style={{ border: "1px solid white" }}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </StyledContainer>
        </BackgroundHeader>
      )}
      {!isHome && (
        <BackgroundHeader>
          <StyledContainer sx={{ minWith: "600px" }} maxWidth="lg">
            <Toolbar>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={12} md={4} sx={{ height: "100%" }}>
                  <LogoTitle onClick={() => navigate("/home")}>
                    무송부동산
                  </LogoTitle>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Navigation />
                </Grid>
              </Grid>
            </Toolbar>
          </StyledContainer>
        </BackgroundHeader>
      )}
    </>
  );
};

export default Header;

const HomeLogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontFamily: "Gowun Batang, serif",
  fontWeight: 400,
  cursor: "pointer",
  padding: "12px 10px 3px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.2rem",
    padding: "10px 0",
  },
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.2rem",
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
