import person from "../Images/murugi.jpg"
import {useState} from "react"


function ProfileCard() {
  const [upVote, setUpVote] = useState(0)
  const [downVote, setDownVote] = useState(0)

  function handleUpVote(upVote) {
    setUpVote((upVote) => upVote+1);
  }

  function handleDownVote(downVote) {
    setDownVote((downVote) => downVote-1);
  }
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
            <button className="btn1" onClick={handleUpVote}>Upvote {upVote}</button>
            <button onClick={handleDownVote}>Downvote {downVote}</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={person} alt="avatar" ></img>
        <div className="container">
            <h4><b>Login/Sign-up designs</b></h4>
            <p>Architect $ Engineer</p>
            <button className="btn2" onClick={handleUpVote}>Upvote {upVote}</button>
            <button onClick={handleDownVote}>Downvote {downVote}</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={person} alt="avatar" ></img>
        <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect $ Engineer</p>
            <button className="btn3" onClick={handleUpVote}>Upvote {upVote}</button>
            <button onClick={handleDownVote}>Downvote {downVote}</button>
        </div>
    </div>

      </div>
      </div>
     
      
      
    
  )
}

export default ProfileCard