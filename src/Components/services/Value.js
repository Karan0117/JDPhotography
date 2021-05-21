import React from "react";
// styling
import styled from "styled-components";

const Value = ({ info, imgInfo }) => {
  return (
    <ValueBlock className="value-block">
      <img src={imgInfo} alt="" />
      <div className="value-content">
        <h4>{info.title}</h4>
        <p>{info.content}</p>
      </div>
    </ValueBlock>
  );
};

const ValueBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #2c2c2c;
  flex-grow: 1;
  border-radius: 10px;
  margin: 1rem 2rem;
  padding: 2rem 1.5rem;
  max-width: 40rem;
  text-align: left;
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin-left: 3rem;
    text-align: left;
    h4 {
      font-weight: 400;
      margin-bottom: 1rem;
      align-self: flex-start;
    }
    p {
      opacity: 0.8;
    }
  }
`;

export default Value;
