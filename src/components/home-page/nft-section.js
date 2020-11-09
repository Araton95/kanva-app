import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { Button, Container, slideDown } from "../../styles";
const nftHeading = require("../../assets/images/nftHeading.png");
const ntfImage = require("../../assets/images/nft.png");

const BackgroundImageContainer = styled.div`
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
  font-size: 18px;
  color: rgb(0, 16, 48);
  font-family: Ubuntu;
  line-height: 1.2;
  text-align: justify;
  margin-bottom: 55px;
  transition: height 300ms;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  &.hidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    display: none;
  }

  &.visible {
    will-change: height;
    animation: ${slideDown} 0.32s cubic-bezier(0.65, 0.05, 0.36, 1) 0s 1 normal
      forwards;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const TextImage = styled.img`
  object-fit: scale-down;
  position: absolute;
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
  margin-bottom: 0px;

  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const ReadMoreButton = styled(Button)`
  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const NftSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BackgroundImageContainer>
      <Container>
        <VerticalCenter>
          <Row justify="space-between">
            <Col xs={24} md={11}>
              <TitleContainer>
                <TextImage src={nftHeading} />
                <Title>What is NFT?</Title>
              </TitleContainer>
              <Text>
                NFT stands for Non-Fungible Tokens, a new digital asset or item
                based on blockchain that is gaining tractions today.
                ‘Fungibility’ is the characteristics of an item where each unit
                is indistinguishable and interchangeable with each other as they
                are assumed to have the same value. On the other hand, NFT is
                treated as collectible and has an individual quality making it
                unique, rare, and indivisible.
              </Text>
              <Text className={expanded ? "visible" : "hidden"}>
                Each NFT’s are unique and start as tokens, there is usually a
                limited number of NFT’s making it a scarce resource. The number
                of this NFT can be verified in the blockchain hence making it
                fraud-proof, it is also indivisible as one cannot sell and trade
                only a fraction of an NFT. Furthermore, NFT’s guarantee
                authentic ownership making it easy transferable. NFT’s are
                already used in many ways such as arts, collectibles, gaming,
                virtual-assets, and real-world assets; KANVA sees this potential
                a chance to make gains in cultivating this limited and scarce
                NFT’s in its platform thru DeFi.
              </Text>
              <ReadMoreButton secondary onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show Less" : "Read More"}
              </ReadMoreButton>
            </Col>
            <Col xs={24} md={11}>
              <Image src={ntfImage} alt="ntf image" />
            </Col>
          </Row>
        </VerticalCenter>
      </Container>
    </BackgroundImageContainer>
  );
};

export default NftSection;
