import styled from "styled-components";

export const PageHeader = styled.div`
  text-align: center;
  vertical-align: center;
  h1 {
    margin: 3rem 0;
    font-family: "Cinzel Decorative", sans-serif;
  }
`;

export const StyledContactButton = styled.div`
  background: linear-gradient(270deg, #4481eb 0%, #04befe 100%);
  border-radius: 1rem;
  padding: 1rem 1.5rem;
`;

// remove the class hide from body whenever navigated from the burger menu
export const bodyResetter = () => {
  document.querySelector("body").classList.remove("hide");
};
