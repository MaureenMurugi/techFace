import user from "../Components/data/user"
 import logo from "../Images/murugi.jpg"
 import like from "../Images/like2.png"
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

function Home(props) {
    props=user;
    return (
        <>
        <div className="section">
            <div className="photo">
                <img src={logo} alt="logo"></img>
                <div className="info">
                    <h2>{props.userName}</h2>
                    <p>{props.skill}</p>
                    <ul>
                        <li className="like">Like!<img className="likee" src={like} alt="like"></img></li>
                    </ul>
                </div>
            </div>
      </div>
      <ProfileCard/>
      <ProfileForm/>

        </>
        
      
    )
}

export default Home

