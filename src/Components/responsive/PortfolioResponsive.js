import { createGlobalStyle } from "styled-components";

const PortfolioResponsive = createGlobalStyle`
    html{
        @media screen and (max-width: 1150px){
            .image-list{
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            }
            .image-card{
                h4{
                    margin: 1rem;
                }
            }
        }
        
        @media screen and (max-width: 850px){
            h1{
                font-size: 4rem;
            }
            .image-list{
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
            .image-card{
                h4{
                    margin: 0.5rem 0;
                    font-size: 1.6rem;
                }
            }
        }
        @media screen and (max-width: 800px){
            .cta{
                .cta-text{
                    padding: 0 1rem;
                }
                .cta-button{
                    padding: 1rem;
                         h4{
                        font-size: 1.8rem;
                    }
                }
                }
            }
        }
        @media screen and (max-width: 760px){
            .cta{
                .cta-text{
                    h2{
                        font-size: 3rem;
                    }
                }
                .cta-button{
                    padding: 1rem;
               
            }
        }
        @media screen and (max-width: 700px){
            .image-list{
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
            .image-card{
                h4{
                    margin: 2rem;
                    font-size: 2rem;
                }
            }
        }
        @media screen and (max-width: 625px){
            .image-list{
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
            .image-card{
                h4{
                    padding: 1rem 0 0 0 ;
                    font-size: 2rem;
                }
            }
            .cta{
                .cta-text{
                    padding: 0;
                }
            }
        }

        @media screen and (max-width: 600px){
            .cta{
                .cta-text{
                    h2{
                        font-size: 2.5rem;
                    }
                    h1{
                        font-size: 6rem;
                    }
                }
                .cta-button{
                    padding: 1rem 0.5rem;
                }
            }
        }

        @media screen and (max-width: 500px){
            .image-list{
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
            .image-card{
                h4{
                    padding: 0.5rem 0 0 0;
                    margin: 1rem;
                    font-size: 1.6rem;
                }
            }
            .cta{
                .cta-button{
                    padding: 0;
                }
            }
        }
    }
`;

export default PortfolioResponsive;
