import React from "react";
// components
import Nav from "../Nav";
import Service from "./Service";
import OtherService from "./OtherService";
import Value from "./Value";
import Footer from "../Footer";
import { PageHeader, bodyResetter } from "../StyledComponent";
import NavResponsive from "../NavResponsive";
// services data
import data from "../../data/servicesData.json";
// values data
import valuesData from "../../data/valuesData.json";
// images
import serviceCalendarImg from "../../media/images/services/service-calendar.svg";
import serviceDeliveryImg from "../../media/images/services/service-delivery.svg";
import valuesTruckImg from "../../media/images/services/values-truck.svg";
import valuesDollarImg from "../../media/images/services/values-dollar.svg";
import valuesCustomerImg from "../../media/images/services/values-customer.svg";
import serviceConnectImg from "../../media/images/services/service-connect.svg";
// SVG Components
import WeddingSVG from "./svg/WeddingSVG";
import AdSVG from "./svg/AdSVG";
import MusicAlbumSVG from "./svg/MusicAlbumSVG";
import PromoSVG from "./svg/PromoSVG";
import ShortFilmSVG from "./svg/ShortFilmSVG";
import UnpluggedSVG from "./svg/UnpluggedSVG";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// responsive
import ServicesResponsive from "../responsive/ServicesResponsive";

const Services = () => {
  window.scrollTo(0, 0);
  bodyResetter();

  const servicesData = data.services;
  const otherServicesData = [
    "Music Bands",
    "Cinematographers",
    "DJs",
    "Dhols",
    "Singers",
    "Makeup Artists",
    "Photographers",
    "Choreographers",
    "Managers",
  ];
  const valuesImg = [valuesTruckImg, valuesDollarImg, valuesCustomerImg];
  const valuesInfo = valuesData.values;

  const SvgCollection = [
    WeddingSVG,
    AdSVG,
    MusicAlbumSVG,
    PromoSVG,
    ShortFilmSVG,
    UnpluggedSVG,
  ];

  return (
    <>
      <ServicesResponsive />
      <motion.div
        variants={pageAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        <Nav />
        <NavResponsive />
        <PageHeader className="service-header">
          <h1>Services</h1>
        </PageHeader>
        <StyledServices className="services">
          {servicesData.map((serviceData, index) => (
            <Service
              serviceData={serviceData}
              SvgCollection={SvgCollection[index]}
              WeddingSVG={WeddingSVG}
              key={index}
            />
          ))}
        </StyledServices>
        <CalendarEvents className="calendar-events">
          <img src={serviceCalendarImg} alt="" />
          <div className="calendar-content">
            <h3>Events and Talent Management</h3>
            <p>Plan your events in advance and get amazing packages from us!</p>
          </div>
        </CalendarEvents>
        <StyledOtherServices className="other-services">
          <h3>We also provide</h3>
          <div className="other-services-block">
            <div className="other-services-content">
              {otherServicesData.map((otherData, index) => (
                <OtherService otherData={otherData} key={index} />
              ))}
            </div>
            <img src={serviceDeliveryImg} alt="" />
          </div>
        </StyledOtherServices>
        <StyledValue className="values">
          <ValuesContent className="values-content">
            <h3>Values we pride upon</h3>
            <div className="value-blocks">
              {valuesInfo.map((info, index) => (
                <Value info={info} imgInfo={valuesImg[index]} key={index} />
              ))}
            </div>
          </ValuesContent>
        </StyledValue>
        <SocialMediaContact className="social-media-contact">
          <img src={serviceConnectImg} alt="" />
          <div className="content">
            <h3>Get all the latest informtion on events and offers.</h3>
            <div>
              <h4>Connect with us</h4>
            </div>
          </div>
        </SocialMediaContact>
        <Footer />
      </motion.div>
    </>
  );
};

const StyledServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  margin-bottom: 5rem;
`;

const CalendarEvents = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 5rem;
  img {
    width: 40%;
  }
  div {
    text-align: center;

    h3 {
      margin-bottom: 5rem;
      font-family: "Cinzel Decorative", sans-serif;
    }
    p {
      opacity: 0.8;
    }
  }
`;

const StyledOtherServices = styled.div`
  width: 90%;
  margin: 5rem auto 5rem;
  text-align: center;
  h3 {
    font-family: "Cinzel Decorative", sans-serif;
  }
  .other-services-block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    img {
      width: 100%;
      flex-grow: 1;
    }
  }
`;

const StyledValue = styled.div`
  background: #121212;
`;

const ValuesContent = styled.div`
  width: 90%;
  margin: 5rem auto;
  text-align: center;
  padding: 2rem 0 4rem;
  h3 {
    font-family: "Cinzel Decorative", sans-serif;
    margin: 2rem 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SocialMediaContact = styled.div`
  width: 90%;
  margin: 0 auto 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 55%;
  }
  .content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    margin-left: 10rem;
    div {
      background: linear-gradient(270deg, #4481eb 0%, #04befe 100%);
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      margin-top: 5rem;
    }
  }
`;

export default Services;
