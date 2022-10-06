

function ProfileForm() {
    return (
      <div className="containerForm">
       <div className="screen">
         <div className="screen_content">
           <form className="login">
             <div className="login_field">
               <i className="login_icon fas fa-user"></i>
               <input type="text" className="login_input" placeholder="Username/Email"></input>
             </div>

             <div className="login_field">
               <i className="login_icon fas fa-lock"></i>
               <input type="text" className="login_input" placeholder="Skills"></input>
             </div>

             <button className="button">
               <span>Join</span>
               <i className="button_icon fas fa-chevron-right"></i>
             </button>
           </form>

         </div>

       </div>
      </div>
    );
  }

export default ProfileForm