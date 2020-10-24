import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import RoadMapSvg from "../../svgs/roadmap";

const backgroundImage = require("../../images/knv-background.png");

const data = [
  {
    number: 2,
    title: "QUARTER 2020",
    data: [
      "Conceptualization of the idea of Kanva",
      "Conducting of various research and validation of ideas on various models about defi, staking model, and governance",
    ],
  },
  {
    number: 3,
    title: "QUARTER 2020",
    data: [
      "Brainstorming of Kanva-specific ideas by the core team",
      "Formation of the team, onboarding developers, marketers, and chief of operations",
      "Conducting of community survey",
      "Smart contract development, web and dapp development, and releasing of the token distribution model",
    ],
  },
  {
    number: 4,
    title: "QUARTER 2020",
    data: [
      "Beta testing of the Kanva solidity smart contract on the ropsten test network, conducting of complete dapps unit tests",
      "Execution of marketing plan, partnerships with established projects",
      "Launching of the official Kanva website",
      "Presale, uniswap listing & locking of liquidity, centralize exchange listing",
      "Launching of the knv token, nft, and token farming",
    ],
  },
  {
    number: 1,
    title: "QUARTER 2021",
    data: [
      "Launching of the Kanva governance platform",
      "Partnership announcements",
      "Interoperability integration, future development",
    ],
  },
];

const Wrapper = styled.div`
  width: 100%;
  background-color: #001030;
  background-image: url(${backgroundImage});
  background-size: cover;

  ul > li {
    font-size: 16px;
    color: #fff;
  }
`;

const Container = styled.div`
  background-color: #fff;
  margin: 30px auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
  width: 200px;
  height: 45px;
  border: 1px solid #dadfe1;
  border-radius: 35px;
  font-size: 18px;
  -webkit-box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
  -moz-box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
  box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
`;
const Circle = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 1px solid #dadfe1;
  border-radius: 50%;
  -webkit-box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
  -moz-box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
  box-shadow: 4px 7px 33px -7px rgba(158, 158, 158, 0.64);
  font-size: 28px;
  font-weight: bold;
`;

const RoadMap = () => (
  <>
    <Col xs={0} md={24}>
      <RoadMapSvg data={data} />
    </Col>
    <Col xs={24} md={0}>
      <Wrapper>
        {data.map((_, index) => (
          <React.Fragment key={index.toString()}>
            <Col xs={24}>
              <Row justify="center">
                <Col xs={24}>
                  <Container>
                    <Circle>{_.number}</Circle>
                    {_.title}
                  </Container>
                </Col>
                <ul
                  style={{
                    width: "100%",
                    marginBottom: "30px",
                    paddingRight: "40px",
                  }}
                >
                  {_.data.map((__, index1) => (
                    <li key={index1.toString()}>{__}</li>
                  ))}
                </ul>
              </Row>
            </Col>
          </React.Fragment>
        ))}
      </Wrapper>
    </Col>
  </>
);

export default RoadMap;
