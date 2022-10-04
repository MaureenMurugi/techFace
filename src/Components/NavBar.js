import { NavLink } from "react-router-dom";

function NavBar() {
    
    return (
        <header>
           <h2 className="logo">tech<span>Face</span></h2>
            <nav>
                <ul>
                    <li><NavLink  exact to="/">Home</NavLink></li>
                    <li><NavLink  exact to="/profile">Profile</NavLink></li>
                    <li><NavLink  exact to="/aboutUs">AboutUs</NavLink></li>
                </ul>
            </nav>
            <button className="cta">Sign-up</button>
        </header>
       
    )
}

export default NavBar;