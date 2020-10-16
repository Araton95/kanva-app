import React from 'react'
import { Col, Row } from 'antd'
import styled from 'styled-components'
import RoadMapSvg from './svg'
import { data } from './data'

const backgroundImage = require('../../images/knv-background.png')

const Wrapper = styled.div`
  width:100%;
  background-color:#001030;
  background-image:url(${backgroundImage});
  background-size:cover;

  ul > li {
    font-size:16px;
    color:#fff;
  }
`

const Container = styled.div`
  background-color:#fff;
  margin:30px auto;
  position:relative;
  display:flex;
  justify-content:flex-end;
  padding-right:20px;
  align-items:center;
  width:200px;
  height:45px;
  border:1px solid #dadfe1;
  border-radius:35px;
  font-size:18px;
  -webkit-box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
  -moz-box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
  box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
`
const Circle = styled.div`
  position:absolute;
  top:-5px;
  left:-5px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  background:#fff;
  border:1px solid #dadfe1;
  border-radius:50%;
  -webkit-box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
  -moz-box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
  box-shadow: 4px 7px 33px -7px rgba(158,158,158,0.64);
  font-size:28px;
  font-weight:bold;
`

const RoadMap = () => (
  <>
    <Col xs={0} md={24}>
      <RoadMapSvg data={data} />
    </Col>
    <Col xs={24} md={0}>
      <Wrapper>
        {
        data.map((_, index) => (
          <React.Fragment key={index.toString()}>
            <Col xs={24}>
              <Row justify="center">
                <Col xs={24}>

                  <Container>
                    <Circle>
                      {_.number}
                    </Circle>
                    {_.title}
                  </Container>
                </Col>
                <ul style={{
                  'width': '100%',
                  'marginBottom': '30px',
                  'paddingRight': '40px'
                }}>
                  {
                    _.data.map((__, index1) => (
                      <li key={index1.toString()}>{__}</li>
                    ))
                  }
                </ul>
              </Row>
            </Col>
          </React.Fragment>
        ))
        }
      </Wrapper>
    </Col>
  </>
)

export default RoadMap
