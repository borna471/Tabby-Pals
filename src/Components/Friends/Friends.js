import "./Friends.css"
import React, { useState, useEffect } from "react";

function Friends(props) {
    
    const [counter, setCounter] = useState(localStorage.getItem("counter"));

    function add() {
        if (!localStorage.getItem("counter")) {   
            localStorage.setItem("counter", 0);
            setCounter(0)  
        }


        let prev = localStorage.getItem("counter")
        localStorage.setItem("counter", parseInt(prev) + 1);
        setCounter(localStorage.getItem("counter"))
        
    
    }

    function sub() {
        if (!localStorage.getItem("counter")) {
            localStorage.setItem("counter", 0);
          setCounter(0)
        }


        let prev = localStorage.getItem("counter")
       localStorage.setItem("counter", parseInt(prev) - 1);
       setCounter(localStorage.getItem("counter"))
    }

    return (
    <div class="friends-container"> 
        <div class="image-container">
            <img 
            width= "130"
            border-radius = "15"
            className = "pfp"
            src={props.image}
            />
        </div>

        <div class="description-container">
            <h2> {props.name}</h2>
            <div class="counters">
                {/* <h4> {localStorage.getItem("counter")[0]}</h4>
                <h4> {localStorage.getItem("counter")[1]}</h4>
                <h4> {localStorage.getItem("counter")[2]}</h4>
                <h4> {localStorage.getItem("counter")[3]}</h4> */}
            </div>
            <h4> {localStorage.getItem("counter")}</h4>
            <div class="buttons">
                <div className="add-buttons">
                    <button className="add-button" onClick={add}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className="add-button" onClick={add}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className="add-button" onClick={add}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    
                </div>

                <div className="sub-buttons">
                    <button className ="sub-button" onClick={sub}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className ="sub-button" onClick={sub}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className ="sub-button" onClick={sub}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    
                </div>
            </div>
        </div>

    </div>
    )

}

export default Friends;