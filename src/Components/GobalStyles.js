import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    background: #434343;
    color: #f5f5f5;
    font-family: 'Montserrat', sans-serif;
}
h1{
    font-size: 4.5rem;
}
h2{
    font-size: 4rem;
}
h3{
    font-size: 3rem;
    font-weight: 600;
}
h4{
    font-size: 2rem;
    font-weight: 600;
}
h5{
    font-size: 1.6rem;
}
p{
    font-size: 1.6rem;
}
span{
    color: #04BEFE;
}
span#required{
    color: #ed2a1e;
}
span.special-font{
    font-family: "Cinzel Decorative", sans-serif;
}
a {
    text-decoration: none;
    color: #f5f5f5;
  }
  .hide{
      overflow: hidden;
  }
.active {
    clip-path: circle(1250px at 100% -5%);
    -webkit-clip-path: circle(1250px at 100% -5%);
  }
`;

export default GlobalStyles;
