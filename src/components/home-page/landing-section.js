import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const background = require("../../images/landing-page.png");

const LandingSection = () => (
  <BackgroundImage>
    <VerticalCenter>
      <Row justify="center">
        <Col span={18}>
          <Text size={60}>THE BRIDGE</Text>
          <Text>TO DEFI AND ARTS</Text>
          <DetailText size={25}>
            KANVA, bringing value to art through Decentralized Finance
          </DetailText>
        </Col>
      </Row>
    </VerticalCenter>
  </BackgroundImage>
);

export default LandingSection;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1100px;
  background-color: #001030;
  background-image: url(${background});
  background-size: cover;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 600px) {
    min-height: 100%;
  }
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 350px;
  padding-bottom: 150px;

  @media (max-width: 600px) {
    padding-top: 200px;
    padding-bottom: 100px;
    height: 80%;
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.size || 39}px;
  font-family: BunkenTechBold;
  color: var(--white);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 2px;
`;

const DetailText = styled.h2`
  font-family: Ubuntu;
  font-size: 25px;
  font-weight: bold;
  max-width: 400px;
  margin-top: 15px;
  color: var(--white);
  line-height: 1.2;
  text-align: left;
`;
