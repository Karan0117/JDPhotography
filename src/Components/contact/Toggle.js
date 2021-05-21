import React, { useState } from "react";
// styling and motion
import { motion } from "framer-motion";
import styled from "styled-components";
// images
import downArrowFilled from "../../media/images/common/down-arrow-filled.svg";
import upArrowFilled from "../../media/images/common/up-arrow-filled.svg";

const Toggle = ({ children, title }) => {
  // states
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <StyledQuestionHolder>
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? (
          <motion.img layout src={upArrowFilled} alt="" />
        ) : (
          <motion.img layout src={downArrowFilled} alt="" />
        )}
      </StyledQuestionHolder>
      {toggle ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};

const StyledQuestionHolder = styled.div`
  padding: 2rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Toggle;
