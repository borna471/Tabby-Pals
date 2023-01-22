import "./Profile.css";
import React, { useState, useEffect } from "react";

function Profile(props) {

    // const [counter, setCounter] = useState(localStorage.getItem("counter"));

    return (
        <div className="profile-container">
            <div className="profile-container-upper">
                <img 
                    className="profile-img"
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
                        <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/hot-beverage_2615.png"/>
                           <h4> {localStorage.getItem("counter1")}</h4>
                    </div>
                           
                    <div class="icon-counter-pair">
                        <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bubble-tea_1f9cb.png"/>
                           <h4> {localStorage.getItem("counter2")}</h4>
                    </div>

                    <div class="icon-counter-pair">
                        <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/sandwich_1f96a.png"/>
                           <h4> {localStorage.getItem("counter3")}</h4>
                    </div>

                    <div class="icon-counter-pair">
                        <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/curry-rice_1f35b.png"/>
                           <h4> {localStorage.getItem("counter4")}</h4>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Profile;