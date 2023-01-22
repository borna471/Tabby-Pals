import React from 'react';
import './Activity.css';

function Activity(props) {
    return (
        <div className="activity-container">
            <div className="image">
                <img
                    className="profile-img"
                    width="70"
                    src={props.image}
                />
            </div>
            <div className="text">
                <h4 className="profile-name">{props.name}</h4>
                <p className="profile-desc">{props.description}</p> 
                <div className="line"></div>
            </div>
            
        
        </div>
    )
}

export default Activity;