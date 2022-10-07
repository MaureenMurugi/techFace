import avater from "../Images/avatar.png"
import like from "../Images/like2.png"


function Profile({profile}) {
    return ( 
      <div className="section">
      <div className="photo">
          <img className="dp" src={avater} alt="logo"></img>
          <div className="info">
              <h3>Fullname:{profile.fullname} </h3>
              <p>Username: {profile.username}</p>
              <p>Email: {profile.email}</p>
              <p>Skills:{profile.skills}</p>
              <ul>
                  <li className="like">Like!<img className="likee" src={like} alt="like"></img></li>
              </ul>
          </div>
      </div>
</div>
    )


  
  }

export default Profile