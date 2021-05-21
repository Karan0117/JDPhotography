import React from "react";
// styling
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
// components
import Toggle from "./Toggle";

const FAQSection = () => {
  return (
    <StyledFAQ className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              modi dolores reiciendis a quos repellendus ea ut eaque officia
              sint!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are My Steps?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              modi dolores reiciendis a quos repellendus ea ut eaque officia
              sint!
            </p>
          </div>
        </Toggle>
        <Toggle title={"What Is The Bundle Price?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              modi dolores reiciendis a quos repellendus ea ut eaque officia
              sint!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              modi dolores reiciendis a quos repellendus ea ut eaque officia
              sint!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFAQ>
  );
};

const StyledFAQ = styled.div`
  width: 90%;
  margin: 5rem auto;
  h2 {
    span {
      display: block;
    }
  }
  .question {
    cursor: pointer;
  }
  h4 {
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0 0.5rem 0;
    p {
      padding: 0 0 1rem 0;
      font-weight: 400;
    }
  }
  .faq-line {
    width: 100;
    background: #04befe;
    height: 0.5rem;
    margin: 2rem 0 4rem;
    border-radius: 10px;
  }
`;

export default FAQSection;
