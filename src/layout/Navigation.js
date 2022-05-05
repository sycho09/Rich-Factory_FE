import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding-left: 30px;
`;

const MenuItem = styled.strong`
  color: #000;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 15px;
  cursor: pointer;
`;
const MenuItemsWrapper = styled.div`
  padding: 10px 14px;
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

const YoutubeNavigationLink = styled.a.attrs({
  href: "https://www.youtube.com/channel/UCpo7WnDj2ph8qsSXkxKK9Sg/featured",
  target: "_blank",
})`
  align-items: center;
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 20px;
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
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
`;

const Navigation = () => {
  return (
    <Navbar>
      <NavbarWrapper>
        <MainNavigationLink>
          <MenuTitle>공장/창고</MenuTitle>
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
          <MenuTitle>토지</MenuTitle>
        </MainNavigationLink>
      </NavbarWrapper>

      <NavbarWrapper>
        <MainNavigationLink>
          <MenuTitle>분양</MenuTitle>
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
          <MenuTitle>기타</MenuTitle>
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
          <MenuTitle>
            <i className="fa fa-youtube-play" style={{ color: "red" }}></i>
            토지헬퍼
          </MenuTitle>
        </YoutubeNavigationLink>
      </NavbarWrapper>

      <NavbarWrapper>
        <MainNavigationLink>
          <MenuTitle>FAQ</MenuTitle>
        </MainNavigationLink>
      </NavbarWrapper>
    </Navbar>
  );
};

export default Navigation;
