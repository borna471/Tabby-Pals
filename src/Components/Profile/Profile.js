import "./Profile.css";
import React, { useState, useEffect } from "react";

function Profile(props) {

    // const [counter, setCounter] = useState(localStorage.getItem("counter"));

    return (
        <div className="profile-container">
            <div className="profile-container-upper">
                <img 
                    className="profile-img"
                    width="100"
                    height="100"
                    src={props.image}
                />
                <h1 className="profile-name">{props.name}</h1>
            </div>
            <div className="profile-text">
                {/* <p className="profile-status">{props.status}</p>
                <h1 className="profile-name">{props.name}</h1> */}

            </div>
            <div className="profile-container-lower">
                <p className="profile-desc">{props.description}</p>
                <div className="icon-list">
                    {/* <img
                        className="icon-img"
                        width="50"
                        height="50"
                    /> */}

                    <div class="icon-counter-pair">
                        <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                           <h4> {localStorage.getItem("counter")}</h4>
                    </div>
                           
                    <div class="icon-counter-pair">
                        <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                           <h4> {localStorage.getItem("counter")}</h4>
                    </div>

                    <div class="icon-counter-pair">
                        <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                           <h4> {localStorage.getItem("counter")}</h4>
                    </div>

                    <div class="icon-counter-pair">
                        <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                           <h4> {localStorage.getItem("counter")}</h4>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Profile;