import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
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
  padding: 10px;
  width: 146px;
  border-top: 2px solid #1a73e8;
  border-bottom: 2px solid #1a73e8;
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
  padding: 0 10px;
  text-decoration: none;
  :hover {
    color: #1a73e8;
  }
`;

const MenuItem = styled.strong`
  color: #000;
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 10px;
  cursor: pointer;
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
  padding: 0 12px;
  text-decoration: none;
  :hover {
    color: #1a73e8;
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
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
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
  color: #fff;
  font-weight: ${(props) => (props.isHome ? 500 : 400)};
  font-size: ${(props) => (props.isHome ? "22px" : "20px")};
  line-height: 1;
  cursor: pointer;
`;

const RegisterItem = styled.span`
  font-size: 15px;
  font-weight: 600;
  padding: 0.2rem 0.4rem;
  color: #f00;
  border: 1px solid #f00;
  border-radius: 50px;
  line-height: 1;
  cursor: pointer;
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
            <MenuTitle isHome={isHome}>공장창고</MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper>
              <MenuItem onClick={() => alert("hi")}>공장/창고 임대</MenuItem>
              <MenuItem>공장/창고 매매</MenuItem>
            </MenuItemsWrapper>
          </DropDown>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome}>토지 </MenuTitle>
          </MainNavigationLink>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome}>분양 </MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper>
              <MenuItem>공장부지</MenuItem>
              <MenuItem>공장/창고</MenuItem>
              <MenuItem>주택부지</MenuItem>
            </MenuItemsWrapper>
          </DropDown>
        </NavbarWrapper>

        <NavbarWrapper>
          <MainNavigationLink>
            <MenuTitle isHome={isHome}>기타 </MenuTitle>
          </MainNavigationLink>
          <DropDown>
            <MenuItemsWrapper>
              <MenuItem>주택</MenuItem>
              <MenuItem>상가</MenuItem>
              <MenuItem>원룸</MenuItem>
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
