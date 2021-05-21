import { createGlobalStyle } from "styled-components";

const HomeResponsive = createGlobalStyle`
    html{
        @media screen and (max-width: 1400px){
            .timeless{
                margin: 12rem auto 0;
            }

        }
        @media screen and (max-width: 1350px){
            .hero{
                .hero-img-container{
                    padding: 2rem 0 0 0;
                    width: 65%;
                    img{
                      width: 100%;
                    }
                }
            }
          .bottom{
                height: 75vh;
            }

        }
        @media screen and (max-width: 1260px){
            .hero{
                .hero-img-1{
                    height: 95%;
                }
                .hero-img-container{
                    padding: 3rem 3rem 0 0;
                    width: 70%;
                    height: 90%;
                    img{
                      width: 100%;
                    }
                }
            }
          .timeless{
               margin: 10rem auto 0;
                h2{
                    margin: 0 13%;
                }
                .timeless-img-container{
                    img{
                        margin: 3rem;
                    }
                }
            }

        }
        @media screen and (max-width: 1150px){
            .hero{
                .hero-img-1{
                    height: 95%;
                }
                .hero-img-container{
                    padding: 3rem 0rem 0 0;
                    width: 55%;
                    height: 90%;
                    img{
                      width: 100%;
                    }
                }
            }
            .hola-container{
                .hola-section{
                    .hola-image{
                        flex-grow: 2;
                        width: 100%;
                    }
                    .hola-text{
                        flex-grow: 1;
                margin: 4rem 0;
                    }
                }
            }
                    .bottom{
                height: 65vh;
            }
        }
        @media screen and (max-width: 1050px){
            .hero{
                .hero-img-1{
                    height: 80%;
                }
                .hero-img-container{
                    padding: 3rem 3rem 0 0;
                    width: 70%;
                    height: 90%;
                    img{
                      width: 100%;
                    }
                }
            }
              .timeless{
                margin: 10rem auto 0;
                h2{
                    margin: 0 5%;
                }
                .timeless-img-container{
                    img{
                        margin: 2rem;
                    }
                }
                .quote{
                    text-align: right;
                }
            }
            .videography{
                .video-text{
                    top: 20%;
                    h2{
                        width: 90%;
                    }
                }
            }
                    .hola-container{
                .hola-section{
                    .hola-image{
                        flex-grow: 2;
                        width: 100%;
                    }
                    .hola-text{
                        flex-grow: 1;
                margin: 2rem 0;
                    }
                }
            }

        }

        @media screen and (max-width: 900px){
            .videography{
                .video-text{
                    top: 15%;
                    h2{
                        width: 100%;
                    }
                }
            }
                              .hola-container{
                .hola-section{
                    .hola-image{
                        flex-grow: 2;
                        width: 100%;
                    }
                    .hola-text{
                        padding-left: 2rem;
                        h2{
                            font-size: 3rem;
                            letter-spacing: 2px;
                        }
                        flex-grow: 1;
                margin: 0rem 0;
                    }
                }
            }
            .bottom{
                height: 50vh;
            }
        }

        @media screen and (max-width: 850px){
                h2{
                    font-size: 3.5rem;
                }
            .hero{
                margin-bottom: 0;
                .hero-img-1{
                    height: 60%;
                }
                .hero-img-container{
                    padding: 3rem 3rem 0 0;
                    width: 75%;
                    height: 70%;
                    img{
                      width: 100%;
                    }
                }
            }
              .timeless{
                margin: 0rem auto 0;
                   h2{
                    margin: 0 3%;
                }
            }
                  .videography{
                .video-text{
                    top: 15%;
                    h2{
                        width: 98%;
                    }
                }
            }
            .bottom{
                height: 45vh;
            }
        }
        @media screen and (max-width: 700px){
                h2{
                    font-size: 3rem;
                }
            .hero{
                height: 60vh;
                .hero-img-1{
                    height: 65%;
                }
                .hero-img-container{
                    padding: 3rem 3rem 0 0;
                    width: 75%;
                    height: 60%;
                    img{
                      width: 100%;
                    }
                }
            }
            .timeless{
                h2 + p{
                    margin: 2rem 0;
                }
            }
                          .videography{
                .video-text{
               justify-content: space-evenly;
               top: 10%;
                }
            }
            .hola-container{
                .hola-section{
                    flex-direction: column;
                    align-items: center;
                    .hola-image{
                        flex-grow: 2;
                        width: 80%;
                    }
                    .hola-text{
                        padding-left: 2rem;
                        flex-grow: 1;
                margin: 2rem 2rem 0;
                        h2{
                            font-size: 3rem;
                            letter-spacing: 2px;
                        }
                        p{
                            margin: 1rem 0;
                        }
                    }
                }
            }
                .bottom{
                height: 40vh;
            }
        }
        @media screen and (max-width: 600px){
                h2{
                    font-size: 2.5rem;
                }
            .hero{
                .hero-img-1{
                    height: 60%;
                }
                .hero-img-container{
                    padding: 2rem 2rem 0 0;
                    width: 75%;
                    height: 65%;
                    img{
                      width: 100%;
                    }
                }
            }
            .timeless{
           .timeless-img-container{
                img{
                    margin: 1rem;
                 }
            }
            .quote{
                p{
                    letter-spacing: 1px;
                }
            }
            }
                .bottom{
                height: 35vh;
            }
        }
        @media screen and (max-width: 500px){
                h2{
                    font-size: 2rem;
                }
            .hero{
                height: 50vh;
                .hero-img-1{
                    height: 70%;
                }
                .hero-img-container{
                    padding: 2rem 2rem 0 0;
                    width: 70%;
                    height: 70%;
                    img{
                      width: 100%;
                    }
                }
            }
                   .timeless{
                h2 + p{
                    margin: 1rem 0;
                }
              .quote{
                p{
                    letter-spacing: 0px;
                }
            }
            }
            .videography{
                .video-text{
                    justify-content: center;
                    top: 0%;
                }
            }
    .bottom{
                height: 28vh;
            }
        }
    }
`;

export default HomeResponsive;
