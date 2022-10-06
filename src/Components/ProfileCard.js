import person from "../Images/murugi.jpg"

function ProfileCard() {
  return (
    
      <div className="projects">
        <div className="title">
          <h2 className="projo">My Designs</h2>
        </div>

        <div className="box">

      <div className="card">
        <img className="avatar" src={person} alt="avatar" ></img>
        <div className="container">
            <h4><b>Front-end Web designs</b></h4>
            <p>Architect $ Engineer</p>
            <button>Upvote</button>
            <button>Downvote</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={person} alt="avatar" ></img>
        <div className="container">
            <h4><b>Login/Sign-up designs</b></h4>
            <p>Architect $ Engineer</p>
            <button>Upvote</button>
            <button>Downvote</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={person} alt="avatar" ></img>
        <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect $ Engineer</p>
            <button>Upvote</button>
            <button>Downvote</button>
        </div>
    </div>

      </div>
      </div>
     
      
      
    
  )
}

export default ProfileCard