import React from "react";
// styling
import styled from "styled-components";

const Service = ({ serviceData, SvgCollection, WeddingSVG }) => {
  return (
    <>
      <ServiceBlock className="service-block">
        <SvgCollection />
        <h4>{serviceData.title}</h4>
        <p>{serviceData.blocks[0].content}</p>
      </ServiceBlock>
    </>
  );
};

const ServiceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 1 1 35rem;
  min-width: 35rem;
  min-height: 45rem;
  background: #2c2c2c;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 0px 15px 25px rgba(176, 176, 176, 0.25);
  border-radius: 20px;
  text-align: center;
  img {
    max-width: 100%;
  }
  h4 {
    margin: 2rem 0.5rem;
  }
  p {
    width: 90%;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
`;

export default Service;
