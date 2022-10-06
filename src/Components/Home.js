import user from "../Components/data/user"
 import logo from "../Images/murugi.jpg"
 import like from "../Images/like2.png"
import ProfileCard from "./ProfileCard";



function Home(props) {
    props=user;
    return (
        <>
        <div className="section">
            <div className="photo">
                <img className="dp" src={logo} alt="logo"></img>
                <div className="info">
                    <h2>{props.fullName}</h2>
                    <p>{props.userName}</p>
                    <p>{props.email}</p>
                    <p>{props.skill}</p>
                    <ul>
                        <li className="like">Like!<img className="likee" src={like} alt="like"></img></li>
                    </ul>
                </div>
            </div>
      </div>
      <ProfileCard/>
     

        </>
        
      
    )
}

export default Home

