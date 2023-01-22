import "./Leaderboard.css"
import Friends from '../Friends/Friends';
import Friends_zero from '../Friends_zero/Friends_zero';

function Leaderboard() {

    return (
        <div class="container">

            
            <h1 className="leaderboard-header">Group Leaderboard</h1>

            <Friends className="friend"
                name="Elena"
                image="https://previews.123rf.com/images/sabuhinovruzov/sabuhinovruzov1706/sabuhinovruzov170600159/79516357-cat-simple-vector-icon-black-and-white-illustration-of-cat-outline-linear-cat-head-icon-eps-10.jpg"
            />

            <Friends_zero className="friend"
                name="Alicia"
   
                image="https://static.vecteezy.com/system/resources/thumbnails/006/720/668/small/dog-face-logo-free-vector.jpg"
      
            />

            <Friends_zero className="friend"
                name="Erping"
   
                image="https://static.vecteezy.com/system/resources/previews/014/536/091/original/cute-penguin-logo-free-vector.jpg"
      
            />

            <Friends_zero className="friend"
                name="Borna"
   
                image="https://static.vecteezy.com/system/resources/thumbnails/000/546/696/small_2x/RACCOON_009.jpg"
      
            />


        </div>


    )

}

export default Leaderboard;