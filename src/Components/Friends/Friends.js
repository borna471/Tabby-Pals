import "./Friends.css"
import React, { useState, useEffect } from "react";

function Friends(props) {
    
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(localStorage.getItem("counter"))
    }, [])

    function add() {
        // if (!localStorage.getItem("counter")) {   
        //     setCounter(0)  
        // }
        
        localStorage.setItem("counter", parseInt(counter) + 1);
        setCounter(localStorage.getItem("counter"))
        
    
    }

    function sub() {
        // if (!localStorage.getItem("counter")) {
        //   setCounter(0)
        // }
    
       localStorage.setItem("counter", parseInt(counter) - 1);
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
            <h4> {counter}</h4>
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