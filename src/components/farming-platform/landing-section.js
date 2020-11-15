import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import { fromWei } from 'web3-utils'

import Modal from "../common/modal"
import Web3Client from '../../services/Web3Client'
import { formatNumber, fromWeiToKanva } from '../../utils'
import { getKanvaBalance, getKanvaSupply, getPoolSupply } from "../../services/ContractService"
import { Pools } from '../../constants'

const knvIcon = require("../../assets/images/farming-platform/KANVA.png")
const totalIcon = require("../../assets/images/farming-platform/TOTAL.png")
const background = require("../../assets/images/farming-platform/bg.png")
const KNV_ETH_BG = require("../../assets/images/farming-platform/KNV_ETH_BG.png")
const KNV_ETH_ICON = require("../../assets/images/farming-platform/KNV_ETH_ICON.png")
const DAI_ETH_BG = require("../../assets/images/farming-platform/DAI_ETH_BG.png")
const DAI_ETH_ICON = require("../../assets/images/farming-platform/DAI_ETH_ICON.png")
const USDT_ETH_BG = require("../../assets/images/farming-platform/USDT_ETH_BG.png")
const USDT_ETH_ICON = require("../../assets/images/farming-platform/USDT_ETH_ICON.png")
const USDC_ETH_BG = require("../../assets/images/farming-platform/USDC_ETH_BG.png")
const USDC_ETH_ICON = require("../../assets/images/farming-platform/USDC_ETH_ICON.png")

const LandingSection = () => {

  const [showModal, setModal] = useState(false)
  const [address, setAddress] = useState(null)
  const [knvBalance, setKnvBalance] = useState(0)
  const [knvSupply, setKnvSupply] = useState(0)
  const [knvEthDeposit, setKnvEthDeposit] = useState(0)
  const [daiEthDeposit, setDaiEthDeposit] = useState(0)
  const [usdcEthDeposit, setUsdcEthDeposit] = useState(0)
  const [usdtEthDeposit, setUsdtEthDeposit] = useState(0)
  const [selectedPool, setSelectedPool] = useState(null)

  useEffect(() => {
    const web3Client = new Web3Client()
    web3Client.getWallet().then(async wallet => {
      if (wallet) {
        const knv = await getKanvaBalance(wallet)
        setKnvBalance(formatNumber(fromWeiToKanva(knv)))
        setAddress(wallet)
      }

      const totalSupply = await getKanvaSupply()
      setKnvSupply(formatNumber(fromWeiToKanva(totalSupply)))

      await updateDepositsAmounts()
    }).catch(error => console.error(error))
  }, [])

  useEffect(() => {
    if (address) {
      getKanvaBalance(address).then(knv => {
        setKnvBalance(formatNumber(fromWeiToKanva(knv)))
      })
    }
  }, [address])

  const updateDepositsAmounts = async () => {
    try {
      let poolDeposited = await getPoolSupply(Pools['KNV/ETH'])
      setKnvEthDeposit(fromWei(poolDeposited))

      poolDeposited = await getPoolSupply(Pools['DAI/ETH'])
      setDaiEthDeposit(fromWei(poolDeposited))

      poolDeposited = await getPoolSupply(Pools['USDT/ETH'])
      setUsdtEthDeposit(fromWei(poolDeposited))

      poolDeposited = await getPoolSupply(Pools['USDC/ETH'])
      setUsdcEthDeposit(fromWei(poolDeposited), 12)
    } catch (error) {
      console.log(error)
    }
  }

  const openModal = async (pool) => {
    try {
      if (!address) {
        const web3Client = new Web3Client()
        // Enable ETH process ...
        await web3Client.connectEth()

        // Get and update props wallet
        const wallet = await web3Client.getWallet()
        setAddress(wallet)
      }

      setSelectedPool(pool)
      setModal(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <VerticalCenter>
        <Row justify="center">
          <Col>
            <BoldText>Kanva farming platform</BoldText>
            <Description>
              KANVA is going to open 4 pools for Yield farming (Ecosystem Fund =
              12,960 KNV) in the first year, 6,480 KNV will be allocated on the
              1st year for Yield farming. It is going to be reduced to 50% every
              year. This KNV is not subject to vesting or lock up. From this KANVA
              allocated 70% or 4,536 KNV to KNV/ETH pool with 87.2307 KNV pool per
              week. The remaining thirty percent or 1944 KNV will be equally
              divided into three poll USDC/ETH, USDT/ETH, and DAI/ETH with each
              has 10% or 648 allocations with of 12.4615 KNV pool per week.
            </Description>
          </Col>
        </Row>
        <CardContainer>
          <BalanceCardContainer>
            <BalanceCard>
              <CardTitle>
                <p>Your KANVA Balance</p>
              </CardTitle>
              <TopSection>
                <img className="icon" src={knvIcon} alt="Kanva balance icon"></img>
                <p>{ knvBalance } KNV</p>
              </TopSection>
              {/* <BottomSection>
                <p>Pending harvest</p>
                <p>0 KNV</p>
              </BottomSection> */}
            </BalanceCard>

            <BalanceCard>
              <CardTitle>
                <p>Total KANVA Supply</p>
              </CardTitle>
              <TopSection>
                <img className="icon" src={totalIcon} alt="Kanva total supply icon"></img>
                <p>{ knvSupply } KNV</p>
              </TopSection>
              <BottomSection>
                <p>Total rewards per week</p>
                <p>124.6152 KNV</p>
              </BottomSection>
            </BalanceCard>
          </BalanceCardContainer>

          <PoolsHeader>
            <BoldText>Participating pools</BoldText>
          </PoolsHeader>

          <DepositCard img={KNV_ETH_BG} alt="KNV/ETH Pool icon">
            <DepositCardTitle>
              <img src={KNV_ETH_ICON} alt="KNV_ETH_ICON" />
              <p>KNV / ETH</p>
            </DepositCardTitle>

            <DepositContent>
              <div className="text-container">
                <div className="text-content">
                  <div className="text">Total deposit</div>
                  <div className="text">{ knvEthDeposit } UNIV2-LP</div>
                </div>
                <div className="text-content">
                  <div className="text">Pool rate</div>
                  <div className="text">87.2307 KNV / week</div>
                </div>
                <div className="text-content">
                  <div className="text">PLTE farm rate</div>
                  <div className="text">1LP = 1PLTE (24hrs)</div>
                </div>
              </div>
              <button onClick={() => openModal(Pools['KNV/ETH'])}>Deposit</button>
            </DepositContent>
          </DepositCard>

          <DepositCard img={DAI_ETH_BG} alt="DAI/ETH Pool icon">
            <DepositCardTitle>
              <img src={DAI_ETH_ICON} alt="DAI_ETH_ICON" />
              <p>DAI / ETH</p>
            </DepositCardTitle>

            <DepositContent>
              <div className="text-container">
                <div className="text-content">
                    <div className="text">Total deposit</div>
                    <div className="text">{ daiEthDeposit } UNIV2-LP</div>
                  </div>
                  <div className="text-content">
                    <div className="text">Pool rate</div>
                    <div className="text">12.4615 KNV / week</div>
                  </div>
              </div>
              <button onClick={() => openModal(Pools['DAI/ETH'])}>Deposit</button>
            </DepositContent>
          </DepositCard>

          <DepositCard img={USDT_ETH_BG} alt="USDT/ETH Pool icon">
            <DepositCardTitle>
              <img src={USDT_ETH_ICON} alt="USDT_ETH_ICON" />
              <p>USDT / ETH</p>
            </DepositCardTitle>

            <DepositContent>
              <div className="text-container">
                <div className="text-content">
                    <div className="text">Total deposit</div>
                    <div className="text">{ usdtEthDeposit } UNIV2-LP</div>
                  </div>
                  <div className="text-content">
                    <div className="text">Pool rate</div>
                    <div className="text">12.4615 KNV / week</div>
                  </div>
              </div>
              <button onClick={() => openModal(Pools['USDT/ETH'])}>Deposit</button>
            </DepositContent>
          </DepositCard>

          <DepositCard img={USDC_ETH_BG} alt="USDC/ETH Pool icon">
            <DepositCardTitle>
              <img src={USDC_ETH_ICON} alt="USDT_ETH_ICON" />
              <p>USDC / ETH</p>
            </DepositCardTitle>

            <DepositContent>
              <div className="text-container">
                <div className="text-content">
                    <div className="text">Total deposit</div>
                    <div className="text">{ usdcEthDeposit } UNIV2-LP</div>
                  </div>
                  <div className="text-content">
                    <div className="text">Pool rate</div>
                    <div className="text">12.4615 KNV / week</div>
                  </div>
              </div>
              <button onClick={() => openModal(Pools['USDC/ETH'])}>Deposit</button>
            </DepositContent>
          </DepositCard>
        </CardContainer>
      </VerticalCenter>

      { showModal &&
        <Modal
          setModal={setModal}
          pool={selectedPool}
          userWallet={address}
          updateDepositsAmounts={updateDepositsAmounts}
        />
      }
    </Container>
  )
}

export default LandingSection

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1744px;
  background-color: #001030;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -130px;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1744px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* 1801px */
  @media (max-width: 1262px) {
    background-position-y: -84px;
  }

  @media (max-width: 974px) {
    background-position-y: -64px;
    background-position-x: -91px;
  }

  @media (max-width: 836px) {
    background-position-y: -62px;
    background-position-x: -154px;
  }

  @media (max-width: 741px) {
    background-position-y: -144px;
    background-position-x: -354px;
    min-height: 2208px;
  }

  @media (max-width: 600px) {
    min-height: 2129px;
  }

  @media (max-width: 420px) {
    min-height: 2307px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1067px;
  height: 100%;
  margin: 0 auto;
`;

const BalanceCardContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 20px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const BalanceCard = styled.div`
  background: linear-gradient(
    54deg,
    rgba(0, 82, 114, 0.8) 0%,
    rgba(0, 22, 64, 0.4) 84%
  );
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 6px 8px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  margin-bottom: 30px;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 22px;
    width: 25px;
    max-width: 100%;
  }

  p {
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: BunkenTechExtraBold;
    font-size: 36px;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 25px;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  border-top: 2px solid rgba(0, 191, 223, 0.2);

  p {
    color: #ffffff;
    font-family: Ubuntu;
    font-size: 14px;
    margin: 0;
  }
`;

const CardTitle = styled.div`
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 80%;
  margin: 0 auto;
  transform: translateY(-40px);
  position: relative;
  height: 40px;

  p {
    color: #00102f;
    font-family: Ubuntu;
    font-size: 18px;
    margin: 0;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    padding-top: 180px;
    padding-bottom: 100px;
  }
`;

const BoldText = styled.h1`
  font-family: BunkenTechExtraBold;
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Description = styled.h4`
  font-family: Ubuntu;
  font-size: 18px;
  max-width: 1170px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const PoolsHeader = styled.div`
  margin-top: 30px;
  margin-bottom: 72px;
`;

const DepositCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 28px;
  position: relative;
  width: 100%;
`;

const DepositCardTitle = styled.div`
  position: absolute;
  padding-left: 20px;
  height: 40px;
  width: 360px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  top: -40px;
  left: 40px;

  @media (max-width: 600px) {
    left: 10%;
    width: 80%;
  }

  img {
    width: 50px;
    height: 25px;
  }

  p {
    color: #010f30;
    font-family: BunkenTechExtraBold;
    font-size: 18px;
    font-weight: 800;
    margin: 0;
    margin-left: 20px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const DepositContent = styled.div`
  padding: 30px 50px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 15px 20px;
    flex-direction: column;
    justify-content: center;
  }

  button {
    background: rgba(129, 191, 223, 0.122);
    color: #ffffff;
    font-family: Ubuntu;
    border: 1px solid #81bfdf;
    font-size: 18px;
    font-weight: bold;
    border-radius: 15px;
    height: 46px;
    width: 180px;
    outline: none;
    cursor: pointer;
    box-shadow: 5px 7px 4px rgba(0, 0, 0, 0.55);
    transition: all 300ms;

    @media (max-width: 600px) {
      margin-top: 15px;
      height: 40px;
      font-size: 16px;
    }

    &:hover {
      transform: translateY(-3px);
    }
  }

  .text-container {
    flex-direction: column;
    flex: 1;
    padding-right: 40px;

    @media (max-width: 600px) {
      width: 100%;
      padding-right: 0;
    }

    .text-content {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid rgba(0, 191, 223, 0.2);
      align-items: center;
      width: 98%;

      @media (max-width: 600px) {
        width: 100%;
      }

      .text {
        color: #fefeff;
        font-family: Ubuntu;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 0;
        padding-bottom: 5px;
        text-align: center;

        @media (max-width: 600px) {
          font-size: 14px;
        }
      }
    }
  }
`;
