import React from "react";
// styling and animation
import styled from "styled-components";
// route
import { useHistory } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../../actions/imageActions";
import { resetCounter } from "../../actions/counterAction";

const ImageCard = ({ name, imgFile }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counterValue.counter);

  // event handler
  const portfolioDetailHandler = (event) => {
    dispatch(resetCounter());
    let selectedTerm = event.target.children[1].innerText;
    selectedTerm = selectedTerm.replace(/\s/g, "-").toLowerCase();

    // loading images from the API
    dispatch(loadImages(selectedTerm, counterValue));
    history.push(`/portfolio/${selectedTerm}`);
  };

  return (
    <StyledCard onClick={portfolioDetailHandler} className="image-card">
      <img src={imgFile} alt="" />
      <h4>{name}</h4>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #2c2c2c;
  box-shadow: 0px 10px 15px rgba(176, 176, 176, 0.2);
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  :hover img {
    filter: grayscale(0);
  }
  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    filter: grayscale(0.3);
    pointer-events: none;
    transition: all 0.2s ease-out;
  }
  h4 {
    margin: 2rem;
    pointer-events: none;
  }
`;
export default ImageCard;
