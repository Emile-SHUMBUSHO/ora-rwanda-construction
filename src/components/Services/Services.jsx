import React from "react";
import {motion} from "framer-motion";
import Card from "../Card/Card";
import Heading from "../Headings/headings"
import realEstate from "../../img/real-estate.png";
import construction from "../../img/home.png";
import "./Services.css";
import design from "../../img/house.png";
import Background from "../../img/10.jpg";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${ Background })`
  };
  return (
    <div id="services" className="serviceContainer">
        <img src={Background} className="bckImage" alt="" style={{ width: "100%" }} />
        <div class="overlay-mf"></div>
            <div className="cards">
            {/* first card */}
            <motion.div
            initial={{ left: "40rem", top:"-2rem" }}
            whileInView={{ left: "25rem" }}
            transition={transition}
            >
            <Card
                emoji={design}
                heading={"Design"}
                detail={"We have more than 20 years of design experience, and our services are globally covering. Contact us to get free design services, limited opportunities. Free Of Charge."}
            />
            </motion.div>
            {/* second card */}
            <motion.div
            initial={{ left: "4rem", top: "3rem" }}
            whileInView={{ top: "10rem" }}
            transition={transition}
            >
            <Card
                emoji={realEstate}
                heading={"Construction"}
                detail={"Need Help Bringing Your Construction Ideas to Life? Consult with Our Professionals Today! Milestone Ltd Engineering Contractors Is Your Obvious Choice for Great Construction Services."}
            />
            </motion.div>
            {/* 3rd */}
            <motion.div
            initial={{ top: "20rem", left: "40rem" }}
            whileInView={{ left: "25rem" }}
            transition={transition}
            >
            <Card
                emoji={construction}
                heading={"Real Estate"}
                detail={
                "Get Comprehensive Property Management Service From Milestone Ltd. Contact Us Now. Milestone Ltd Offers A Range Of Building Management Services. Contact Us Now. Buying or Selling? Types: Short-term Rentals, Apartment/Flat, Serviced Apartments."
                }
                color="rgba(252, 166, 31, 0.45)"
            />
            </motion.div>
            </div>
    </div>
    
  );
};

export default Services;
