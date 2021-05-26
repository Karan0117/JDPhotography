import React from "react";
// svg
import notFoundSVG from "../media/images/common/not-found.svg";
// components
import { PageHeader } from "./StyledComponent";
import { StyledContactButton } from "./StyledComponent";
import Nav from "./Nav";
import NavResponsive from "./NavResponsive";
// styling
import styled from "styled-components";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
// routes
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <Nav />
      <NavResponsive />
      <StyledNotFound>
        <img src={notFoundSVG} alt="" />
        <PageHeader>
          <h1>Not Found</h1>
        </PageHeader>
        <h3>Sorry, we are unable to find that page.</h3>
        <div className="getting-back">
          <h4>
            Please use the navigation bar or click the button to get to the home
            page.
          </h4>
          <Link to="/">
            <StyledContactButton>
              <h4>Home Page</h4>
            </StyledContactButton>
          </Link>
        </div>
      </StyledNotFound>
    </motion.div>
  );
};

const StyledNotFound = styled.div`
  height: 100vh;
  width: 90%;
  margin: 5rem auto;
  img {
    width: 500px;
  }
  text-align: center;
  > h3 {
    margin: 5rem 0 3rem;
  }
  .getting-back {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    div {
      margin: 0 2rem;
    }
  }
`;

export default PageNotFound;
