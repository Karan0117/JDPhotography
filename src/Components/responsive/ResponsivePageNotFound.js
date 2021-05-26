import { createGlobalStyle } from "styled-components";

const ResponsivePageNotFound = createGlobalStyle`
    html{
        @media screen and (max-width: 700px){
            .not-found-container{
                img{
                    width: 400px;
                }
                h1{
                    font-size: 4rem;
                }
                h3{
                    font-size: 2.5rem;
                }
                .getting-back {
                    align-items: center;
                    > h4{
                    font-size: 2rem;
                }}
            }
        }
        @media screen and (max-width: 600px){
            .not-found-container{
                img{
                    width: 350px;
                }
                h1{
                    font-size: 3.5rem;
                }
                .getting-back{
                    text-align: left;
                }
            }
        }
        @media screen and (max-width: 414px){
            .not-found-container{
                img{
                    width: 250px;
                }
                h1{
                    font-size: 3rem;
                }
                h3{
                    font-size: 2rem;
                }
                   .getting-back {
                    > h4{
                    font-size: 1.6rem;
                }}
            }
        }
    }
`;

export default ResponsivePageNotFound;
