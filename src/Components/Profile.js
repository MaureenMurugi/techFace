import avater from "../Images/avatar.png"
import like from "../Images/like2.png"
import { useState, useEffect} from "react"

function Profile() {
  const [getFull, setGetFull] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/registers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setGetFull(data)
    });
  };

  useEffect(() => {
    fetchData();
  }, [])

  
    return ( 
      <div className="section">
      <div className="photo">
          <img className="dp" src={avater} alt="logo"></img>
          <div className="info">
              <h3>Fullname:</h3>
              <p>Username:</p>
              <p>Email:</p>
              <p>Skills:</p>
              <ul>
                  <li className="like">Like!<img className="likee" src={like} alt="like"></img></li>
              </ul>
          </div>
      </div>
</div>
    )


  
  }

export default Profile