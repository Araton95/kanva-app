import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

import { Container, Button } from "../styles";
const background = require("../assets/images/kanva-series/stars_bg.png");
const farmingIcon = require("../assets/images/farming-btn-icon.png");

const BackgroundImage = styled.div`
  width: 100%;
  background-color: #001030;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 250px;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    padding-top: 180px;
    padding-bottom: 100px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: ${(props) => props.font || 18}px;
  font-weight: ${(props) => props.fontWeight || "bold"};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const TopButtons = styled.div`
  padding: 20px 0;
  display: flex;
`;

const JointsButton = styled.div`
  position: relative;
  height: 91px;
  width: 542px;
  border: 1px solid #12110c;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(270deg, #002247 0%, #00506f 100%);
`;

const JointsLine = styled.div`
  position: absolute;
  left: 50%;
  height: 100%;
  width: 2px;
  background: rgba(0, 191, 223, 0.2); ;
`;

const ManageStackButton = styled(Button)`
  height: 90px;
  width: 351px;
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
  img {
    padding-left: 14px;
  }
`;

const ArtistSeries = () => (
  <>
    <SEO title="Kanva Series" />
    <BackgroundImage>
      <VerticalCenter>
        <Container>
          {/* <Text font={25}>ARTIST SERIES</Text>
          <TopButtons>
            <JointsButton>
              <Text>0 ETH/KNV UNIV2-LP</Text>
              <Text>0,000 PLTE Earned</Text>
              <JointsLine />
            </JointsButton>
            <ManageStackButton>
              Manage Stake
              <img src={farmingIcon} alt="farming-icon.png" />
            </ManageStackButton>
          </TopButtons> */}
        </Container>
      </VerticalCenter>
    </BackgroundImage>
  </>
);

export default ArtistSeries;
