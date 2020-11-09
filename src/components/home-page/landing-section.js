import React from "react";
import styled from "styled-components";
import { Container } from "../../styles";
const background = require("../../assets/images/landing-page.png");
const bg_video = require("../../assets/video.mp4");

{
  /* <Container>
      <VerticalCenter>
        <Text size={60}>THE BRIDGE</Text>
        <Text>TO DEFI AND ARTS</Text>
        <DetailText size={25}>
          KANVA, bringing value to art through Decentralized Finance
        </DetailText>
      </VerticalCenter>
    </Container> */
}

const LandingSection = () => (
  <Video>
    <video height="100%" width="100%" loop autoPlay src={bg_video} />
  </Video>
);

export default LandingSection;

const Video = styled.div`
  height: 100vh;
  width: 100%;
  background: #010f48;
  video {
    object-fit: cover;
  }
`;

const BackgroundImage = styled.video`
  width: 100%;
  height: 100vh;
  min-height: 1100px;

  @media (max-width: 600px) {
    min-height: 100%;
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
