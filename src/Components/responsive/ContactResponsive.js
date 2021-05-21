import { createGlobalStyle } from "styled-components";

const ContactResponsive = createGlobalStyle`
    html{
        @media screen and (max-width: 1200px){
            .main{
                .image-section{   
                }
                .contact-form{
                    width: 70%;
                }
            }
        }
        @media screen and (max-width: 1100px){
            .main{
                .image-section{   
                }
                .contact-form{
                    width: 90%;
                }
            }
        }
        @media screen and (max-width: 1000px){
            .main{
                .image-section{   
                }
                .contact-form{
                    width: 100%;
                }
            }
        }
        @media screen and (max-width: 900px){
            .main{
                flex-direction: column;
                .image-section{
                    margin-right: 0;
                    img{
                    width: 60%;
                    }
                }
            }
            .faq{
                h2{
                    font-size: 3.5rem;
                }
            }
        }
        @media screen and (max-width: 753px){
            .main{
                .image-section{
                    h3{
                        font-size: 2.5rem;
                    }
                }
            }
        }
        @media screen and (max-width: 630px){
            .main{
                .image-section{
                    h3{
                        font-size: 2.3rem;
                    }
                }
            }
            .faq{
                h2{
                    font-size: 3rem;
                }
            }
        }
    }
`;

export default ContactResponsive;
