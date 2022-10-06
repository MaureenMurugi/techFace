

function ProfileForm() {
    return (
     <>
     <div className="body-form">
     <div className="containerForm">
      <div className="titleForm">Registration </div>
        <form>
          <div className="user-details">
            
            <div className="input-box">
            <span className="details">Fullname</span>
            <input type="text" placeholder="Fullname" required></input>
            </div>

            <div className="input-box">
            <span className="details">userName</span>
            <input type="text" placeholder="Username" required></input>
            </div>

            <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Email" required></input>
            </div>

            <div className="input-box">
            <span className="details">Skills</span>
            <input type="text" placeholder="Skills" required></input>
            </div>
           
          </div>
          <div className="button-form">
            <button className="register">Register</button>
          </div>

        </form>
     
    </div>
     </div>
     </>
   
    );
  }

export default ProfileForm