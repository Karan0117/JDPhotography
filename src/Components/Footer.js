import React from "react";
// styling
import styled from "styled-components";
// animation
import { AnimateSharedLayout } from "framer-motion";
// images
import logoLight from "../media/images/common/logo-light.svg";
import logoFB from "../media/images/common/logo-fb.svg";
import logoIG from "../media/images/common/logo-ig.svg";
import logoYT from "../media/images/common/logo-yt.svg";
import footerImg from "../media/images/common/footer-img.svg";
// route
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  // event handler
  const logoClickHandler = (event) => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <AnimateSharedLayout>
        <StyledFooterMain layout>
          <FooterMain className="footer-main">
            <Link to="/">
              <img
                onClick={logoClickHandler}
                className="logo"
                src={logoLight}
                alt=""
              />
            </Link>
            <FooterContent className="footer-content">
              <div className="row-1">
                <Link to="/services">
                  <h4>Services</h4>
                </Link>

                <h4>About</h4>
                <h4>Pricing</h4>
                <Link to="contact">
                  <h4>Contact</h4>
                </Link>
              </div>
              <div className="social-media">
                <h4>Let's Connect</h4>
                <div className="icons">
                  <img src={logoFB} alt="" />
                  <img src={logoIG} alt="" />
                  <img src={logoYT} alt="" />
                </div>
              </div>
            </FooterContent>
            <img className="footer-image" src={footerImg} alt="" />
          </FooterMain>
        </StyledFooterMain>
        <FooterEnd layout className="footer-end">
          <p>
            John Doe Photography. All rights reserved. | Privacy Policy | Terms
            and Conditions
          </p>
        </FooterEnd>
      </AnimateSharedLayout>
    </>
  );
};

const StyledFooterMain = styled.div`
  background: #292929;
  height: 30vh;
  @media screen and (max-width: 900px) {
    .footer-content {
      flex-grow: 5;
    }
  }
  @media screen and (max-width: 800px) {
    .logo {
      width: 200%;
    }

    .footer-content {
      flex-grow: 5;
      h4 {
        margin-left: 4rem;
      }
      .social-media {
        h4 {
          margin-left: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .logo {
    }
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      .row-1 {
        flex-direction: column;
        h4 {
          margin: 1rem 10rem 1rem 0;
        }
      }
      .social-media {
        align-self: center;
        h4 {
          margin: 1rem 0;
        }
      }
    }
    .footer-image {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .footer-content {
      .row-1 {
        h4 {
          margin-right: 8rem;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .footer-content {
      .row-1 {
        h4 {
          margin-right: 5rem;
        }
      }
    }
  }
`;

const FooterMain = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .logo {
    width: 70%;
  }
  .footer-image {
    position: absolute;
    width: 15%;
    right: 3.5rem;
    bottom: 3.5rem;
  }
`;

const FooterContent = styled.div`
  align-self: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  height: 100%;
  .row-1 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .social-media {
    align-self: start;
    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;
    }
  }
`;

const FooterEnd = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 2vh;
  p {
    font-size: 1rem;
  }
`;

export default Footer;
