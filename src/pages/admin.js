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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: -4.3px -4.3px 6px 0px #011844, 4.3px 4.3px 6px 0px #000a1f;

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

const CustomButton = styled(Button)`
  align-self: flex-start;
  margin-top: 15px;
  height: 55px;
  /* border-radius: 4px; */
  /* background: rgba(33, 114, 229, 0.1); */
  /* border: 1px solid rgba(33, 114, 229, 0.5); */
  /* box-shadow: none; */
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const initialState = {
  name: "",
  rarity: "",
  supply: 0,
  palettePoints: 0,
  claim: 0,
  max: 0,
};

const AdminPage = () => {
  const [data, setData] = useState(initialState);

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
              <Text font={25}>Admin</Text>

              <Form>
                <FieldContainer>
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
                  <ButtonContainer>
                    <CustomButton>Submit</CustomButton>
                    <CustomButton
                      onClick={() => setData(initialState)}
                      style={{ marginLeft: "15px" }}
                    >
                      Reset
                    </CustomButton>
                  </ButtonContainer>
                </FieldContainer>
                <UploadImage />
              </Form>
            </FormContainer>
          </Container>
        </VerticalCenter>
      </BackgroundImage>
    </>
  );
};

export default AdminPage;
