import React from "react";
import styled, { css } from "styled-components";

const ICON_OPENSEA = require("../../assets/images/kanva-series/icon-opensea.png");

const CardList = ({
  cardImage,
  name,
  commonText,
  buttonText,
  minted,
  left,
  isSoldOut,
  isReadyForBuy,
}) => (
  <Card>
    <CardTopSection>
      <CardImage>
        <img src={cardImage} alt="Card-image" />
      </CardImage>
    </CardTopSection>
    <CardBottomSection>
      <div className="minted">
        <div>
          <p>{minted}</p>
        </div>
        <div>
          <p>{left}</p>
        </div>
      </div>
      <AuthorName>{name}</AuthorName>
      <Text>{commonText}</Text>
      <Button borderLess={isSoldOut} isBuyButton={isReadyForBuy}>
        {isSoldOut && (
          <img
            src={ICON_OPENSEA}
            alt="ICON_OPENSEA"
            style={{ marginRight: "6px", width: "13px", height: "13px" }}
          />
        )}
        {buttonText}
      </Button>
    </CardBottomSection>
  </Card>
);

export default CardList;

const Text = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const Card = styled.div`
  padding-top: 5px;
  padding-bottom: 30px;
`;

const CardTopSection = styled.div`
  height: 479px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  z-index: 2;
  background: linear-gradient(180deg, #004566 0%, #00264a 51.37%, #001030 100%);
  box-shadow: -8.3px -2px 8px #011844, 7.3px 9.3px 10px rgba(0, 0, 0, 0.323);

  @media (max-width: 800px) {
    height: 400px;
  }
`;

const CardImage = styled.div`
  width: 90%;
  height: 91%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

const CardBottomSection = styled.div`
  padding: 30px 20px;
  padding-top: 45px;
  position: relative;
  top: -5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  border-radius: 25px;
  z-index: 0;
  background-color: #001030;
  box-shadow: 7.3px 9.3px 10px rgba(0, 0, 0, 0.323);

  .minted {
    display: flex;
    border-radius: 5px;
    width: 100%;
    div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: #ffffff;
        font-family: Ubuntu;
        margin: 0;
        font-size: 17px;
        /* font-weight: bold; */
        font-weight: 600;
        text-transform: uppercase;

        @media (max-width: 800px) {
          font-size: 16px;
        }
      }

      :nth-child(1) {
        border: 1px solid #9c40c6;
        background: #9c40c6;
        border-radius: 6px 0 0 6px;
      }

      :nth-child(2) {
        border: 1px solid #43c382;
        background: #43c382;
        border-radius: 0 6px 6px 0;
      }
    }
  }
`;

const AuthorName = styled.p`
  color: #ffffff;
  font-family: Ubuntu;
  text-transform: uppercase;
  font-size: 19px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const borderLessStyle = css`
  border: 1px solid transparent;
`;

const normalButtonStyle = css`
  border: 1px dashed rgba(0, 191, 223, 0.2);
`;

const buyButtonStyle = css`
  border: 1px solid #001237;
  background: #001237;
  box-shadow: 7.3px 9.3px 10px rgba(0, 0, 0, 0.323);
`;

const getButtonStyles = (props) => {
  if (props.isBuyButton) {
    return buyButtonStyle;
  }

  if (props.borderLess) {
    return borderLessStyle;
  }

  return normalButtonStyle;
};

const Button = styled.button`
  margin-top: 25px;
  outline: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  height: 50px;
  width: 200px;

  ${getButtonStyles}
`;
