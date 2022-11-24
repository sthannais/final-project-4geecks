import React from 'react';
import "../styles/About.css";

const About = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <div className="about">
            <div className="d-flex flex-row">
                <div className="col-md abouttitle">
                    <h2>About us</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="card aboutcard">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="./assets/img/RoadAbout.jpg" className="img-fluid rounded-start" alt="About us"/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <p className="card-text aboutcardtext">Somos una empresa dedicada a la creación de base de datos actualizada a tiempo real de baches en las calles de nuestra ciudad. Con nosotros puedes reportar baches para que sean reparados y seguir su proceso de reparacion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;