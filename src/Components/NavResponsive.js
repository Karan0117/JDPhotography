import React, { useRef, useEffect } from "react";
// styling
import styled from "styled-components";
import { StyledContactButton } from "./StyledComponent";
// logo image
import logoLight from "../media/images/common/logo-light.svg";
// route
import { Link } from "react-router-dom";

const NavResponsive = () => {
  // reference to the expanded nav menu
  const expandedNavRef = useRef();

  useEffect(() => {
    expandedNavRef.current.classList.remove("active");
  }, []);

  // event handlers
  const menuHander = (event) => {
    console.log("expandedNavRef ", expandedNavRef.current);
    expandedNavRef.current.classList.toggle("active");
    document.querySelector("body").classList.toggle("hide");
  };

  return (
    <NavContainer className="nav-responsive-container">
      <StyledNavResponsive className="nav-responsive">
        <Link to="/">
          <img src={logoLight} alt="" />
        </Link>
        <div onClick={menuHander} className="burger-menu">
          <div className="line1 line"></div>
          <div className="line2 line"></div>
          <div className="line3 line"></div>
        </div>
      </StyledNavResponsive>
      <ExpandedNav ref={expandedNavRef} className="expanded-nav">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <h3>Portfolio</h3>
            </Link>
          </li>
          <li>
            <Link to="/film">
              <h3>Film</h3>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <h3>Services</h3>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <StyledContactButton>
                <h4>Contact Us</h4>
              </StyledContactButton>
            </Link>
          </li>
        </ul>
      </ExpandedNav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  @media screen and (min-width: 701px) {
    display: none;
  }
  height: 12vh;
  background: #2c2c2c;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledNavResponsive = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a img {
    width: 40%;
  }
  .burger-menu {
    cursor: pointer;
    div {
      background: #f5f5f5;
      height: 3px;
      width: 3rem;
      margin: 0.7rem;
      pointer-events: none;
    }
  }
`;

const ExpandedNav = styled.div`
  width: 100%;
  height: 100vh;
  color: #f5f5f5;
  clip-path: circle(20px at 100% -5%);
  transition: all 1.5s ease-out;
  background: #434343;
  .nav-list {
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    list-style: none;
  }
`;

export default NavResponsive;
