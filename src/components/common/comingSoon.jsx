/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(33, 114, 229, 0.1) 0%, rgba(33, 36, 41, 0) 100%);
  background-color: #001231;
  z-index: 10;
`

const BoldText = styled.h1`
  font-size: 60px;
  font-family: "Bunken Tech Sans Pro";
  color: #fff;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: left;
  margin-bottom:2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const ComingSoon = () => {
  return (
    <Container>
      <BoldText>
        COMING SOON
      </BoldText>
    </Container>
  )
}

export default ComingSoon
