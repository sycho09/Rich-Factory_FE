import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";

const NavContainer = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: ${(props) => (props.isHome ? "space-between" : "flex-end")};
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding-left: ${(props) => (props.isHome ? 0 : "30px")};
`;

const MenuItemsWrapper = styled.div`
  padding: 10px 0;
  width: ${(props) => (props.size === "small" ? "90px" : "150px")};
  border-radius: 0 0 5px 5px;
  background-color: ${(props) => props.theme.palette.primary.dark};
`;

const MainNavigationLink = styled.a.attrs({
  href: "#",
  onClick: (evt) => {
    evt.preventDefault();
  },
})`
  align-items: center;
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 15px;
  text-decoration: none;
  :hover {
    color: #1a73e8;
  }
  @media (max-width: 969px) {
    padding: 0 8px;
  }
`;

const MenuItem = styled.strong`
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 300;
  padding: 5px 10px 5px 20px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.palette.primary.lightdark};
    border-left: 3px solid ${(props) => props.theme.palette.primary.lightdark};
  }
`;

const YoutubeNavigationLink = styled.a.attrs({
  href: "https://www.youtube.com/channel/UCpo7WnDj2ph8qsSXkxKK9Sg/featured",
  target: "_blank",
})`
  align-items: center;
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 14px;
  text-decoration: none;
  :hover {
    color: #1a73e8;
  }
  @media (max-width: 969px) {
    padding: 0 7px;
  }
`;

const RegisterNavigationLink = styled.a.attrs({
  href: "/main/write",
})`
  align-items: center;
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 5px;
  text-decoration: none;
  :hover {
    color: #1a73e8;
  }
`;

const DropDown = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 2;
`;

const NavbarWrapper = styled.div`
  height: 100%;
  position: relative;
  :hover ${DropDown} {
    display: block;
  }
`;
const MenuTitle = styled.span`
  color: ${(props) => props.theme.palette.primary.dark};
  font-weight: ${(props) => (props.isHome ? 600 : 400)};
  font-size: ${(props) => (props.isHome ? "22px" : "20px")};
  line-height: 1;
  cursor: pointer;
  @media (max-width: 780px) {
    font-size: 1rem;
  }
`;

const RegisterItem = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 0.4rem;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.dark};
  /* color: ${(props) => props.theme.palette.red.main}; */
  border-radius: 50px;
  line-height: 1;
  cursor: pointer;
  @media (max-width: 969px) {
    font-size: 14px;

    padding: 0.4rem 0.2rem;
  }
`;

const Navigation = (props) => {
  const { isHome } = props;

  const navigate = useNavigate();
  return (
    <NavContainer isHome={isHome}>
      {isHome && (
        <Navbar isHome>
          <NavbarWrapper>
            <MainNavigationLink>
              <MenuTitle onClick={() => navigate("/intro")} isHome={isHome}>
                회사소개
              </MenuTitle>
            </MainNavigationLink>
          </NavbarWrapper>
        </Navbar>
      )}

      <Navbar>
        {!isHome && (
          <NavbarWrapper>
            <MainNavigationLink>
              <MenuTitle isHome={isHome} onClick={() => navigate("/intro")}>
                회사소개
              </MenuTitle>
            </MainNavigationLink>
          </NavbarWrapper>
        )}

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome} onClick={() => navigate("/home")}>
              <AiFillHome />
            </MenuTitle>
          </MainNavigationLink>
        </NavbarWrapper>
        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle
              isHome={isHome}
              // onClick={() => navigate("/property/factorage-rent")}
            >
              공장창고
            </MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper>
              <MenuItem onClick={() => navigate("/property/factorage-rent")}>
                공장/창고 임대
              </MenuItem>
              <MenuItem onClick={() => navigate("/property/factorage-buy")}>
                공장/창고 매매
              </MenuItem>
            </MenuItemsWrapper>
          </DropDown>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle
              isHome={isHome}
              onClick={() => navigate("/property/land")}
            >
              토지
            </MenuTitle>
          </MainNavigationLink>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle
              isHome={isHome}
              // onClick={() => navigate("/property/divide")}
            >
              분양
            </MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper>
              <MenuItem
                onClick={() => navigate("/property/divide-factory-land")}
              >
                공장부지
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/property/divide-factory-storage")}
              >
                공장/창고
              </MenuItem>
              <MenuItem onClick={() => navigate("/property/divide-home-land")}>
                주택부지
              </MenuItem>
            </MenuItemsWrapper>
          </DropDown>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle
              isHome={isHome}
              // onClick={() => navigate("/property/etc")}
            >
              기타
            </MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper size="small">
              <MenuItem onClick={() => navigate("/property/etc-house")}>
                주택
              </MenuItem>
              <MenuItem onClick={() => navigate("/property/etc-commercial")}>
                상가
              </MenuItem>
              <MenuItem onClick={() => navigate("/property/etc-room")}>
                원룸
              </MenuItem>
            </MenuItemsWrapper>
          </DropDown>
        </NavbarWrapper>

        <NavbarWrapper>
          <YoutubeNavigationLink>
            <MenuTitle isHome={isHome}>
              {
                <>
                  <i
                    className="fa fa-youtube-play"
                    style={{ color: "red" }}
                  ></i>
                  토지헬퍼
                </>
              }
            </MenuTitle>
          </YoutubeNavigationLink>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome} onClick={() => navigate("/main/faq")}>
              게시판
            </MenuTitle>
          </MainNavigationLink>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome} onClick={() => navigate("/main/faq")}>
              FAQ
            </MenuTitle>
          </MainNavigationLink>
        </NavbarWrapper>

        <NavbarWrapper>
          <RegisterNavigationLink>
            <RegisterItem isHome={isHome}> 매물등록</RegisterItem>
          </RegisterNavigationLink>
        </NavbarWrapper>
      </Navbar>
    </NavContainer>
  );
};

export default Navigation;
