import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/">Profile</NavLink>
            <NavLink exact to="/">AboutUs</NavLink>
           

        </div>
       
    )
}

export default NavBar;