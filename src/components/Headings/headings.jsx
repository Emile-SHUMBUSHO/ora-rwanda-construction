import React,{useContext} from "react";
import { themeContext } from "../../Context";

import "./headings.css";

const Heading = ({headings})=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="container">
            <span className="title" style={{color: darkMode ? "white" : ""}}>{headings}</span>
        </div>
    )
}

export default Heading