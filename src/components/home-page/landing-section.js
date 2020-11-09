import React from "react";
import styled from "styled-components";
import { Container } from "../../styles";
const bg_video = require("../../assets/video.mp4");

const LandingSection = () => (
  <BackgroundImage>
    <Video>
      <video height="100%" width="100%" loop autoPlay src={bg_video} />
    </Video>
    <Container>
      <VerticalCenter>
        <Text size={60}>THE BRIDGE</Text>
        <Text>TO DEFI AND ARTS</Text>
        <DetailText size={25}>
          KANVA, bringing value to art through Decentralized Finance
        </DetailText>
      </VerticalCenter>
    </Container>
  </BackgroundImage>
);

export default LandingSection;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #001030;

  @media (max-width: 600px) {
    min-height: 100%;
  }
`;

const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  video {
    object-fit: cover;
  }
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 320px;
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
`;

const DetailText = styled.p`
  font-size: 25px;
  width: 400px;
  line-height: 1.2;
  font-family: Ubuntu;
  font-weight: bold;
  margin-top: 22px;
  color: var(--white);
`;
