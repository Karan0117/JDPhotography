import React, { useRef } from "react";
// styling
import styled from "styled-components";

const GridImg = ({ imgSrc, imgID }) => {
  const gridImgRef = useRef();

  const expandHandler = (event) => {
    console.log(event.target);
    console.log(gridImgRef);
    gridImgRef.current.style.display = "block";
  };

  return (
    <div>
      <StyledImg src={imgSrc} alt={imgID} onClick={expandHandler} />
      {/* <ExpandedContainer
        ref={gridImgRef}
        className="expanded-container"
      ></ExpandedContainer> */}
    </div>
  );
};

const StyledImg = styled.img`
  cursor: pointer;
`;

// const ExpandedContainer = styled.div`
//   position: absolute;
//   margin: 0;
//   display: none;
//   background: black;
//   height: 100vh;
//   width: 100vw;
//   z-index: 100;
// `;

export default GridImg;
