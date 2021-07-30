import { useEffect } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Assignment from "./Assignment";
import "./Ass.css"

function App() {

  //   const fetchData = async () => {
  //     const response = await axios.get("/people");
  //     const data = response.data;
  //   }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  return (
    // <Assignment data={data}/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
