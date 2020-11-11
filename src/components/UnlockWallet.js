import React, { useState } from "react";
import styled from "styled-components";
import { toChecksumAddress, fromWei } from 'web3-utils'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { Link } from "gatsby"

import { Container } from "../styles";
import WalletIcon from "../assets/images/wallet-ico.png";
import Web3Client from '../services/Web3Client'
import { shortenAddress, formatNumber } from '../utils'

const UnlockWallet = () => {
  const [walletContent, setWallet] = useState(false)
  const [address, setAddress] = useState(null)
  const [knvBalance, setKnvBalance] = useState(0)
  const [plteBalance, setPlteBalance] = useState(0)

  const connectWallet = async () => {
    const web3Client = new Web3Client()
    const { web3 } = web3Client

    try {
      await web3Client.connectEth()
      const accounts = await web3.eth.getAccounts()
      const address = accounts[0]
      setAddress(toChecksumAddress(address))
    } catch (error) {
      console.log('declined')
    }

    const getKnvBalance = '124875000000000000000'
    const getPlteBalance = '224875000000000000000'

    setKnvBalance(getKnvBalance)
    setPlteBalance(getPlteBalance)
    setWallet(true)
  }

  return (
    <UnlockWalletContainer>
      <Container>
        <WalletButtonContainer>
          {walletContent &&
            <WalletContent>
              <Item><Link to="/comingSoon">My Collection</Link></Item>
              <Item>{ formatNumber(fromWei(knvBalance)) } KNV</Item>
              <Item>{ formatNumber(fromWei(plteBalance)) } PLTE</Item>
              <Item>{ shortenAddress(address) }</Item>
              <Jazzicon diameter={18} seed={jsNumberForAddress(address)} />
            </WalletContent>
          }

          <WalletButton
            onClick={() => connectWallet()}
            className={walletContent ? "hide" : ""}
          >
            <ConnectWallet>Unlock Wallet</ConnectWallet>
            <Image src={WalletIcon} alt="WalletIcon" />
          </WalletButton>
        </WalletButtonContainer>
      </Container>
    </UnlockWalletContainer>
  );
};

const UnlockWalletContainer = styled.div`
  height: 44px;
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: #001e51;
  box-shadow: 0 5px 9px 0 rgba(0, 14, 41, 0.2);
`;

const Item = styled.p`
  color: rgba(255,255,255,0.9);
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: bold;
  cursor: default;
  margin-right: 20px;
  margin-bottom: 0;

  @media (max-width: 800px) {
    margin-right: 10px;
    font-size: 14px;

    :last-child {
      margin-right: 0;
    }
  }
`;

const ConnectWallet = styled(Item)`
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #ffffff;
  }
`

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
  display: flex;
  align-items: center;
`;

const WalletButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;


export default UnlockWallet;
