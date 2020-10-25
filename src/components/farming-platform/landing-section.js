import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { balance_cards, deposit_cards, Title, Description_Text } from "./data";

const background = require("../../assets/images/farming-platform/bg.png");

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1744px;
  background-color: #001030;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -130px;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1744px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* 1801px */
  @media (max-width: 1262px) {
    background-position-y: -84px;
  }

  @media (max-width: 974px) {
    background-position-y: -64px;
    background-position-x: -91px;
  }

  @media (max-width: 836px) {
    background-position-y: -62px;
    background-position-x: -154px;
  }

  @media (max-width: 741px) {
    background-position-y: -144px;
    background-position-x: -354px;
    min-height: 2208px;
  }

  @media (max-width: 600px) {
    min-height: 2129px;
  }

  @media (max-width: 420px) {
    min-height: 2307px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1067px;
  height: 100%;
  margin: 0 auto;
`;

const BalanceCardContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 20px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const BalanceCard = styled.div`
  background: linear-gradient(
    54deg,
    rgba(0, 82, 114, 0.8) 0%,
    rgba(0, 22, 64, 0.4) 84%
  );
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 6px 8px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  margin-bottom: 30px;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 22px;
    width: 25px;
    max-width: 100%;
  }

  p {
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: BunkenTechExtraBold;
    font-size: 36px;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 25px;
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 30px;
  border-top: 2px solid rgba(0, 191, 223, 0.2);

  p {
    color: #ffffff;
    font-family: Ubuntu;
    font-size: 14px;
    margin: 0;
  }
`;

const CardTitle = styled.div`
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 80%;
  margin: 0 auto;
  transform: translateY(-40px);
  position: relative;
  height: 40px;

  p {
    color: #00102f;
    font-family: Ubuntu;
    font-size: 18px;
    margin: 0;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    padding-top: 180px;
    padding-bottom: 100px;
  }
`;

const BoldText = styled.h1`
  font-family: BunkenTechExtraBold;
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Description = styled.h4`
  font-family: Ubuntu;
  font-size: 18px;
  max-width: 1170px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const POOL = styled.div`
  margin-top: 30px;
  margin-bottom: 72px;
`;

const DepositCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 28px;
  position: relative;
  width: 100%;
`;

const DepositCardTitle = styled.div`
  position: absolute;
  padding-left: 20px;
  height: 40px;
  width: 360px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  top: -40px;
  left: 40px;

  @media (max-width: 600px) {
    left: 10%;
    width: 80%;
  }

  img {
    width: 50px;
    height: 25px;
  }

  p {
    color: #010f30;
    font-family: BunkenTechExtraBold;
    font-size: 18px;
    font-weight: 800;
    margin: 0;
    margin-left: 20px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const DepositContent = styled.div`
  padding: 30px 50px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 15px 20px;
    flex-direction: column;
    justify-content: center;
  }

  button {
    background: rgba(129, 191, 223, 0.122);
    color: #ffffff;
    font-family: Ubuntu;
    border: 1px solid #81bfdf;
    font-size: 18px;
    font-weight: bold;
    border-radius: 15px;
    height: 46px;
    width: 180px;
    outline: none;
    box-shadow: 5px 7px 4px rgba(0, 0, 0, 0.55);

    @media (max-width: 600px) {
      margin-top: 15px;
      height: 40px;
      font-size: 16px;
    }
  }

  .text-container {
    flex-direction: column;
    flex: 1;
    padding-right: 40px;

    @media (max-width: 600px) {
      width: 100%;
      padding-right: 0;
    }

    .text-content {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid rgba(0, 191, 223, 0.2);
      align-items: center;
      width: 98%;

      @media (max-width: 600px) {
        width: 100%;
      }

      &:last-child {
        margin-top: 10px;
      }

      .text {
        color: #fefeff;
        font-family: Ubuntu;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 0;
        padding-bottom: 5px;
        text-align: center;

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
    }
  }
`;

const LandingSection = () => (
  <Container>
    <VerticalCenter>
      <Row justify="center">
        <Col>
          <BoldText>{Title}</BoldText>
          <Description>{Description_Text}</Description>
        </Col>
      </Row>
      <CardContainer>
        <BalanceCardContainer>
          {balance_cards.map((data, index) => (
            <BalanceCard key={index}>
              <CardTitle>
                <p>{data.title}</p>
              </CardTitle>
              <TopSection>
                <img className="icon" src={data.icon} alt={data.icon}></img>
                <p>{data.amount}</p>
              </TopSection>
              <BottomSection>
                <p>{data.text_one}</p>
                <p>{data.text_two}</p>
              </BottomSection>
            </BalanceCard>
          ))}
        </BalanceCardContainer>
        <POOL>
          <BoldText>participating pools</BoldText>
        </POOL>

        {deposit_cards.map((data, index) => (
          <DepositCard key={index} img={data.bgImage} alt={data.bgImage}>
            <DepositCardTitle>
              <img src={data.title.img} alt={data.title.img} />
              <p>{data.title.text}</p>
            </DepositCardTitle>
            <DepositContent>
              <div className="text-container">
                {data.deposits.map((data, index) => (
                  <div key={index} className="text-content">
                    <div className="text">{data.text}</div>
                    <div className="text">{data.amount}</div>
                  </div>
                ))}
              </div>
              <button>{data.button}</button>
            </DepositContent>
          </DepositCard>
        ))}
      </CardContainer>
    </VerticalCenter>
  </Container>
);

export default LandingSection;
