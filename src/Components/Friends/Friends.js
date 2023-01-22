import "./Friends.css"
import React, { useState } from "react";

function Friends(props) {
    
    const [counter, setCounter] = useState(localStorage.getItem("counter"))

    function add() {
        if (!localStorage.getItem("counter")) {
          setCounter(0)
        }
    
       localStorage.setItem("counter", parseInt(counter) + 1);
       setCounter(localStorage.getItem("counter"))
    }

    function sub() {
        if (!localStorage.getItem("counter")) {
          setCounter(0)
        }
    
       localStorage.setItem("counter", parseInt(counter) - 1);
       setCounter(localStorage.getItem("counter"))
    }

    return (
    <div class="friends-container"> 
        <div class="image-container">
            <img
            width= "50"
            src={props.image}
            />
        </div>

        <div class="description-container">
            <h2> {props.name}</h2>
            <h4> {counter}</h4>
            <button onClick={add}>add $1</button>
            <button onClick={sub}>sub $1</button>
            
        </div>

    </div>
    )

}

export default Friends;