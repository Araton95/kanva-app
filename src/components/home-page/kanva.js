import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Player, BigPlayButton, ControlBar } from "video-react";
import { Button, Container } from "../../styles";
const backgroundImage = require("../../assets/images/kanva-background.png");
const Video_POSTER = require("../../assets/images/video-poster.jpg");
const Video = require("../../assets/videoplayback.mp4");

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
  font-family: Ubuntu;
  font-size: 18px;
  color: #fff;
  text-align: left;
  column-count: 2;
  column-gap: 50px;
  margin-bottom: 55px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const MobileText = styled(Text)`
  column-count: 1;
`;

const Title = styled.h1`
  font-size: 55px;
  font-family: BunkenTechBold;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const VideoPlayer = styled.div`
  margin: 50px;

  margin-top: 80px;

  .video-react {
    box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
    border-radius: 10px;
    .video-react-video {
      border-radius: 10px;
    }

    .custom-control {
      .video-react-play-progress {
        background: #29aae0;
      }
    }
  }
`;

const Kanva = () => (
  <BackgroundImageContainer>
    <Container>
      <VerticalCenter>
        <Title>Kanva</Title>
        <Row justify="space-between">
          <Col xs={0} md={22}>
            <Text>
              KANVA is a cryptocurrency platform developed by the anonymous team
              of Artists, Developers, Programmers, and Cryptocurrency
              Enthusiasts.It was established to push the value of art and for
              its patrons to have a chance to store valuable card collectibles
              that they can sell in the market through bridging art and
              decentralized finance.It is a place where the community and
              holders of various NFT’s can farm NFT and cast their vote for the
              future featured arts.In this way, KANVA brings value to art
              through Decentralized Finance.
            </Text>

            <a href="/KANVA_Official_Whitepaper.pdf" target="_blank">
              <Button>White Paper</Button>
            </a>
          </Col>
          <Col xs={22} md={0}>
            <MobileText>
              KANVA is a cryptocurrency platform developed by the anonymous team
              of Artists, Developers, Programmers, and Cryptocurrency
              Enthusiasts.It was established to push the value of art and for
              its patrons to have a chance to store valuable card collectibles
              that they can sell in the market through bridging art and
              decentralized finance.It is a place where the community and
              holders of various NFT’s can farm NFT and cast their vote for the
              future featured arts.In this way, KANVA brings value to art
              through Decentralized Finance.
            </MobileText>
          </Col>
        </Row>
        <VideoPlayer>
          <Player poster={Video_POSTER} src={Video}>
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} className="custom-control" />
          </Player>
        </VideoPlayer>
      </VerticalCenter>
    </Container>
  </BackgroundImageContainer>
);

export default Kanva;
