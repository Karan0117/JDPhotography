import React from "react";
// styling
import styled from "styled-components";
// images
import headerBG from "../media/images/homepage/header-bg.png";
import logoDark from "../media/images/common/logo-dark.svg";

const Header = () => {
  return (
    <StyledHeaderDiv className="header">
      <StyledHeaderBG
        src={headerBG}
        alt="John Doe standing on the river front"
      />
      <StyledLogoDark src={logoDark} alt="john doe photography" />
    </StyledHeaderDiv>
  );
};

const StyledHeaderDiv = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
  position: relative;
`;

const StyledHeaderBG = styled.img`
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  filter: grayscale(10%);
`;

const StyledLogoDark = styled.img`
  position: absolute;
  z-index: 2;
  top: 24%;
  left: 50%;
  height: 100px;
  transform: translate(-50%, -50%);
`;

export default Header;
