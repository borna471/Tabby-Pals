//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Activity from '../Activity/Activity';
import Leaderboard from '../Leaderboard/Leaderboard';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Coming+Soon&family=Montserrat:wght@400;500;600;700&family=PT+Sans&family=Poppins:wght@400;700;800&family=Roboto+Mono&family=Roboto:wght@300&family=Spline+Sans:wght@400;500;700&display=swap');
</style>

function App() {
  return (
    <div className="App">
      <div class="hero">
        <img class="logo" src="https://images.wideopenpets.com/wp-content/uploads/2018/02/AdobeStock_109255057-770x405.jpg"></img>
        <h1 class="title">TABBY PALS</h1>
        <a class="button" href="#main">Start Tracking</a>
      </div>

      <div className="main" id="main">
        <Profile
          name="Elena Guo"
          description="Money"
          image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
        />
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
          <Leaderboard
            />

      <div class="add-buttons">
        <div class="button-row1">

          <button className="add-button">
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
          </button>
          
          <button className="add-button">
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
          </button>
        </div>

        <div class="button-row2">
        <button className="add-button">
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
          </button>
          
          <button className="add-button">
            <img width="25px" src="https://cdn-icons-png.flaticon.com/512/4343/4343662.png"/>
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
