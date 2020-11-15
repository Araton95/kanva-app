import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import styled from "styled-components";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { Link } from "gatsby"
import { fromWei } from "web3-utils"

import { Container } from "../styles";
import WalletIcon from "../assets/images/wallet-ico.png";
import Web3Client from '../services/Web3Client'
import { getPaletteBalance, getKanvaBalance } from '../services/ContractService'
import { shortenAddress, formatNumber, fromWeiToKanva } from '../utils'

const UnlockWallet = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [isConnected, setConnected] = useState(false)
  const [address, setAddress] = useState(null)
  const [knvBalance, setKnvBalance] = useState(0)
  const [plteBalance, setPlteBalance] = useState(0)

  useEffect(() => {
    connectWallet()
  }, [])

  const connectWallet = async () => {
    setShowLoader(true)
    const web3Client = new Web3Client()

    try {
      // Enable ETH process ...
      await web3Client.connectEth()

      // Fetch user address
      const userWallet = await web3Client.getWallet()

      // Update user wallet and balances
      await updateUserData(userWallet)

      setConnected(true)
      startAccountSwitchDetector()
    } catch (error) {
      console.log('error', error)
    }
  }

  const updateUserData = async (userWallet) => {
    try {
      // Fetch kanva and palette balances from contracts
      const knv = await getKanvaBalance(userWallet)
      const plte = await getPaletteBalance(userWallet)

      setAddress(userWallet)
      setKnvBalance(formatNumber(fromWeiToKanva(knv)))
      setPlteBalance(formatNumber(fromWei(plte)))
    } catch (error) {
      throw error
    } finally {
      // Hide loader after all actions
      setShowLoader(false)
    }
  }

  const startAccountSwitchDetector = () => {
    window.ethereum.on('accountsChanged', async (accounts) => {
      setShowLoader(true)
      await updateUserData(accounts[0])
    })
  }

  return (
    <UnlockWalletContainer>
      <Container>
        <WalletButtonContainer>
          { showLoader ? <Spin /> :
            <>
              {isConnected &&
                <WalletContent>
                  <Item><Link to="/comingSoon">My Collection</Link></Item>
                  <Item>{ knvBalance } KNV</Item>
                  <Item>{ plteBalance } PLTE</Item>
                  <Item>{ shortenAddress(address) }</Item>
                  <Jazzicon diameter={18} seed={jsNumberForAddress(address)} />
                </WalletContent>
              }

              <WalletButton
                onClick={() => connectWallet()}
                className={isConnected ? "hide" : ""}
              >
                <ConnectWallet>Unlock Wallet</ConnectWallet>
                <Image src={WalletIcon} alt="WalletIcon" />
              </WalletButton>
            </>
          }
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
    white-space: nowrap;

    &:last-of-type {
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

  @media (max-width: 800px) {
    .paper {
      display: none !important;
    }
  }
`;

const WalletButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;


export default UnlockWallet;
