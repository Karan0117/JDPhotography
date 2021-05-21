import React from "react";
// styling
import styled from "styled-components";

const OtherService = ({ otherData }) => {
  return (
    <StyledOtherServiceBlock className="other-service-block">
      <h4>{otherData}</h4>
    </StyledOtherServiceBlock>
  );
};

const StyledOtherServiceBlock = styled.div`
  flex: 1 1 15rem;
  background: #2c2c2c;
  box-shadow: 0px 10px 25px rgba(176, 176, 176, 0.25);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin: 1rem;
  text-align: center;
`;

export default OtherService;
