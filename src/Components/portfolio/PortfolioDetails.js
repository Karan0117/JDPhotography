import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// redux
import { useSelector, useDispatch } from "react-redux";
// route
import { useLocation, useHistory } from "react-router-dom";
// actions
import { loadImages } from "../../actions/imageActions";
import { resetCounter } from "../../actions/counterAction";
import { increaseCounter } from "../../actions/counterAction";
// components
import Nav from "../Nav";
import { PageHeader, bodyResetter } from "../StyledComponent";
import Footer from "../Footer";
import ImageCard from "./ImageCard";
import NavResponsive from "../NavResponsive";
import PortfolioDetailResponsive from "../responsive/PortfolioDetailResponsive";
import GridImg from "./GridImg";
// images
import leftArrow from "../../media/images/common/left-arrow.svg";

const PortfolioDetails = () => {
  // window.scrollTo(0, 0);
  bodyResetter();

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const stateImgs = useSelector((state) => state.imgWedding.wedding);
  const counterVal = useSelector((state) => state.counterValue.counter);
  const protfolioCardData = useSelector(
    (state) => state.portfolio.portfolioCardData
  );

  let pathName = location.pathname;
  pathName = pathName.slice(11);
  pathName = pathName.replace("-", " ");

  const moreHandler = (event) => {
    dispatch(increaseCounter());
    dispatch(loadImages(location.pathname.slice(11), counterVal));
  };

  const goBackHandler = (event) => {
    dispatch(resetCounter());
    history.push("/portfolio");
  };

  return (
    <div style={{ position: "relative" }}>
      <PortfolioDetailResponsive />
      <motion.div
        variants={pageAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Nav />
        <NavResponsive />
        <StyledPageHeader className="portfolio-header">
          <div onClick={goBackHandler}>
            <img src={leftArrow} alt="" />
            <p>Go Back</p>
          </div>
          <h1>{pathName}</h1>
        </StyledPageHeader>
        <ImagesGrid className="image-grid">
          {stateImgs.map((img) => (
            <GridImg imgSrc={img.urls.raw} imgID={img.id} key={img.id} />
          ))}
        </ImagesGrid>
        <LoadMore className="load-more">
          {counterVal < 4 && <h4 onClick={moreHandler}>Load more</h4>}
        </LoadMore>
        <OtherPortfolios className="other-portfolios">
          <div className="portfolio-row">
            {protfolioCardData.map((data) => (
              <ImageCard name={data.name} imgFile={data.img} key={data.name} />
            ))}
          </div>
        </OtherPortfolios>
        <Footer />
      </motion.div>
    </div>
  );
};

const OtherPortfolios = styled.div`
  background: #121212;
  height: 25vh;
  .portfolio-row {
    height: 100%;
    width: 90%;
    margin: 5rem auto;
    padding: 1rem 0;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 100%;
      margin: 0 1rem;
      box-shadow: none;
      border-radius: 10px;
      h4 {
        font-size: 1.6rem;
      }
    }
  }
`;

const StyledPageHeader = styled(PageHeader)`
  width: 90%;
  margin: 3rem auto;

  position: relative;
  div {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  p {
    margin-left: 0.5rem;
    display: inline;
  }
  p:hover {
    text-decoration: underline;
  }
`;

const ImagesGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  grid-auto-flow: dense;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 15px rgba(176, 176, 176, 0.2);
    border-radius: 15px;
    object-fit: cover;
  }
`;

const LoadMore = styled.div`
  text-align: center;
  width: 90%;
  margin: 3rem auto 5rem;
  h4 {
    border: 3px solid #04befe;
    cursor: pointer;
    display: inline;
    padding: 1rem 2rem;
    transition: all 0.3s ease-in;
  }
  h4:hover {
    border-radius: 10px;
    background: #04befe;
  }
`;

export default PortfolioDetails;
