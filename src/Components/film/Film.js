import React from "react";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// responsive
import FilmResponsive from "../responsive/FilmResponsive";
// components
import Nav from "../Nav";
import Footer from "../Footer";
import NavResponsive from "../NavResponsive";
import {
  PageHeader,
  StyledContactButton,
  bodyResetter,
} from "../StyledComponent";
// video
import heroFilm from "../../media/video/hero-film.mp4";
import video2 from "../../media/video/video2.mp4";
import video4 from "../../media/video/video4.mp4";
import video5 from "../../media/video/video5.mp4";
// route
import { Link } from "react-router-dom";

const Film = () => {
  // scroll the page to top when the component is loaded in the React Tree
  window.scrollTo(0, 0);
  bodyResetter();
  return (
    <>
      <FilmResponsive />
      <motion.div
        variants={pageAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Nav />
        <NavResponsive />
        <PageHeader>
          <h1>Film</h1>
        </PageHeader>
        <StyledFimBody className="main-film-body">
          <HeroFilm className="hero-film">
            <div className="hero-text">
              <div>
                <h2>Shoot your </h2>
                <h2>
                  moments in <span>cinema </span>
                </h2>
                <h2>style</h2>
              </div>
              <Link to="/contact">
                <StyledContactButton style={{ margin: "4rem 0" }}>
                  <h4>Contact Us</h4>
                </StyledContactButton>
              </Link>
            </div>
            <video className="hero-video" controls="controls" loop>
              <source src={heroFilm} type="video/mp4" />
            </video>
          </HeroFilm>
          <YoutubeVideos className="youtube-videos">
            <div className="video">
              <video
                className="video"
                controls="controls"
                // autoPlay
                loop
              >
                <source src={video2} type="video/mp4" />
              </video>
            </div>

            <div className="video">
              <video className="video" controls="controls">
                <source src={video4} type="video/mp4" />
              </video>
            </div>
            <div className="video">
              <video className="video" controls="controls">
                <source src={video5} type="video/mp4" />
              </video>
            </div>
          </YoutubeVideos>
        </StyledFimBody>

        <Footer />
      </motion.div>
    </>
  );
};

const StyledFimBody = styled.div`
  width: 90%;
  margin: 4rem auto 8rem;
`;

const HeroFilm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hero-text {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }
  .hero-video {
    width: 50%;
    border-radius: 15px;
  }
`;

const YoutubeVideos = styled.div`
  width: 100%;
  div.video {
    width: 100%;
    margin: 5rem 0;
    padding: 2rem;
    background: #2c2c2c;
    box-shadow: 0px 10px 15px rgba(176, 176, 176, 0.25);
    border-radius: 15px;
  }
  video {
    width: 100%;
    border-radius: 15px;
  }
`;

export default Film;
