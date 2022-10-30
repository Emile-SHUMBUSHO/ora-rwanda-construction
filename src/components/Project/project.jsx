import React from "react";
import image1 from "../../img/1.jpg";
import Heading from "../Headings/headings";
import "./project.css"

const Project = ()=>{
    return(
        <div id="project">
            <Heading headings={"Projects"}/>
            <div className="slide-container">
                <div className="slide-content">
                    <div className="card-wraper">
                        <div className="card-box">
                            <div className="image-content">
                                <img src={image1}/>
                            </div>
                            <div className="card-content">
                                <h2 className="p-title">Appartment</h2>
                                <p className="description">Find apartments, homes and condos for rent in your area. Compare up to date rates and availability, HD videos, high resolution photos, pet policies and ...</p>
                                <button className="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide-content">
                    <div className="card-wraper">
                        <div className="card-box">
                            <div className="image-content">
                                <img src={image1}/>
                            </div>
                            <div className="card-content">
                                <h2 className="p-title">Appartment</h2>
                                <p className="description">Find apartments, homes and condos for rent in your area. Compare up to date rates and availability, HD videos, high resolution photos, pet policies and ...</p>
                                <button className="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="slide-content">
                    <div className="card-wraper">
                        <div className="card-box">
                            <div className="image-content">
                                <img src={image1}/>
                            </div>
                            <div className="card-content">
                                <h2 className="p-title">Appartment</h2>
                                <p className="description">Find apartments, homes and condos for rent in your area. Compare up to date rates and availability, HD videos, high resolution photos, pet policies and ...</p>
                                <button className="button">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project