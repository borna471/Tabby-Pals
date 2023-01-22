//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Activity from '../Activity/Activity';
import Leaderboard from '../Leaderboard/Leaderboard';
import GroupName from '../Pages/GroupName'


<style>
  @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Coming+Soon&family=Montserrat:wght@400;500;600;700&family=PT+Sans&family=Poppins:wght@400;700;800&family=Roboto+Mono&family=Roboto:wght@300&family=Spline+Sans:wght@400;500;700&display=swap');
</style>

function App() {

  const [counter, setCounter] = useState(localStorage.getItem("counter"));

  function add() {
    if (!localStorage.getItem("counter")) {   
        localStorage.setItem("counter", 0);
         setCounter(0)
    }


    let prev = localStorage.getItem("counter")
    localStorage.setItem("counter", parseInt(prev) + 1);
    setCounter(prev + 1)
    
    

  }

  function sub() {
    if (!localStorage.getItem("counter")) {
        localStorage.setItem("counter", 0);
        setCounter(0)
    }


    let prev = localStorage.getItem("counter")
   localStorage.setItem("counter", parseInt(prev) - 1);
   setCounter(prev - 1)
  }

  return (


    <div className="App">
      <div class="hero">
        <img class="logo" src="https://images.wideopenpets.com/wp-content/uploads/2018/02/AdobeStock_109255057-770x405.jpg"></img>
        <h1 class="title">TABBY PALS</h1>
        <a class="button" href="GroupName.js#squad-name">Start Tracking!</a>
      </div>

      <div class="setup-one">
        <div class="group-name">
          <h1 className="squad-name">Squad Name</h1>
          <a class="button" href="#invite-url">Next</a>
        </div>
        <div class="progress-bar">
          <div class="green-bar"></div>
          <div class="grey-bar"></div>
        </div>
      </div>

      <div class="setup-two" id="invite-url">
        <div class="group-name">
          <h1 className="squad-name">Invite Friends</h1>
          <a class="button" href="#main">Start!</a>
        </div>
        <div class="progress-bar">
          <div class="grey-bar-two"></div>
          <div class="green-bar-two"></div>
        </div>
      </div>

      <div className="main">

        <div className="main1" id="main">
          <Profile
            name="Elena Guo"
            status="Tabby King"
            description="Your Status"
            image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
          />

          <div className="main-act-but">
            

            <div class="buttons">
              <div class="button-row">
                <button className="add-button" onClick={add}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
                <button className="add-button" onClick={add}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
              </div>

              <div class="button-row">
                <button className="add-button" onClick={add}>
                <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
                <button className="add-button" onClick={add}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
              </div>

              <div class="button-row" >
                <button className="sub-button" onClick={sub}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
                <button className="sub-button" onClick={sub}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
              </div>

              <div class="button-row" >
                <button className="sub-button" onClick={sub}>
                <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
                <button className="sub-button" onClick={sub}>
                  <img width="60px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
                </button>
              </div>

            </div>

            <div className="activity">
              {/* <h1>Activity Stream</h1> */}
                <Activity
                  name="Elena Guo"
                  description="bought 2x coffee"
                  image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
                />
                <Activity
                  name="Alicia Zhang"
                  description="owes 1x coffee"
                  image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
                />
                <Activity
                  name="Erping Sun"
                  description="owex 1x coffee"
                  image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
                />
            </div>
          </div>
        </div>


            <Leaderboard
          />

      </div>

    </div>
  );
}

export default App;
