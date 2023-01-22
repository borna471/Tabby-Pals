//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Activity from '../Activity/Activity';

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

      <Friends
      name="test"
   
      image="https://media.licdn.com/dms/image/D5603AQGwotX59PCeUw/profile-displayphoto-shrink_400_400/0/1667781351274?e=1679529600&v=beta&t=N7m-e2GcQddZN8WzlntmKCyCtTCLzS-00wPsjC7BzgY"
      
      />
    </div>


    </div>
  );
}

export default App;
