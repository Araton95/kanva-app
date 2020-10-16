import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Slider from './slider'

const nftHeading = require('../../images/nftHeading.png')

const Container = styled.div`
  width:100%;
  background-color:#e6edf1;
  display:flex;
  flex-direction:column;
`
const VerticalCenter = styled.div`
  width:100%;
  height:100%;
  margin-top:150px;
  margin-bottom:150px;
`

const TitleContainer = styled.div`
  display:flex;
`
const TextImage = styled.img`
  object-fit: scale-down;
  position: absolute;
`
const Title = styled.h1`
  font-size: 55px;
  font-family: "Bunken Tech Sans Pro";
  color: rgb(0,16,48);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  margin-left: 55px;
  margin-top: 35px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
  margin-top: 40px;
  margin-left: 35px;
  font-size:40px;
  margin-bottom:10px;
  }
`

const Partners = () => (
  <Container>
    <VerticalCenter>

      <Row justify="center">
        <Col xs={18} md={18}>
          <Row justify="center">
            <TitleContainer>
              <TextImage src={nftHeading} />
              <Title>partners of the kanva</Title>
            </TitleContainer>

          </Row>
          <Slider />

        </Col>
      </Row>
    </VerticalCenter>

  </Container>
)

export default Partners
