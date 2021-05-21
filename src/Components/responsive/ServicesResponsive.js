import { createGlobalStyle } from "styled-components";

const ServicesResponsive = createGlobalStyle`
    html{

        @media screen and (max-width: 1260px){
            .other-services{
                .other-service-block{
                    h4{
                        font-size: 1.8rem;
                    }
                }
            }
        }

        @media screen and (max-width: 1100px){
            .calendar-events{
                justify-content: space-between;
            }
              .other-services{
                .other-services-block{
                    margin-top: 2rem;
                }
            }
        }

        @media screen and (max-width: 1000px){
            .calendar-events{
                flex-direction: column;
                justify-content: space-between;
                img{
                    width: 70%;
                    margin: 4rem 0;
                }
                .calendar-content{
                    order: -1;
                    h3{
                        margin-bottom: 2rem;
                    }
                }
            }
        }

        @media screen and (max-width: 950px){
            .other-services{
                .other-services-content{
                    .other-service-block{
                        flex: 1 1 10rem;
                        padding: 2rem 1rem;
                        h4{
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 900px){
            .service-block{
                flex: 1 1 30rem;
                min-width: 30rem;
            }
              .other-services{
                .other-services-block{
                        img{
                            display: none;
                        }
                }
            }
            .values{
                .values-content{
                    .value-blocks{
                         flex-wrap: wrap;
                    }
                }
            }
        }

        @media screen and (max-width: 800px){
            .calendar-events{
                img{
                    width: 80%;
                }
            }
  
        }

        @media screen and (max-width: 770px){
            .service-block{
                min-width: 25rem;
                div{
                    width: 100%;
                }
            }
                      .social-media-contact{
                          flex-direction: column;
                img{
                    width: 85%;
                }
                .content{
                        order: -1;
                        margin-left: 0rem;
                        align-items: center;
                        h3{
                            font-size: 2.5rem;
                        }
                        h4{
                            font-size: 2rem;
                        }
                        div{
                            margin-top: 3rem;
                        }
                    }

            }
        }

        @media screen and (max-width: 563px){
            .calendar-events{
                .calendar-content{
                    h3{
                        font-size: 2.5rem;
                    }
                }
            }
        }
        @media screen and (max-width: 471px){
            .calendar-events{
                .calendar-content{
                    h3{
                        font-size: 2.3rem;
                    }
                }
            }
        }
        
    }
`;

export default ServicesResponsive;
