import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NotFound.css";

const NotFound = () => {
    document.body.style.backgroundColor = "#61831F";
    return (
        <div className="notfound">
            <div className="d-flex flex-row">
                <div className="col-md notfoundtitle">
                    <h2>404: Not Found</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="card notfoundcard">
                    <div className="row notfoundrow d-flex justify-content-center">
                        <div className="col-md-12">
                            <p className="card-text notfoundcardtext">Page not found: You reached a pothole in your way. Please come back home.</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3">
                            <Link to="/"><button className="btn-404">Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;