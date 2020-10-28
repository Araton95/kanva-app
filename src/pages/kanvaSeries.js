import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CardList from "../components/kanva-series/card-list";
import { Container } from "../styles";

const background = require("../assets/images/kanva-series/stars_bg.png");

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
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

const NftPlatformPage = () => (
  <>
    <SEO title="Kanva Series" />
    <BackgroundImage>
      <VerticalCenter>
        <Container>
          <CardList />
        </Container>
      </VerticalCenter>
    </BackgroundImage>
  </>
);

export default NftPlatformPage;
