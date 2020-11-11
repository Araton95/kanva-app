import React from "react";
import { Link } from "gatsby";
import { Container } from "../../styles";
import {
  Text,
  BigText,
  CardTitleText,
  BackgroundImage,
  VerticalCenter,
  FarmText,
  CardContainer,
  BalanceCard,
  TopSection,
  BottomSection,
  Button,
} from "./nft-platform.styles";

const ChooseFarm = () => (
  <BackgroundImage>
    <VerticalCenter>
      <Container>
        <Text>NFT FARMS</Text>
        <FarmText>
          <BigText uppercase font={55}>
            Choose a Farm
          </BigText>
        </FarmText>
        <CardContainer>
          <BalanceCard>
            <TopSection>
              <CardTitleText uppercase font={25}>
                Kanva series
              </CardTitleText>
            </TopSection>
            <BottomSection>
              <Text fontWeight={500}>Deposit</Text>
              <Link to="/comingSoon">
                <Button>Select</Button>
              </Link>
            </BottomSection>
          </BalanceCard>

          <BalanceCard>
            <TopSection>
              <CardTitleText uppercase font={25}>
                Artist series
              </CardTitleText>
            </TopSection>
            <BottomSection>
              <Text fontWeight={500}>Deposit</Text>
              <Link to="/comingSoon">
                <Button>Select</Button>
              </Link>
            </BottomSection>
          </BalanceCard>
        </CardContainer>
      </Container>
    </VerticalCenter>
  </BackgroundImage>
);

export default ChooseFarm;
