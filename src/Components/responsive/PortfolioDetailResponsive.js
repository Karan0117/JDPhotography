import { createGlobalStyle } from "styled-components";

const PortfolioDetailResponsive = createGlobalStyle`
    @media screen and (max-width: 1250px){
        .other-portfolios{
            height: 65vh;
            .portfolio-row{
                flex-wrap: wrap;
                .image-card{
                    flex: 1 1 20rem;
                    margin: 1rem;
                }
                img{
                    width: 100%;
                }
                h4{
                    font-size: 1.6rem;
                    font-weight: normal;
                    margin: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 1050px){
        .portfolio-header{
            h1{
                font-size: 4rem;
            }
        }
        .image-grid{
            grid-template-columns: auto auto;
        }
    }

    @media screen and (max-width: 993px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 19rem;
                }
            }
        }
    }
    @media screen and (max-width: 948px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 18rem;
                }
            }
        }
    }
    @media screen and (max-width: 904px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 17rem;
                }
            }
        }
    }
    @media screen and (max-width: 860px){
        .other-portfolios{
            height: 50vh;
            .portfolio-row{
                .image-card{
                    flex: 1 1 16rem;
                }
            }
        }
    }
    @media screen and (max-width: 814px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 15rem;
                }
            }
        }
    }
    @media screen and (max-width: 770px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 14rem;
                }
            }
        }
    }
    @media screen and (max-width: 726px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 13rem;
                }
            }
        }
    }
    @media screen and (max-width: 681px){
        .other-portfolios{
            .portfolio-row{
                .image-card{
                    flex: 1 1 12rem;
                }
            }
        }
    }

    @media screen and (max-width: 650px){
        .portfolio-header{
            h1{
                font-size: 3rem;
            }
        }
        .image-grid{
            grid-template-columns: auto;
        }
    }
@media screen and (max-width: 637px){
    .other-portfolios{
        .portfolio-row{
            .image-card{
                flex: 1 1 11rem;
            }
        }
    }
}
@media screen and (max-width: 592px){
    .other-portfolios{
        height: 45vh;
        .portfolio-row{
            .image-card{
                flex: 1 1 10rem;
            }
        }
    }
}
@media screen and (max-width: 548px){
    .other-portfolios{
        height: 45vh;
        .portfolio-row{
            .image-card{
                flex: 1 1 9rem;
            }
        }
    }
}
@media screen and (max-width: 503px){
    .other-portfolios{
        height: 40vh;
        .portfolio-row{
            .image-card{
                flex: 1 1 8rem;
            }
        }
    }
}
@media screen and (max-width: 495px){
    .other-portfolios{
        height: 40vh;
        .portfolio-row{
            .image-card{
                flex: 1 1 7rem;
            }
        }
    }
}
`;

export default PortfolioDetailResponsive;
