//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Activity from '../Activity/Activity';
import Leaderboard from '../Leaderboard/Leaderboard';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Coming+Soon&family=Montserrat:wght@400;500;600;700&family=PT+Sans&family=Poppins:wght@400;700;800&family=Roboto+Mono&family=Roboto:wght@300&family=Spline+Sans:wght@400;500;700&display=swap');
</style>

function App() {

  const [counter1, setCounter1] = useState(localStorage.getItem("counter1"));
  const [counter2, setCounter2] = useState(localStorage.getItem("counter2"));
  const [counter3, setCounter3] = useState(localStorage.getItem("counter3"));
  const [counter4, setCounter4] = useState(localStorage.getItem("counter4"));

  function add1() {
    if (!localStorage.getItem("counter1")) {   
        localStorage.setItem("counter1", 0);
         setCounter1(0)
    }
    let prev = localStorage.getItem("counter1")
    localStorage.setItem("counter1", parseInt(prev) + 1);
    setCounter1(prev + 1)
  }

  function sub1() {
    if (!localStorage.getItem("counter1")) {
        localStorage.setItem("counter1", 0);
        setCounter1(0)
    }
    let prev = localStorage.getItem("counter1")
   localStorage.setItem("counter1", parseInt(prev) - 1);
   setCounter1(prev - 1)
  }

  function add2() {
    if (!localStorage.getItem("counter2")) {   
        localStorage.setItem("counter2", 0);
         setCounter2(0)
    }
    let prev = localStorage.getItem("counter2")
    localStorage.setItem("counter2", parseInt(prev) + 1);
    setCounter2(prev + 1)
  }

  function sub2() {
    if (!localStorage.getItem("counter2")) {
        localStorage.setItem("counter2", 0);
        setCounter2(0)
    }
    let prev = localStorage.getItem("counter2")
   localStorage.setItem("counter2", parseInt(prev) - 1);
   setCounter2(prev - 1)
  }

  function add3() {
    if (!localStorage.getItem("counter3")) {   
        localStorage.setItem("counter3", 0);
         setCounter3(0)
    }
    let prev = localStorage.getItem("counter3")
    localStorage.setItem("counter3", parseInt(prev) + 1);
    setCounter3(prev + 1)
  }

  function sub3() {
    if (!localStorage.getItem("counter3")) {
        localStorage.setItem("counter3", 0);
        setCounter3(0)
    }
    let prev = localStorage.getItem("counter3")
   localStorage.setItem("counter3", parseInt(prev) - 1);
   setCounter3(prev - 1)
  }

  function add4() {
    if (!localStorage.getItem("counter4")) {   
        localStorage.setItem("counter4", 0);
         setCounter4(0)
    }
    let prev = localStorage.getItem("counter4")
    localStorage.setItem("counter4", parseInt(prev) + 1);
    setCounter4(prev + 1)
  }

  function sub4() {
    if (!localStorage.getItem("counter4")) {
        localStorage.setItem("counter4", 0);
        setCounter4(0)
    }
    let prev = localStorage.getItem("counter4")
   localStorage.setItem("counter4", parseInt(prev) - 1);
   setCounter4(prev - 1)
  }

  return (


    <div className="App">
      <div class="hero">
        <img class="logo" src="https://images.wideopenpets.com/wp-content/uploads/2018/02/AdobeStock_109255057-770x405.jpg"></img>
        <h1 class="title">TABBY PALS</h1>
        <a class="button" href="#group-name">Start Tracking!</a>
      </div>

      <div class="setup-one" id="group-name">
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
                <button className="add-button" onClick={add1}>
                  <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/hot-beverage_2615.png"/>
                </button>
                <button className="add-button" onClick={add2}>
                  <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bubble-tea_1f9cb.png"/>
                </button>
              </div>

              <div class="button-row">
                <button className="add-button" onClick={add3}>
                <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/sandwich_1f96a.png"/>
                </button>
                <button className="add-button" onClick={add4}>
                  <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/curry-rice_1f35b.png"/>
                </button>
              </div>

              <div class="button-row" >
                <button className="sub-button" onClick={sub1}>
                <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/hot-beverage_2615.png"/>
                </button>
                <button className="sub-button" onClick={sub2}>
                  <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/bubble-tea_1f9cb.png"/>
                </button>
              </div>

              <div class="button-row" >
                <button className="sub-button" onClick={sub3}>
                <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/sandwich_1f96a.png"/>
                </button>
                <button className="sub-button" onClick={sub4}>
                <img width="60px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/curry-rice_1f35b.png"/>
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
                  description="owes 1x coffee"
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

