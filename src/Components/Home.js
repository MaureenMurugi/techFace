import user from "../Components/data/user"
 import logo from "../Images/murugi.jpg"

function Home(props) {
    props=user;
    return (
        <div className="section">
            <div className="photo">
                <img src={logo} alt="logo"></img>
                <div className="info">
                    <h2>{props.userName}</h2>
                    <p>{props.skill}</p>
                </div>

            </div>
        
      </div>
    )
}

export default Home

