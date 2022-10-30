import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import CountUp from 'react-countup';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="heading">
        <span className="title" style={{color: darkMode ? "white": ""}}>Experience</span>
      </div>
      <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp end={3} duration={3}/>+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp end={20} duration={3}/>+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp end={7} duration={3}/>+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
    </div>
    
  );
};

export default Experience;
