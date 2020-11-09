/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { RightButton, LeftButton } from "./buttons";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PartnerLogos = require("../../assets/images/partner-logo.png");

const StyledButton = styled.div`
  border-radius: 15px;
  background-color: rgb(231, 237, 242);
  box-shadow: -4.243px -4.243px 6px 0px rgba(255, 255, 255, 0.5),
    4.243px 4.243px 6px 0px rgba(171, 194, 212, 0.6);
  width: 50px;
  height: 50px;
  display: block;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 999;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    z-index: 999;
    background-color: rgb(231, 237, 242);
  }

  &:before {
    display: none;
  }
`;
const PartnerLogo = styled.img`
  width: 150px;
  height: 150px;
  padding: 5px 10px;
  object-fit: scale-down;
  object-position: center;

  @media (max-width: 600px) {
    max-width: 100px;
    max-height: 100px;
  }
`;
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <StyledButton className={className} onClick={onClick}>
      <RightButton />
    </StyledButton>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <StyledButton className={className} onClick={onClick}>
      <LeftButton />
    </StyledButton>
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: false,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },
  ],
};
const Sliderr = () => (
  <Slider {...settings}>
    <PartnerLogo src={PartnerLogos} />
    <PartnerLogo src={PartnerLogos} />
    <PartnerLogo src={PartnerLogos} />
    <PartnerLogo src={PartnerLogos} />
    <PartnerLogo src={PartnerLogos} />
  </Slider>
);
export default Sliderr;
