import './App.css';
import {Route, Switch} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Profile from './Components/Profile';
import ProfileDisplay from './Components/ProfileDisplay';

function App() {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/profile">
          <ProfileDisplay />
        </Route>
        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
        </div>
  )
}

export default App;
