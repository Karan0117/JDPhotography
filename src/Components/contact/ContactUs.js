import React from "react";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageHeader } from "../StyledComponent";
import { pageAnimation } from "../animation";
// responsive
import ContactResponsive from "../responsive/ContactResponsive";
// components
import Nav from "../Nav";
import NavResponsive from "../NavResponsive";
import FAQSection from "./FAQSection";
import Footer from "../Footer";
import { bodyResetter } from "../StyledComponent";
// images
import contactTeamImg from "../../media/images/contact/contact-team.svg";

const ContactUs = () => {
  // scroll to the top of the page anytime this component get mounted on the React Tree
  window.scrollTo(0, 0);
  bodyResetter();
  return (
    <>
      <ContactResponsive />
      <motion.div
        variants={pageAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Nav />
        <NavResponsive />
        <PageHeader>
          <h1>Contact</h1>
        </PageHeader>
        <StyledContact className="main">
          <ImageSection className="image-section">
            <h3>Book the best team to work for your event!</h3>
            <p>
              Hire from a variety of talents that meets your need and cater your
              services.
            </p>
            <img src={contactTeamImg} alt="" />
          </ImageSection>
          <StyledForm action="#" autoComplete="off" className="contact-form">
            <StyledNameRow className="name-row">
              <div>
                <label htmlFor="fname">
                  <p>
                    First Name: <span id="required">*</span>
                  </p>
                </label>
                <input type="text" id="fname" name="fname" placeholder="Adam" />
              </div>
              <div>
                <label htmlFor="lname">
                  <p>
                    Last Name: <span id="required">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Steve"
                />
              </div>
            </StyledNameRow>

            <StyledRow className="email-row">
              <label htmlFor="email">
                <p>
                  Email: <span id="required">*</span>
                </p>
              </label>
              <input
                required
                type="text"
                id="email"
                name="email"
                placeholder="adam@example.com"
              />
            </StyledRow>
            <StyledRow className="phone-row">
              <label htmlFor="email">
                <p>
                  Phone Number: <span id="required">*</span>
                </p>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+13128731921"
              />
            </StyledRow>
            <StyledServiceRow className="service-row">
              <p>
                Services:<span id="required">*</span>{" "}
              </p>
              <ServiceRow>
                <div>
                  <input
                    type="checkbox"
                    id="wedding-planner"
                    name="wedding-planner"
                  />
                  <label htmlFor="wedding-planner">
                    <p>Wedding Planner</p>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="music-band" name="music-band" />
                  <label htmlFor="music-band">
                    <p>Music Band</p>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="dj" name="dj" />
                  <label htmlFor="dj">
                    <p>DJ</p>
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="videographer"
                    name="videographer"
                  />
                  <label htmlFor="videographer">
                    <p>Videographer</p>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="singer" name="singer" />
                  <label htmlFor="singer">
                    <p>Singer</p>
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="wedding-photohrapher"
                    name="wedding-photohrapher"
                  />
                  <label htmlFor="wedding-photohrapher">
                    <p>Wedding Photographer</p>
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="choreographer"
                    name="choreographer"
                  />
                  <label htmlFor="choreographer">
                    <p>Choreographer</p>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="music-album" name="music-album" />
                  <label htmlFor="music-album">
                    <p>Music Album</p>
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="product-shot"
                    name="product-shot"
                  />
                  <label htmlFor="product-shot">
                    <p>Poduct Shot</p>
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="makeup-artist"
                    name="makeup-artist"
                  />
                  <label htmlFor="makeup-artist">
                    <p>Makeup Artist</p>
                  </label>
                </div>
              </ServiceRow>
            </StyledServiceRow>
            <StyledNameRow className="date-row">
              <div>
                <label htmlFor="from-date">
                  <p>
                    From <span id="required">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="from-date"
                  name="from-date"
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <div>
                <label htmlFor="end-date">
                  <p>
                    Till: <span id="required">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="end-date"
                  name="end-date"
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </StyledNameRow>
            <StyledRow className="commect-row">
              <label htmlFor="comment">
                <p>
                  Comments: <span id="required">*</span>
                </p>
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="70"
                rows="10"
                placeholder="Please describe your event and requirements."
              ></textarea>
            </StyledRow>
            <SubmitButton>
              <h4>Submit</h4>
            </SubmitButton>
          </StyledForm>
        </StyledContact>
        <FAQSection />
        <Footer />
      </motion.div>
    </>
  );
};

const StyledContact = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 8;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 5rem;
  img {
    width: 80%;
  }
  h3 {
    margin-bottom: 3rem;
  }
  p {
    margin-bottom: 5rem;
    opacity: 0.8;
  }
`;

const StyledForm = styled.form`
  width: 50%;
  .name-row,
  .email-row,
  .phone-row,
  .service-row {
    width: 100%;
  }
`;

const StyledNameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  div:first-child {
    margin-right: 5rem;
  }
  div {
    flex: 1 1 10rem;
    label {
      p {
        opacity: 0.8;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
      }
    }
    input {
      width: 100%;
      height: 4rem;
      border: 1px solid rgb(245, 245, 245, 0.5);
      border-radius: 10px;
      background: #353434;
      color: #f5f5f5;
      padding: 0 1rem;
      font-size: 1.6rem;
    }
    input:first-child {
    }
    input:focus {
      outline: none;
      border: 2px solid rgb(245, 245, 245, 1);
    }
  }
`;

const StyledRow = styled.div`
  margin: 1rem 1rem 1rem 0;
  label {
    p {
      opacity: 0.8;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  }
  input,
  textarea {
    width: 100%;
    height: 4rem;
    margin-right: 2rem;
    border: 1px solid rgb(245, 245, 245, 0.5);
    border-radius: 10px;
    background: #353434;
    color: #f5f5f5;
    padding-left: 1rem;
    font-size: 1.6rem;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border: 2px solid rgb(245, 245, 245, 1);
  }

  textarea {
    height: 15rem;
    width: none;
    resize: none;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const StyledServiceRow = styled.div`
  margin: 2rem 0;
  p {
    padding: 0 1rem 0.5rem;
    opacity: 0.8;
    font-size: 1.2rem;
  }
`;

const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #353434;
  border: 1px solid rgb(245, 245, 245, 0.5);
  border-radius: 10px;
  padding: 0 2rem;
  div {
    flex-grow: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 1rem 0;
    label p {
      font-size: 1.6rem;
    }
    input {
      height: 3rem;
      width: 3rem;
      background-color: #353434;
      border: 2px solid rgb(245, 245, 245, 1);
    }
    input:checked {
      background-color: red;
    }
  }
`;

const SubmitButton = styled.button`
  margin: 2rem auto;
  background: linear-gradient(270deg, #4481eb 0%, #04befe 100%);
  border-radius: 1rem;
  padding: 1rem 5rem;
  border: 1px solid #4481eb;
  color: #f5f5f5;
  letter-spacing: 1px;
  font-family: "Cinzel Decorative", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ContactUs;
