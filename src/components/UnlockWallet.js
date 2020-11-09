import React from "react";
import styled from "styled-components";

import { Container } from "../styles";
import CryptoIcon from "../assets/images/crypto-ico.png";
import WalletIcon from "../assets/images/wallet-ico.png";

const UnlockWalletContainer = styled.div`
  height: 44px;
  position: absolute;
  width: 100%;
  z-index: 9;
  background-color: #001e51;
  box-shadow: 0 5px 9px 0 rgba(0, 14, 41, 0.2);
`;

const Item = styled.p`
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: ${(props) => (props.mL ? 10 : 30)}px;

  @media (max-width: 800px) {
    margin-right: 10px;
    font-size: 14px;

    :last-child {
      margin-right: 0;
    }
  }
`;

const Image = styled.img`
  height: 16px;
  width: 20px;
  margin-top: -5px;
`;

const WalletButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  opacity: 1;
  transition: all 0.5s;

  &.hide {
    opacity: 0;
    display: none;
  }
`;

const WalletContent = styled.div`
  display: none;
  align-items: center;

  transform: translateY(-100%);
  transition: all 0.5s;

  &.visible {
    display: flex;
    transform: translate(0px, 0px);
  }
`;

const WalletButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const UnlockWallet = () => {
  const [walletContent, setWallet] = React.useState(false);
  return (
    <UnlockWalletContainer>
      <Container>
        <WalletButtonContainer>
          <WalletContent className={walletContent ? "visible" : ""}>
            <Item>My Collection</Item>
            <Item>0.000 KNV</Item>
            <Item>0.000 PLTE</Item>
            <Item>0xcdD2...616C</Item>
            <Image src={CryptoIcon} alt="CryptoIcon" />
          </WalletContent>

          <WalletButton
            onClick={() => setWallet(true)}
            className={walletContent ? "hide" : ""}
          >
            <Item mL>Unlock Wallet</Item>
            <Image src={WalletIcon} alt="WalletIcon" />
          </WalletButton>
        </WalletButtonContainer>
      </Container>
    </UnlockWalletContainer>
  );
};

export default UnlockWallet;
