import React, { useState } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import UploadImage from "../components/upload-image/upload-image";
import { Container, Button } from "../styles";
// Custom import

const BackgroundImage = styled.div`
  width: 100%;
  background-color: #001231;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(33, 114, 229, 0.1) 0%,
    rgba(33, 36, 41, 0) 100%
  );
`;

const VerticalCenter = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 250px;
  padding-bottom: 10px;

  @media (max-width: 700px) {
    padding-top: 180px;
    padding-bottom: 100px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-family: Ubuntu;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 20px 30px;
  box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;

  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

const FormFields = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  height: 50px;
  padding: 0 20px;
  color: #fff;
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  background: rgba(33, 114, 229, 0.1);
  border: 1px solid rgba(33, 114, 229, 0.5);
  outline: none;
  margin-bottom: 20px;

  ::-webkit-input-placeholder {
    /* Edge */
    color: #fff;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  ::placeholder {
    color: #fff;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type="number"] {
    -moz-appearance: textfield;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
  margin-top: 15px;
  height: 55px;
`;

const AdminPage = () => {
  const [data, setData] = useState({
    name: "",
    rarity: "",
    supply: "",
    palettePoints: "",
    claim: "",
    max: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <SEO title="Home" />
      <BackgroundImage>
        <VerticalCenter>
          <Container>
            <FormContainer>
              <Text font={25}>Contact Us</Text>

              <UploadImage />

              <FormFields>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />

                <Input
                  type="text"
                  placeholder="Rarity"
                  name="rarity"
                  onChange={handleChange}
                  value={data.rarity}
                />
              </FormFields>

              <FormFields>
                <Input
                  type="number"
                  placeholder="Supply"
                  name="supply"
                  onChange={handleChange}
                  value={data.supply}
                />

                <Input
                  type="number"
                  placeholder="Palette points"
                  name="palettePoints"
                  onChange={handleChange}
                  value={data.palettePoints}
                />
              </FormFields>

              <FormFields>
                <Input
                  type="number"
                  placeholder="Days to claim MIN "
                  name="claim"
                  onChange={handleChange}
                  value={data.claim}
                />

                <Input
                  type="number"
                  placeholder="Days to claim MAX"
                  name="max"
                  onChange={handleChange}
                  value={data.max}
                />
              </FormFields>

              <SubmitButton>Submit</SubmitButton>
            </FormContainer>
          </Container>
        </VerticalCenter>
      </BackgroundImage>
    </>
  );
};

export default AdminPage;
