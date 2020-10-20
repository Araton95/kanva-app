import React from "react";
import styled from "styled-components";
import SVG from "./svg";
import { Link } from "gatsby";

const farmingIcon = require("../../images/farming-platform/farming_icon.svg");

const Container = styled.div`
  width: 100%;
  background-color: #e6edf1;
`;

const ContentContainer = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1170px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 800px) {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  margin-top: -30px;
  margin-right: -20px;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 50px;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #010f30;
  font-family: "Ubuntu";
  margin-bottom: 55px;
  text-align: justify;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 35px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  color: #010f30;
  font-family: "Bunken Tech Sans Pro";
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const SmallHeading = styled.h4`
  font-size: 25px;
  font-family: "Bunken Tech Sans Pro";
  color: #010f30;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const FarmingBtn = styled.div`
  font-size: 18px;
  background-color: rgb(231, 237, 242);
  box-shadow: -4.243px -4.243px 6px 0px rgba(255, 255, 255, 0.5),
    4.243px 4.243px 6px 0px rgba(171, 194, 212, 0.6);
  color: #29aae0;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  border-width: 2px;
  border-color: rgb(231, 237, 242);
  border-style: solid;
  border-radius: 15px;
  width: 238px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;

  &:hover {
    transform: translateY(-3px);
    background-color: rgb(231, 237, 242);
  }

  img {
    padding-left: 14px;
    width: 50px;
  }
`;

const KNVSection = () => (
  <Container>
    <VerticalCenter>
      <ContentContainer>
        <TextContainer>
          <Title>KNV FARMING</Title>
          <Text>
            Supporters of KANVA can farm their NFT in the KNV/ETH pool alongside
            with 70% allocation of KNV Ecosystem Fund (2,595 KNV) while farming
            at KANVA one can earn a point which is called palette, points that
            be used in buying NFT in the collection page.
          </Text>
          <SmallHeading>What is Palette (PLTE)?</SmallHeading>
          <Text>
            Palette is an exclusive KANVA earned points that gives incentive
            while farming at KANVA. The accumulated palette attained can be used
            to buy and to have NFT cards in the KANVA collections.
          </Text>
          <Link to="/nftPlatform">
            <FarmingBtn>
              Start Farming
              <img
                src={farmingIcon}
                alt="farming-icon.png"
                style={{ paddingLeft: "10px" }}
              />
            </FarmingBtn>
          </Link>
        </TextContainer>
        <ImageContainer>
          <SVG />
        </ImageContainer>
      </ContentContainer>
    </VerticalCenter>
  </Container>
);

export default KNVSection;
