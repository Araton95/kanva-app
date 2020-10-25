import styled, { css, keyframes } from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.size || 16}px;
  font-weight: normal;
  font-family: Ubuntu;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${(props) =>
    props.primary &&
    css`
      color: var(--primary);
    `};

  ${(props) =>
    props.lightBlue &&
    css`
      color: var(--lightBlue);
    `};

  ${(props) =>
    props.white &&
    css`
      color: var(--white);
    `};

  ${(props) =>
    props.FontUB &&
    css`
      font-family: UbuntuBold;
    `};

  ${(props) =>
    props.FontUBM &&
    css`
      font-family: UbuntuLightMedium;
    `};

  ${(props) =>
    props.FontBTEB &&
    css`
      font-family: BunkenTechExtraBold;
    `};

  ${(props) =>
    props.FontBTB &&
    css`
      font-family: BunkenTechBold;
    `};
`;

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};

  ${(props) =>
    props.alignBottom &&
    css`
      align-items: flex-end;
    `};

  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

const primaryButtonStyles = css`
  color: rgb(255, 255, 255);
  border-color: #001a4e;
  background-color: rgb(0, 23, 68);
  -webkit-box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  -moz-box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;
  box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;

  &:hover {
    transform: translateY(-3px);
    background-color: #001d55;
  }
`;

const secondaryButtonStyle = css`
  background-color: rgb(231, 237, 242);
  border-color: rgb(231, 237, 242);
  box-shadow: -4.243px -4.243px 6px 0px rgba(255, 255, 255, 0.5),
    4.243px 4.243px 6px 0px rgba(171, 194, 212, 0.6);
  color: rgb(41, 170, 224);

  &:hover {
    transform: translateY(-3px);
    background-color: rgb(231, 237, 242);
  }
`;

const getButtonStyles = (props) => {
  if (props.secondary) {
    return secondaryButtonStyle;
  }

  return primaryButtonStyles;
};

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  /* line-height: 1.2; */
  font-family: Ubuntu;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 15px;
  width: 238px;
  height: 60px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: all 300ms;

  ${getButtonStyles}
`;

export const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 3000px;
    opacity: 1;
}`;
