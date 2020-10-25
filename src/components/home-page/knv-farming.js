import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Link } from "gatsby";

import SVG from "../../svgs/knv-farming";
import { Button, Container } from "../../styles";
const backgroundImage = require("../../assets/images/knv-background.png");
const farmingIcon = require("../../assets/images/farming-btn-icon.png");

const data = {
  unit1: "KVN",
  unit2: "ETH",
  percentage1: "70",
  percentage2: "70",
  value: "4,536",
};

const BackgroundImageContainer = styled.div`
  width: 100%;
  background-color: #001030;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 150px;

  @media (max-width: 600px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
const Text = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: Ubuntu;
  margin-bottom: 55px;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  color: #fff;
  font-family: BunkenTechBold;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 27px;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
const SmallHeading = styled.h4`
  font-size: 25px;
  font-family: BunkenTechBold;
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 27px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const KNVFarming = () => (
  <BackgroundImageContainer>
    <Container>
      <VerticalCenter>
        <Row justify="space-between">
          <Col xs={24} md={11}>
            <Title>KNV FARMING</Title>
            <Text>
              Supporters of KANVA can farm their NFT in the KNV/ETH pool
              alongside with 70% allocation of KNV Ecosystem Fund (2,595 KNV)
              while farming at KANVA one can earn a point which is called
              palette, points that be used in buying NFT in the collection page.
            </Text>
            <SmallHeading>What is Palette (PLTE)?</SmallHeading>
            <Text>
              Palette is an exclusive KANVA earned points that gives incentive
              while farming at KANVA. The accumulated palette attained can be
              used to buy and to have NFT cards in the KANVA collections.
            </Text>
            <Link to="/nftPlatform">
              <Button>
                Start Farming
                <img
                  src={farmingIcon}
                  alt="farming-icon.png"
                  style={{ paddingLeft: "10px" }}
                />
              </Button>
            </Link>
          </Col>
          <Col xs={24} md={11}>
            <SVG data={data} />
          </Col>
        </Row>
      </VerticalCenter>
    </Container>
  </BackgroundImageContainer>
);

export default KNVFarming;
