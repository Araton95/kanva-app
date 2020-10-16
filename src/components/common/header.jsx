/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Row, Col, Drawer } from 'antd'
import styled from 'styled-components'
import {
  MenuOutlined,
} from '@ant-design/icons'
import Seo from './seo'

const Icon = require('../../images/logo.png')

const Container = styled.header`
  background-color:transparent;
  position:absolute;
  top:10;
  left:0;
  width:100%;
  margin-top:35px;
`
const Logo = styled.img`
  width: 150px;
  height: 63px;
  object-fit:fill;
`

const MenuItem = styled.h3`
  font-family:'Ubuntu';
  font-size: 18px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  cursor:pointer;
`

const Header = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <Container>
      <Seo title="Kanva" description="A Cryptocurrency Platform" />
      <Col span={24}>
        <Row justify="center">
          <Col span={18}>
            <Row justify="space-between" align="middle">
              <Col span={6}>
                <Logo src={Icon} />
              </Col>
              <Col xs={0} md={18}>
                <Row justify="space-around">
                  <MenuItem>KANVA</MenuItem>
                  <MenuItem>Staking Platform</MenuItem>
                  <MenuItem>Nft Platform</MenuItem>
                  <MenuItem>Governance </MenuItem>
                </Row>
              </Col>
              <Col xs={18} md={0}>
                <Row justify="end">
                  <MenuOutlined
                    onClick={() => setVisible(!visible)}
                    twoToneColor="#fff"
                    style={{
                      fontSize: '42px',
                      color: '#fff',
                      textAlign: 'right',
                    }}
                  />
                </Row>

              </Col>
              <Drawer
                placement="right"
                closable={false}
                onClose={() => setVisible(!visible)}
                visible={visible}
                key="right"
                bodyStyle={{
                  backgroundColor: '#0e1c35',
                }}
              >
                <Row align="top">
                  <MenuItem>KANVA</MenuItem>
                  <MenuItem>Staking Platform</MenuItem>
                  <MenuItem>Nft Platform</MenuItem>
                  <MenuItem>Governance </MenuItem>
                </Row>
              </Drawer>
            </Row>

          </Col>

        </Row>
      </Col>

    </Container>

  )
}

export default Header
