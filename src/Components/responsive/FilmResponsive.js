import { createGlobalStyle } from "styled-components";

const FilmResponsive = createGlobalStyle`
    html{
        @media screen and (max-width: 1050px){
            .main-film-body{
                .hero-film{
                    .hero-text{
                        h2{
                            font-size: 3.5rem; 
                        }
                    }
                }
            }
        }
        @media screen and (max-width: 950px){
            .main-film-body{
                .hero-film{
                    .hero-text{
                        h2{
                            font-size: 3rem; 
                        }
                    }
                }
            }
        }
        @media screen and (max-width: 900px){
            .main-film-body{
                .hero-film{
                    .hero-video{
                        width: 53%;
                    }
                }
            }
        }
        @media screen and (max-width: 850px){
            .main-film-body{
                .hero-film{
                    flex-direction: column;
                    .hero-text{
                        flex-direction: row;
                        width: 100%;
                    }
                    .hero-video{
                        margin-top: 3rem;
                        width: 75%;
                    }
                }
            }
        }
    }
`;

export default FilmResponsive;
