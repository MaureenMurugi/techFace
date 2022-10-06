import { useState } from "react";



function ProfileForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    skills: "",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <>
    <div className="body-form">
    <div className="containerForm">
     <div className="titleForm">Registration </div>
       <form>
         <div className="user-details">
           
           <div className="input-box">
           <span className="details" >Fullname</span>
           <input type="text" placeholder="Fullname"
            id="fullname" value={formData.fullname} onChange={handleChange} required></input>
           </div>

           <div className="input-box">
           <span className="details" >userName</span>
           <input type="text" placeholder="Username" 
           id="username" value={formData.username} onChange={handleChange}required></input>
           </div>

           <div className="input-box">
           <span className="details">Email</span>
           <input type="email" placeholder="Email"
            id="email" value={formData.email} onChange={handleChange} required></input>
           </div>

           <div className="input-box">
           <span className="details">Skills</span>
           <input type="text" placeholder="Skills"
           id="skills" value={formData.skills} onChange={handleChange} required></input>
           </div>
          
         </div>
         <div className="button-form">
           <button onClick={handleSubmit} className="register">Register</button>
         </div>

       </form>
    
   </div>
    </div>
    </>
  
   );
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/registers", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
  }
   
  }

export default ProfileForm