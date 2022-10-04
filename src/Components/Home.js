import user from "../Components/data/user"

function Home(props) {
    props=user;
    return (
        <div className="section">
            <div className="photo">
                {/* <img></img> */}
                <div className="info">
                    <h2>{props.userName}</h2>
                    <p>{props.skill}</p>
                </div>

            </div>
        
      </div>
    )
}

export default Home

