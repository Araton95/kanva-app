import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: ${(props) => props.font || 18}px;
  font-weight: ${(props) => props.fontWeight || "bold"};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const CardList = () => (
  <>
    <Text font={25}>Kanva series</Text>
  </>
);

export default CardList;
