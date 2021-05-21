import React, { useEffect } from "react";
// components
import Nav from "../Nav";
import ImageCard from "./ImageCard";
import { PageHeader } from "../StyledComponent";
import Footer from "../Footer";
import { StyledContactButton, bodyResetter } from "../StyledComponent";
import NavResponsive from "../NavResponsive";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// responsive
import PortfolioResponsive from "../responsive/PortfolioResponsive";
// actions
import { resetCounter } from "../../actions/counterAction";
// redux
import { useDispatch, useSelector } from "react-redux";
// router
import { Link } from "react-router-dom";

const Porfolio = () => {
  // scroll to top
  window.scrollTo(0, 0);
  bodyResetter();

  // getting data back from Redux
  const protfolioCardData = useSelector(
    (state) => state.portfolio.portfolioCardData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCounter());
  }, [dispatch]);

  return (
    <>
      <PortfolioResponsive />
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
          <h1>Portfolio</h1>
        </PageHeader>
        <ImageList className="image-list">
          {protfolioCardData.map((data) => (
            <ImageCard name={data.name} imgFile={data.img} key={data.name} />
          ))}
        </ImageList>
        <StyledCTA className="cta">
          <div className="cta-text">
            <h2>Let's create your portfolio</h2>
            <h1>
              <span className="special-font">&#38;</span>
            </h1>
            <h2>flaunt your poses!</h2>
          </div>
          <Link to="/contact">
            <StyledContactButton className="cta-button">
              <h4>Contact Us</h4>
            </StyledContactButton>
          </Link>
        </StyledCTA>
        <Footer />
      </motion.div>
    </>
  );
};

const ImageList = styled.div`
  width: 90%;
  margin: 2rem auto 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
`;

const StyledCTA = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    text-align: center;
    h1 {
      font-size: 7rem;
    }
    h2 {
      font-weight: 600;
    }
  }
`;

export default Porfolio;
