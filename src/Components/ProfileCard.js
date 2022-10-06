import design1 from "../Images/design1.jpeg"
import design2 from "../Images/design2.webp"
import design3 from "../Images/design3.jpeg"
import {useState} from "react"


function ProfileCard() {
  const [upVote1, setUpVote1] = useState(0)
  const [upVote2, setUpVote2] = useState(0)
  const [upVote3, setUpVote3] = useState(0)
  const [downVote1, setDownVote1] = useState(0)
  const [downVote2, setDownVote2] = useState(0)
  const [downVote3, setDownVote3] = useState(0)


  function handleUpVote(e) {
    if (e.target.id === "btn1") {
      setUpVote1((upVote1) => upVote1+1);
    }else if (e.target.id === "btn2") {
      setUpVote2((upVote2) => upVote2+1);
    }else if (e.target.id === "btn3") {
      setUpVote3((upVote3) => upVote3+1);
    }

    // e.target.value =  `upvote `
    // console.log(e)
  }

  function handleDownVote(e) {
    if (e.target.id === "btn1") {
      setDownVote1((downVote1) => downVote1+1);
    }else if (e.target.id === "btn2") {
      setDownVote2((downVote2) => downVote2+1);
    }else if (e.target.id === "btn3") {
      setDownVote3((downVote3) => downVote3+1);
    }
  }
  return (
    
      <div className="projects">
        <div className="title">
          <h2 className="projo">My Designs</h2>
        </div>

        <div className="box">

      <div className="card">
        <img className="avatar" src={design1} alt="avatar" ></img>
        <div className="container">

            <h4><b>Front-end Web designs</b></h4>
            <p>Non-interactive Information Website. </p>
            <button className="btn1" id="btn1" onClick={(e)=> handleUpVote(e)}>Upvote {upVote1}</button>
            <button id="btn1" onClick={(e)=> handleDownVote(e)}>Downvote {downVote1}</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={design2} alt="avatar" ></img>
        <div className="container">
            <h4><b>Login/Sign-up designs</b></h4>
            <p>Interactive website suitable for e-commerce</p>
            <button className="btn2" id="btn2" onClick={(e)=> handleUpVote(e)}>Upvote {upVote2}</button>
            <button id="btn2" onClick={(e)=> handleDownVote(e)}>Downvote {downVote2}</button>
        </div>
    </div>

    <div className="card">
        <img className="avatar" src={design3} alt="avatar" ></img>
        <div className="container">
            <h4><b>Mobile Application</b></h4>
            <p>A food delivery app that uses maps</p>
            <button id="btn3" className="btn3" onClick={(e)=> handleUpVote(e)}>Upvote {upVote3}</button>
            <button id="btn3"  onClick={(e)=> handleDownVote(e)}>Downvote {downVote3}</button>
        </div>
    </div>

      </div>
      </div>
     
      
      
    
  )
}

export default ProfileCard