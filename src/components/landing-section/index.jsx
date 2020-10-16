import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Header from '../common/header'
import * as Text from './data'

const background = require('../../images/landing-page.png')

const Container = styled.div`
  width:100%;
  height:100vh;
  min-height:1100px;
  background-color:#001030;
  background-image:url(${background});
  background-size:cover;
  justify-content:flex-start;
  align-items:center;
  
  @media (max-width: 600px) {
  min-height:100%;
  }
`
const VerticalCenter = styled.div`
  width:100%;
  height:100%;
  padding-top:350px;
  padding-bottom:150px;

  @media (max-width: 600px) {
  padding-top:200px;
  padding-bottom:100px;
  height:80%;
  }
`

const BoldText = styled.h1`
  font-size: 60px;
  font-family: "Bunken Tech Sans Pro";
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin-bottom:2px;
`
const BoldText2 = styled.h1`
  font-size: 39px;
  font-family: "Bunken Tech Sans Pro";
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
`

const Description = styled.h4`
  font-family:'Ubuntu';
  font-size: 25px;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  text-align: left;
  max-width:400px;
`

const LandingSection = () => (
  <Container>
    <Header />
    <VerticalCenter>
      <Row justify="center">
        <Col span={18}>
          <BoldText>
            {Text.BigTitle}
          </BoldText>
          <BoldText2>
            {Text.SmallTitle}
          </BoldText2>
          <Description>
            {Text.Description}
          </Description>
        </Col>
      </Row>
    </VerticalCenter>

  </Container>
)

export default LandingSection
