import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import * as SVG from "../svgs/footer";

const logo = require("../assets/images/logo.png");
const background = require("../assets/images/footer-background.png");

const content = {
  telegram: "https://t.me/KanvaOfficial",
  facebook: "https://www.facebook.com/Kanva-Official-104203498125611",
  medium: "https://kanvadefi.medium.com/",
  twitter: "https://twitter.com/KanvaOfficial",
  discord: "https://discord.gg/qPN2R5a",
  reddit: "https://www.reddit.com/user/KanvaOfficial01",
  email: "officialkanva@gmail.com",
  copyright: "© Copyright 2020 | KANVA | All Rights Reserved",
};

const Footer = () => (
  <Container>
    <Row justify="center">
      <Col xs={22} md={18}>
        <VerticalCenter>
          <Text>Find Us on Social Media</Text>
          {/*
          <Row justify="center">
            <Col xs={24} md={24}>
              <Row justify="center">
                <Col xs={8} md={2}>
                  <a
                    href={content.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.TelegramIcon />
                  </a>
                </Col>
                <Col xs={8} md={2}>
                  <a
                    href={content.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.FacebookIcon />
                  </a>
                </Col>
                <Col xs={8} md={2}>
                  <a
                    href={content.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.MediumIcon />
                  </a>
                </Col>
                <Col xs={8} md={2}>
                  <a
                    href={content.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.TwitterIcon />
                  </a>
                </Col>
                <Col xs={8} md={2}>
                  <a
                    href={content.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.DiscordIcon />
                  </a>
                </Col>
                <Col xs={8} md={2}>
                  <a
                    href={content.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG.RedditIcon />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row> */}

          <FooterIcons>
            <a
              href={content.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVG.TelegramIcon />
            </a>
            <a
              href={content.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVG.FacebookIcon />
            </a>
            <a href={content.medium} target="_blank" rel="noopener noreferrer">
              <SVG.MediumIcon />
            </a>
            <a href={content.twitter} target="_blank" rel="noopener noreferrer">
              <SVG.TwitterIcon />
            </a>
            <a href={content.discord} target="_blank" rel="noopener noreferrer">
              <SVG.DiscordIcon />
            </a>
            <a href={content.reddit} target="_blank" rel="noopener noreferrer">
              <SVG.RedditIcon />
            </a>
          </FooterIcons>

          <Text>Get support</Text>
          <a href={`mailto:${content.email}?subject=Mail from Kanva.org`}>
            <Email>{content.email}</Email>
          </a>

          <a href="https://solidity.finance/audits/Kanva/" target="_blank">
            <Link>Smart contracts audit report</Link>
          </a>

          <Row justify="space-between" align="bottom">
            <Col xs={0} md={6}>
              <FooterLogo src={logo} />
            </Col>
            <Col xs={24} md={11}>
              <CopyrightText>{content.copyright}</CopyrightText>
            </Col>
          </Row>
        </VerticalCenter>
      </Col>
    </Row>
  </Container>
);

export default Footer;

const Container = styled.footer`
  background-color: #001030;
  background-image: url(${background});
  background-size: cover;
  min-height: 300px;
`;
const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
`;
const Text = styled.p`
  font-size: 18px;
  font-family: BunkenTechBold;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
`;
const Email = styled.p`
  font-size: 16px;
  font-family: Ubuntu;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
`;
const Link = styled.p`
  font-size: 16px;
  font-family: Ubuntu;
  color: #27aae0;
  line-height: 1.2;
  text-align: center;
`;
const CopyrightText = styled.p`
  font-size: 16px;
  font-family: Ubuntu;
  color: #fff;
  text-align: right;
  margin-bottom: 0;
  margin-top: 16px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
const FooterLogo = styled.img`
  width: 110px;
  height: 50px;
  object-fit: 100%;
`;

const FooterIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  a {
    width: 90px;
  }
`;
