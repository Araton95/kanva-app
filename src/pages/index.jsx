import React from 'react'
import Header from '../components/common/header'
import LandingSection from '../components/landing-section'
import Footer from '../components/footer'
import NftSection from '../components/nft-section'
import KNVFarming from '../components/knv-farming'
import Kanva from '../components/kanva'
import TokenKnv from '../components/token-knv'
import RoadMap from '../components/road-map'
import Partners from '../components/partners'

const IndexPage = () => (
  <>
    <Header />
    <LandingSection />
    <Kanva />
    <TokenKnv />
    <KNVFarming />
    <NftSection />
    <RoadMap />
    <Partners />
    <Footer />
  </>
)

export default IndexPage
