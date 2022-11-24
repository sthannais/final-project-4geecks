import React from "react";
import { FaCamera, FaCarCrash, FaCheck, FaMapMarkedAlt } from "react-icons/fa";
import Showcase from "../components/Showcase";
import "../styles/Home.css";

const Home = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <div className="home">
            <div className="row rowhome d-flex justify-content-center">
                <div className="col-md-5 showcase d-flex justify-content-center">
                    <div className="showcase-carousel">
                        <Showcase />
                    </div>
                </div>
                <div className="col-md-6 homecards">
                    <div className="row topcards d-flex justify-content-around">
                        <div className="col-lg-3 homecard">
                            <div className="homeicon">
                                <FaCamera />
                            </div>
                            <h2>Report Pothole</h2>
                            <p>
                                Upload your pictures and location of pothole you wish to be repair.
                            </p>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                        <div className="col-lg-3 homecard">
                            <div className="homeicon">
                                <FaCheck />
                            </div>
                            <h2>Repairs</h2>
                            <p>
                                We give municipality tools to make street's repairs easier.
                            </p>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                    </div>
                    <div className="row botcards d-flex justify-content-around">
                        <div className="col-lg-3 homecard">
                            <div className="homeicon">
                                <FaMapMarkedAlt />
                            </div>
                            <h2>Map</h2>
                            <p>
                                You can view very report on our map and filter the data.
                            </p>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                        <div className="col-lg-3 homecard">
                            <div className="homeicon">
                                <FaCarCrash />
                            </div>
                            <h2>Avoid Accidents</h2>
                            <p>
                                Good state streets are very important to avoid traffic accidents.
                            </p>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
