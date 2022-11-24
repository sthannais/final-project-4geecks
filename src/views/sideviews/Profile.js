import React from 'react';
import img from "../../img/Profile.jpg"

const Profile = () => {
    return (
        <div className=" col-md-4 card mx-3 my-3" style={{ width: "250px" }}>
            <img className="imgProfile" src={img}/>
            <div className="card-body">
                <h5 className="card-title">User's email</h5>
                <p className="card-text">User's information</p>
                <a href="#" className="btn btn-success">Edit</a>
            </div>
        </div>
    )
}

export default Profile;