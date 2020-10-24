import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import SVG from "../../svgs/token-knv";

const nftHeading = require("../../images/nftHeading.png");

const Container = styled.div`
  width: 100%;
  background-color: #e6edf1;
  display: flex;
  flex-direction: column;
`;
const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
  margin-bottom: 150px;

  @media (max-width: 600px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
const Text = styled.p`
  font-family: Ubuntu;
  font-size: 18px;
  color: rgb(0, 16, 48);
  line-height: 1.2;
  text-align: center;
  margin-bottom: 35px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  font-family: BunkenTechBold;
  color: rgb(0, 16, 48);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  margin-left: 55px;
  margin-top: 35px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    margin-top: 40px;
    margin-left: 49px;
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
`;
const TextImage = styled.img`
  object-fit: scale-down;
  position: absolute;
`;

const data = [
  {
    percentage: 40,
    title: "TOKEN SALE",
    titlePercentage: 40,
    titleFigure: "19,200",
  },
  {
    percentage: 13,
    title: "UNISWAP INITIAL LIQUIDITY",
    titlePercentage: 13,
    titleFigure: "6,240",
  },
  {
    percentage: 27,
    title: "ECOSYSTEM FUND",
    titlePercentage: 27,
    titleFigure: "12,960",
    extra: "• Liquidity Farming",
  },
  {
    percentage: 7,
    title: "FUTURE DEVELOPMENT",
    titlePercentage: 7,
    titleFigure: "3,360",
    extra: "• 3 months lock, and the remaining released for 1 year after",
  },
  {
    percentage: 3,
    title: "PARTNERSHIP",
    titlePercentage: 3,
    titleFigure: "1,440",
    extra: "• 3 months lock, and the remaining released for 1 year after",
  },
  {
    percentage: 10,
    title: "TEAM",
    titlePercentage: 10,
    titleFigure: "4800",
    extra: "• 3 months lock, and the remaining released for 1 year after",
  },
];

const TokenKnv = () => (
  <Container>
    <VerticalCenter>
      <Row justify="center">
        <Col xs={22} md={18}>
          <Row justify="center">
            <TitleContainer>
              <TextImage src={nftHeading} />
              <Title>TOKEN KNV</Title>
            </TitleContainer>
          </Row>
          <Row justify="center">
            <Col span={18}>
              <Text>
                KANVA issued its token coin, called KNV. This token is created
                and released with a 48,000 KNV limit that will never be
                increased. KNV will run natively on the Ethereum blockchain with
                ERC20. The KNV token as a unique token issued by KANVA makes the
                supporters interact with ease and convenience.
              </Text>
            </Col>
          </Row>
          <Col xs={24} md={22}>
            <SVG data={data} />
          </Col>
        </Col>
      </Row>
    </VerticalCenter>
  </Container>
);

export default TokenKnv;
