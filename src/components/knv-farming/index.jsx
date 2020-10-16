import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import SVG from './svg'
import { Link } from "gatsby"

const backgroundImage = require('../../images/knv-background.png')
const farmingIcon = require('../../images/farming-btn-icon.png')

const Container = styled.div`
  width:100%;
  background-color:#001030;
  background-image:url(${backgroundImage});
  background-size:cover;
`
const VerticalCenter = styled.div`
  width:100%;
  height:100%;
  padding-top:150px;
  padding-bottom:150px;

  @media (max-width: 600px) {
  padding-top:100px;
  padding-bottom:100px;
  }

`
const Text = styled.p`
  font-size: 18px;
  color: #fff;
  font-family:'Ubuntu';
  margin-bottom:55px;
  text-align: justify;

  @media (max-width: 600px) {
  font-size: 16px;
  }
`

const Title = styled.h1`
  font-size: 55px;
  color: #fff;
  font-family: "Bunken Tech Sans Pro";
  font-weight:bold;
  text-transform: uppercase;
  text-align: left;
  margin-bottom:27px;

  @media (max-width: 600px) {
  font-size: 40px;
  }
`
const SmallHeading = styled.h4`
  font-size: 25px;
  font-family: "Bunken Tech Sans Pro";
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  margin-bottom:27px;
  @media (max-width: 600px) {
  font-size: 20px;
  }
`
const FarmingBtn = styled.div`
  font-size: 18px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-align: center;
  margin-bottom:15px;
  border-width: 2px;
  border-color: #001a4e;
  border-style: solid;
  border-radius: 15px;
  background-color: rgb(0, 23, 68);
  box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  width: 238px;
  height: 60px;
  display:flex;
  justify-content:center;
  align-items:center;
  transition: all 300ms;

  &:hover {
    transform: translateY(-3px);
    background-color: #001d55;
  }
`

const KNVFarming = () => (
  <Container>
    <VerticalCenter>
      <Row justify="center">
        <Col xs={22} md={18}>
          <Row justify="space-between">
            <Col xs={24} md={11}>
              <Title>KNV FARMING</Title>
              <Text>
                Supporters of KANVA can farm their NFT in the
                KNV/ETH pool alongside with 70% allocation of KNV
                Ecosystem Fund (2,595 KNV) while farming at KANVA
                one can earn a point which is called palette, points that
                be used in buying NFT in the collection page.
              </Text>
              <SmallHeading>
                What is Palette (PLTE)?
              </SmallHeading>
              <Text>
                Palette is an exclusive KANVA earned points that gives
                incentive while farming at KANVA. The accumulated
                palette attained can be used to buy and to have NFT
                cards in the KANVA collections.
              </Text>
              <Link to="/nftPlatform">
                <FarmingBtn>
                  Start Farming
                  <img src={farmingIcon} alt="farming-icon.png" style={{ paddingLeft: '10px' }} />
                </FarmingBtn>
              </Link>
            </Col>
            <Col xs={24} md={11}>
              <SVG />
            </Col>

          </Row>

        </Col>
      </Row>
    </VerticalCenter>

  </Container>
)

export default KNVFarming
