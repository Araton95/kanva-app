import React from "react";
import styled from "styled-components";

import Card from "../card/card";

const Cards = styled.div`
  width: 100%;
  margin-top: 70px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 700px) {
    margin-top: 50px;
    grid-gap: 22px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const CardList = () => (
  <>
    <Cards>
      {Array.from({ length: 17 }).map((value, index) => (
        <Card key={index} />
      ))}
    </Cards>
  </>
);

export default CardList;
