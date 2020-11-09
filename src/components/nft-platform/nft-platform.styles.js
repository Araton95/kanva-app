import styled, { css } from "styled-components";

const background = require("../../assets/images/nft-platform/nft-bg.jpeg");

export const Text = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: ${(props) => props.font || 18}px;
  font-weight: ${(props) => props.fontWeight || "bold"};
  letter-spacing: 1px;
  margin: 0;

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

export const BigText = styled(Text)`
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const CardTitleText = styled(Text)`
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001030;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  /* @media (max-width: 600px) {
    min-height: 2129px;
  } */
`;

export const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 250px;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    padding-top: 180px;
    padding-bottom: 100px;
  }
`;

export const FarmText = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  @media (max-width: 600px) {
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const BalanceCard = styled.div`
  background: linear-gradient(
    to right,
    rgba(0, 82, 114, 1) 0%,
    rgba(0, 22, 64, 1) 84%
  );
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 6px 8px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  margin-bottom: 30px;
  position: relative;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 30px;
  border-top: 2px solid rgba(0, 191, 223, 0.2);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 20px;
  width: 200px;
  color: #fff;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  background: rgba(129, 191, 223, 0.122);
  border: 1px solid #81bfdf;
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.77);

  @media (max-width: 600px) {
    height: 40px;
    margin-top: 20px;
    width: 150px;
    font-size: 16px;
  }
`;
