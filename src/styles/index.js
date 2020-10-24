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

export const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 3000px;
    opacity: 1;
}`;
