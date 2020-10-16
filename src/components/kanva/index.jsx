import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import * as data from './data'

const backgroundImage = require('../../images/kanva-background.png')

const Container = styled.div`
  width:100%;
  background-color:#001030;
  background-image:url(${backgroundImage});
  background-size:cover;
`
const VerticalCenter = styled.div`
  width:100%;
  height:100%;
  padding-top:150px;
  padding-bottom:150px;

  @media (max-width: 600px) {
  padding-top:100px;
  padding-bottom:100px;  }

`
const Text = styled.p`
  font-family:'Ubuntu';
  font-size: 18px;
  color: #fff;
  text-align:left;
  column-count:2;
  column-gap: 50px;
  margin-bottom:55px;
  @media (max-width: 600px) {
  font-size:16px;
  }
`
const MobileText = styled(Text)`
  column-count:1
`

const Title = styled.h1`
  font-size: 55px;
  font-family: "Bunken Tech Sans Pro";
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin-bottom:12px;

  @media (max-width: 600px) {
    font-size:40px;
    margin-bottom:10px;
  }
`
const Button = styled.div`
  font-size: 18px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  border-width: 2px;
  border-color: #001a4e;
  border-style: solid;
  border-radius: 15px;
  background-color: rgb(0, 23, 68);
  -webkit-box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  -moz-box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  width: 238px;
  height: 60px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Kanva = () => (
  <Container>
    <VerticalCenter>

      <Row justify="center">
        <Col xs={22} md={18}>
          <Title>Kanva</Title>
          <Row justify="space-between">
            <Col xs={0} md={22}>
              <Text>
                {data.Text}
              </Text>
              <Button>White Paper</Button>
            </Col>
            <Col xs={22} md={0}>
              <MobileText>
                {data.Text}
              </MobileText>
            </Col>

          </Row>

        </Col>
      </Row>
    </VerticalCenter>

  </Container>
)

export default Kanva
