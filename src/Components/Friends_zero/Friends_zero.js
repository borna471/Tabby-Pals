import "../Friends/Friends.css";
import React, { useState, useEffect } from "react";

function Friends(props) {
    
    // const [counterA1, setCounterA1] = useState(localStorage.getItem("counterA1"));
    // const [counterA2, setCounterA2] = useState(localStorage.getItem("counterA2"));
    // const [counterA3, setCounterA3] = useState(localStorage.getItem("counterA3"));
    // const [counterA4, setCounterA4] = useState(localStorage.getItem("counterA4"));

    // function add(name, counter) {

    //     switch(name) {
    //         case "Alicia":

    //         switch(counter) {
    //             case 1:
    //                 if (!localStorage.getItem("counterA1")) {   
    //                     localStorage.setItem("counterA1", 0);
    //                     setCounterA1(0)  
    //                 }
    //                 let prevA1 = localStorage.getItem("counterA1")
    //                 localStorage.setItem("counter", parseInt(prevA1) + 1);
    //                 setCounterA1(localStorage.getItem("counterA1"))
    //             case 2:
    //                 if (!localStorage.getItem("counterA2")) {   
    //                     localStorage.setItem("counterA2", 0);
    //                     setCounterA2(0)  
    //                 }
    //                 let prevA2 = localStorage.getItem("counterA2")
    //                 localStorage.setItem("counter", parseInt(prevA2) + 1);
    //                 setCounterA2(localStorage.getItem("counterA2"))
    //             case 3:
    //                 if (!localStorage.getItem("counterA3")) {   
    //                     localStorage.setItem("counterA3", 0);
    //                     setCounterA3(0)  
    //                 }
    //                 let prevA3 = localStorage.getItem("counterA3")
    //                 localStorage.setItem("counter", parseInt(prevA3) + 1);
    //                 setCounterA3(localStorage.getItem("counterA3"))
    //             case 4:
    //                 if (!localStorage.getItem("counterA4")) {   
    //                     localStorage.setItem("counterA4", 0);
    //                     setCounterA4(0)  
    //                 }
    //                 let prevA4 = localStorage.getItem("counterA4")
    //                 localStorage.setItem("counter", parseInt(prevA4) + 1);
    //                 setCounterA4(localStorage.getItem("counterA4"))
    //         }

    //         case "Erping":


    //         case "Borna":
    //     }
        
    
    // }

    // function sub(name, counter) {
    //     switch(name) {
    //         case "Alicia":

    //         switch(counter) {
    //             case 1:
    //                 if (!localStorage.getItem("counterA1")) {   
    //                     localStorage.setItem("counterA1", 0);
    //                     setCounterA1(0)  
    //                 }
    //                 let prevA1 = localStorage.getItem("counterA1")
    //                 localStorage.setItem("counter", parseInt(prevA1) + 1);
    //                 setCounterA1(localStorage.getItem("counterA1"))
    //             case 2:
    //                 if (!localStorage.getItem("counterA2")) {   
    //                     localStorage.setItem("counterA2", 0);
    //                     setCounterA2(0)  
    //                 }
    //                 let prevA2 = localStorage.getItem("counterA2")
    //                 localStorage.setItem("counter", parseInt(prevA2) + 1);
    //                 setCounterA2(localStorage.getItem("counterA2"))
    //             case 3:
    //                 if (!localStorage.getItem("counterA3")) {   
    //                     localStorage.setItem("counterA3", 0);
    //                     setCounterA3(0)  
    //                 }
    //                 let prevA3 = localStorage.getItem("counterA3")
    //                 localStorage.setItem("counter", parseInt(prevA3) + 1);
    //                 setCounterA3(localStorage.getItem("counterA3"))
    //             case 4:
    //                 if (!localStorage.getItem("counterA4")) {   
    //                     localStorage.setItem("counterA4", 0);
    //                     setCounterA4(0)  
    //                 }
    //                 let prevA4 = localStorage.getItem("counterA4")
    //                 localStorage.setItem("counter", parseInt(prevA4) + 1);
    //                 setCounterA4(localStorage.getItem("counterA4"))
    //         }

    //         case "Erping":


    //         case "Borna":
    //     }
    // }

    // fucntion outPutPicker()


    return (
    <div class="friends-container"> 
        <div class="image-container">
            <img 
            width= "130px"
            border-radius = "15"
            className = "pfp"
            src={props.image}
            />
        </div>

        <div class="description-container">
            <h2> {props.name}</h2>
            { <div class="counters">
                {/* <h4> {localStorage.getItem("counter")[0]}</h4>
                <h4> {localStorage.getItem("counter")[1]}</h4>
                <h4> {localStorage.getItem("counter")[2]}</h4>
                <h4> {localStorage.getItem("counter")[3]}</h4> */} 
            </div> }

            
                <div class="counters">

                    <div class="counter-row">
                        <div class="counter">
                        <img width="30px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/hot-beverage_2615.png"/>
                        <h4> {-1}</h4>
                        </div>
                        <div class="counter">
                        <img width="30px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bubble-tea_1f9cb.png"/>                    
                        <h4> {0}</h4>
                        </div>
                    </div>
                    <div class="counter-row">
                        <div class="counter">
                            <img width="30px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/sandwich_1f96a.png"/>
                            <h4> {-1}</h4>
                        </div>
                        <div class="counter">
                            <img width="30px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/curry-rice_1f35b.png"/>
                            <h4> {0}</h4>
                        </div>
                    </div>
                
                </div>
            


            {/* <div class="buttons">
                <div className="add-buttons">
                    <button className="add-button" onClick={add(props.name, 1)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className="add-button" onClick={add(props.name, 2)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className="add-button" onClick={add(props.name, 3)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className="add-button" onClick={add(props.name, 4)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    
                </div>

                <div className="sub-buttons">
                    <button className ="sub-button" onClick={sub(props.name, 1)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className ="sub-button" onClick={sub(props.name, 2)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className ="sub-button" onClick={sub(props.name, 3)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    <button className ="sub-button" onClick={sub(props.name, 4)}>
                        <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                    </button>
                    
                </div>
            </div> */}
        </div>

    </div>
    )

}

export default Friends;