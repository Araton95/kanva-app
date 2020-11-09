import React from "react";
import SEO from "../components/SEO";
// Custom import
import {
  LandingSection,
  Kanva,
  TokenKnv,
  KNVFarming,
  NftSection,
  RoadMap,
} from "../components/home-page";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LandingSection />
    <Kanva />
    <TokenKnv />
    <KNVFarming />
    <NftSection />
    <RoadMap />
  </>
);

export default IndexPage;
