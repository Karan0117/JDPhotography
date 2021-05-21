import React from "react";
// components
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NavResponsive from "./NavResponsive";
import { bodyResetter } from "./StyledComponent";
// images
import heroImg1 from "../media/images/homepage/hero-img-1-1.png";
import heroImg2 from "../media/images/homepage/hero-img-2-1.png";
import timelessImg1 from "../media/images/homepage/timeless-img-1.png";
import timelessImg2 from "../media/images/homepage/timeless-img-2.png";
import timelessImg3 from "../media/images/homepage/timeless-img-3.png";
import rightArrow from "../media/images/common/right-arrow.svg";
import holaImg from "../media/images/homepage/hola-img.png";
import bottomImg from "../media/images/homepage/bottom-img.png";
// video
import homeVideo from "../media/video/video4.mp4";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  titleContainerAnimation,
  imagePopAnimation,
  specialTextAnimation,
  pageAnimation,
  fadeAnimation,
} from "./animation";
import { useScroll } from "./useScroll";
// route
import { Link } from "react-router-dom";
// responsive
import HomeResponsive from "./responsive/HomeResponsive";

const Home = () => {
  // window.scrollTo(0, 0);
  bodyResetter();

  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  return (
    <>
      <HomeResponsive />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Header />
        <Nav />
        <NavResponsive />
        <Hero className="hero">
          <motion.div
            variants={titleContainerAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.h2>Create and capture</motion.h2>
            <motion.h2>
              the best{" "}
              <motion.span
                variants={specialTextAnimation}
                initial="hidden"
                animate="show"
              >
                moments{" "}
              </motion.span>
            </motion.h2>
            <motion.h2> of your life</motion.h2>
          </motion.div>
          <HeroImg1
            variants={imagePopAnimation}
            initial="hidden"
            animate="show"
            src={heroImg1}
            className="hero-img-1"
            alt=""
          />
          <HeroImageContainer className="hero-img-container">
            <HeroImg2
              variants={imagePopAnimation}
              initial="hidden"
              animate="show"
              src={heroImg2}
              alt=""
            />
          </HeroImageContainer>
        </Hero>
        <StyledTimeless
          className="timeless"
          ref={element1}
          variants={fadeAnimation}
          animate={controls1}
          initial="hidden"
        >
          <h2>
            Timeless images to remember a lifetime of <span>memories</span>
          </h2>
          <p>Going an extra mile to get the shot is always rewarding!</p>
          <TimelessImgContainer className="timeless-img-container">
            <img src={timelessImg1} alt="" />
            <img src={timelessImg2} alt="" />
            <img className="special-img" src={timelessImg3} alt="" />
          </TimelessImgContainer>
          <StyledQuote className="quote">
            <p>
              “In photography there is a reality so subtle that it becomes more
              real than reality”
            </p>
            <p>
              <span>- Alfred Stieglitz</span>
            </p>
          </StyledQuote>
        </StyledTimeless>
        <StyledVideography
          className="videography"
          ref={element2}
          variants={fadeAnimation}
          animate={controls2}
          initial="hidden"
        >
          <video className="video" controls="controls" autoplay loop>
            <source src={homeVideo} type="video/mp4" />
          </video>
          <StyledVideoText className="video-text">
            <h2>
              Capture moments and store them in to <span>reels!</span>
            </h2>
            <Link to="/film">
              <p>
                Watch our videography <img src={rightArrow} alt="" />
              </p>
            </Link>
          </StyledVideoText>
        </StyledVideography>
        <StyledHolaContainer
          className="hola-container"
          ref={element3}
          variants={fadeAnimation}
          animate={controls3}
          initial="hidden"
        >
          <StyledHola className="hola-section">
            <img className="hola-image" src={holaImg} alt="" />
            <div className="hola-text">
              <h2>
                <span>HOLA!</span>
              </h2>
              <p>
                We are a team of highly motivated people who will go to that
                extra mile to capture your moment.
              </p>
              <p>
                We love what we do and we’d love to embellish your memory lane.
                Let’s get started!
              </p>
              <Link to="/protfolio">
                <p>
                  View our portfolio <img src={rightArrow} alt="" />
                </p>
              </Link>
              <Link to="/contact">
                <p>
                  Get to know us <img src={rightArrow} alt="" />
                </p>
              </Link>
              <Link to="/contact">
                <p>
                  Contact us <img src={rightArrow} alt="" />
                </p>
              </Link>
            </div>
          </StyledHola>
        </StyledHolaContainer>
        <StyledBottom
          className="bottom"
          ref={element4}
          variants={fadeAnimation}
          animate={controls4}
          initial="hidden"
        >
          <img src={bottomImg} alt="" />
          <h2>
            Create <span>memories</span> you always dreamed about!
          </h2>
        </StyledBottom>
        <Footer />
      </motion.div>
    </>
  );
};

const Hero = styled(motion.div)`
  width: 90%;
  margin: 5rem auto;
  position: relative;
  height: 80vh;
  img {
    border-radius: 10px;
  }
`;

const HeroImg1 = styled(motion.img)`
  position: absolute;
  right: 0;
  height: 85%;
  object-position: bottom;
  top: 0px;
  object-fit: contain;
`;

const HeroImageContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 77%;
  padding: 2rem 2rem 0 0;
  background: #434343;
  border-radius: 10px;
  margin-top: 2rem;
`;

const HeroImg2 = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  height: 75%;
`;

const StyledTimeless = styled(motion.div)`
  width: 90%;
  margin: 15rem auto 0;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
    margin: 0 20%;
  }
  h2 + p {
    margin: 3rem 0;
    opacity: 0.8;
  }
`;

const TimelessImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40%;
    margin: 4rem;
    border-radius: 1rem;
  }
  .special-img {
    width: 36.5%;
    object-fit: cover;
  }
`;

const StyledQuote = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    align-self: flex-end;
    letter-spacing: 2px;
  }
`;

const StyledVideography = styled(motion.div)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .video {
    width: 100%;
    background: #c4c4c4;
  }
`;

const StyledVideoText = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 15vh;
  top: 25%;
  h2 {
    text-shadow: 1px 0px 10px #151515;
  }
  a {
    text-decoration: none;
    color: #f5f5f5;
    p {
      cursor: pointer;
    }
  }
  a:hover p {
    text-decoration: underline;
  }
`;

const StyledHolaContainer = styled(motion.div)`
  background: #2c2c2c;
  padding: 5rem 0;
  margin: 5rem 0;
`;

const StyledHola = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  .hola-image {
    width: 80%;
    transform: scaleX(-1);
    border-radius: 10px;
  }
  div {
    margin: 7rem 0rem;
    padding-left: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      font-family: "Cinzel Decorative", sans-serif;
      letter-spacing: 5px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const StyledBottom = styled(motion.div)`
  width: 90%;
  margin: 5rem auto;
  position: relative;
  height: 90vh;
  text-align: center;
  img {
    z-index: -2;
    width: 100%;
    border-radius: 10px;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

export default Home;
