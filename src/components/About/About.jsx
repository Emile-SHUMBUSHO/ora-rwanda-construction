/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
import logo from "../../img/npd-clogo1.png";
import home from "../../img/home.png";
import underConstruction from "../../img/under-construction.png";
import building from "../../img/building.png";
import designTeam from "../../img/design-team.png";


const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Who we are?
          </span>
          <p className="company-description">
          Rwanda construction sector has shown great improvement in the recent past with the gains of last year likely to be replicated. According to reports from the Rwanda Development Board (RDB), although the demand and supply sides are yet to be reconciled, the increasing capital spending by the private sector and government has thrust the sector into a position of driving economic development.
          </p>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Us</button>
          </Link>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={home}/>
          </div>
          <div className="w-secCircle">
            <img src={designTeam}/>
          </div>
          <div className="w-secCircle">
            <img src={logo}/>
          </div>
          <div className="w-secCircle">
            <img src={underConstruction}/>
          </div>
          <div className="w-secCircle">
            <img src={building}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
export default About;