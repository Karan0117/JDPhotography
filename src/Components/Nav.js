import React, { useRef } from "react";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { navLineAnimation } from "./animation";
import { StyledContactButton } from "./StyledComponent";
// router
import { useLocation, Link } from "react-router-dom";
// images
import logoDark from "../media/images/common/logo-light.svg";

const Nav = () => {
  const { pathname } = useLocation();

  // reference to the NavList
  const navListRef = useRef();

  return (
    <StyledNav className="navbar">
      <NavList ref={navListRef} className="nav-list">
        {pathname !== "/" && (
          <Link to="/">
            <li>
              <img src={logoDark} alt="" />
            </li>
          </Link>
        )}
        <Link to="/">
          <li>
            <h4>Home</h4>
            <Line
              variants={navLineAnimation}
              animate={pathname === "/" ? "show" : ""}
              initial="hidden"
            />
          </li>
        </Link>
        <Link to="/portfolio">
          <li>
            <h4>Portfolio</h4>
            <Line
              variants={navLineAnimation}
              animate={pathname === "/portfolio" ? "show" : ""}
              initial="hidden"
            />
          </li>
        </Link>
        <Link to="/film">
          <li>
            <h4>Film</h4>
            <Line
              variants={navLineAnimation}
              animate={pathname === "/film" ? "show" : ""}
              initial="hidden"
            />
          </li>
        </Link>
        <Link to="/services">
          <li>
            <h4>Services</h4>{" "}
            <Line
              variants={navLineAnimation}
              animate={pathname === "/services" ? "show" : ""}
              initial="hidden"
            />
          </li>
        </Link>
        <Link to="/contact">
          <StyledContactButton className="contact-btn">
            <h4>Contact Us</h4>
          </StyledContactButton>
        </Link>
      </NavList>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background: #2c2c2c;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  .nav-list {
    li:hover {
      h4 {
        color: #04befe;
      }
    }
  }

  @media screen and (max-width: 950px) {
    .nav-list {
      img {
        width: 55%;
      }
      li {
        padding: 0 1.5rem;
      }
      .contact-btn {
        text-align: center;
        h4 {
          font-size: 1.6rem;
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .nav-list {
      img {
        width: 70%;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .nav-list {
      img {
        width: 85%;
      }
      li {
        h4 {
          /* font-weight: normal; */
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .nav-list {
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 1rem 0;
  li {
    list-style: none;
    cursor: pointer;
    img {
      width: 40%;
    }
  }
`;

const Line = styled(motion.div)`
  border: 2px solid #04befe;
  border-radius: 1rem;
  width: 0%;
`;

export default Nav;
