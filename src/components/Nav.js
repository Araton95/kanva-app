/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Drawer } from "antd";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container } from "../styles";

const Icon = require("../assets/images/logo.png");

const Logo = styled.img`
  width: 150px;
  height: 63px;

  @media (max-width: 768px) {
    height: 40px;
    width: 100px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  width: 75%;

  @media (max-width: 920px) {
    justify-content: flex-end;
  }
`;

const MenuItem = styled.h3`
  font-family: Ubuntu;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  cursor: pointer;
  transition: color 300ms;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 25px;
  background-color: transparent;
  display: flex;
  height: 73px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 90;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;

  @media (max-width: 920px) {
    display: none;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  transition: all 0.2s;

  > span {
    height: 2px;
    margin-top: 8px;
    width: 33px;
    background: var(--white);
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MenusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;

  @media (max-width: 920px) {
    align-items: center;
  }
`;

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <HeaderContainer>
        <Container>
          <MenusContainer>
            <Link to="/">
              <Logo src={Icon} />
            </Link>

            <MenuItems>
              <Items>
                <Link to="/">
                  <MenuItem>KANVA</MenuItem>
                </Link>
                <Link to="/soon">
                  <MenuItem>Farming Platform</MenuItem>
                </Link>
                <Link to="/soon">
                  <MenuItem>Nft Platform</MenuItem>
                </Link>

                <Link to="/soon">
                  <MenuItem>Governance</MenuItem>
                </Link>
              </Items>
              <BurgerIcon onClick={() => setVisible(!visible)}>
                <span></span>
                <span></span>
                <span></span>
              </BurgerIcon>
            </MenuItems>
          </MenusContainer>
        </Container>
        <Drawer
          placement="right"
          closable={false}
          onClose={() => setVisible(!visible)}
          visible={visible}
          key="right"
          bodyStyle={{
            backgroundColor: "#0e1c35",
          }}
        >
          <Link to="/">
            <MenuItem>KANVA</MenuItem>
          </Link>
          <Link to="/soon">
            <MenuItem>Farming Platform</MenuItem>
          </Link>
          <Link to="/soon">
            <MenuItem>Nft Platform</MenuItem>
          </Link>

          <Link to="/soon">
            <MenuItem>Governance </MenuItem>
          </Link>
        </Drawer>
      </HeaderContainer>
    </>
  );
};

export default Header;
