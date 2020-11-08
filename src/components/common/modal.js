import React from "react";
import Rodal from "rodal";
import styled from "styled-components";

const Modal = ({ showModal, setModal }) => {
  return (
    <RodalContainer>
      <Rodal
        visible={showModal}
        onClose={() => setModal(false)}
        customStyles={{
          height: "fit-content",
        }}
      >
        <RodalContent>
          <h2>Deposit $MEME, Earn Pineapples, Mint NFTs.</h2>
          <p>
            Staking MEME tokens in the Genesis pool earns you roughly 1 credit
            per day. With enough pineapple, you can mint an exclusive
            limited-edition NFT meme. Supply and pineapples required differ
            across NFTs.
          </p>

          <button>Approve Meme</button>

          <p>
            You are currently staking <span> 0 $MEME</span> - the maximum is 5
            $MEME
          </p>

          <div className="line"></div>
        </RodalContent>
      </Rodal>
    </RodalContainer>
  );
};

export default Modal;

const RodalContainer = styled.div`
  .rodal {
    .rodal-dialog {
      width: 750px !important;

      @media (max-width: 776px) {
        width: 90% !important;
      }
    }
  }
`;

const RodalContent = styled.div`
  margin-top: 15px;
  padding: 0 40px 0 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 776px) {
    padding: 0;
  }

  h2 {
    color: #010f30;
    font-family: Ubuntu;
    margin-bottom: 10px;
  }

  p {
    font-family: Ubuntu;
    color: #010f30;
    font-size: 16px;
    text-align: justify;
    letter-spacing: 0.5px;

    span {
      font-size: 20;
      font-weight: 700;
    }
  }

  button {
    margin: 20px 0;
    outline: none;
    font-family: Ubuntu;
    font-weight: 500;
    font-size: 18px;
    background: #fff;
    border: 1px solid #010f30;
    width: 190px;
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
  }

  .line {
    width: 100%;
    margin: 20px 0;
    border: 1px dashed #bbb;
  }
`;
