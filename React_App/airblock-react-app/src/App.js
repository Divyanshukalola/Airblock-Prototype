// Created By: Divyanshu Kalola
// Description: The file contains main view of the app
// Component List: []
// Things TODO: 


//react imports

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";


// Components Import
import Add_assets from "./components/Add_assets";
import Tracker from "./components/Tracker";
import Team from './components/Team'
import LogIn from "./components/Authentications/LogIn";
import LogIn_form from "./components/Authentications/Login_form";
import Register from './components/Authentications/SignUp'

import Servicer from './components/Teams/Servicer/Servicer'
import Servicer_team_dashboard from "./components/Teams/Servicer/Servicer_team_dashboard";

import Worker from "./components/Teams/Worker/Worker";

import Select from "./components/Select";

// AWS Amplify imports
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
import Login_form from "./components/Authentications/Login_form";
import Servicer_profile from "./components/Teams/Servicer/Servicer_profile";

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isAuthenticating, setisAuthenticating] = useState(true);
  const [user, setuser] = useState(null);

  // state = {
  //   isAuthenticated: false,
  //   isAuthenticating: true,
  //   user: null
  // }

  // setAuthStatus = authenticated => {
  //   this.setState({ isAuthenticated: authenticated });
  // }

  // setUser = user => {
  //   this.setState({ user: user });
  // }

  // async componentDidMount()
  // {
  //   try {
  //     const session = await Auth.currentSession();
  //     setisAuthenticated(true);
  //     console.log(session);
  //     const user = await Auth.currentAuthenticatedUser();
  //     setuser(user);
  //   } catch(error) {
  //     if (error !== 'No current user') {
  //       console.log(error);
  //     }
  //   }

  //   setisAuthenticated( false );
  // }

  // const authProps = {
  //     isAuthenticated: isAuthenticated,
  //     user: user,
  //     setAuthStatus: setisAuthenticated(),
  //     setUser: setuser()
  //   }

  return (
    <div className="App">
      {/* <LogIn_form/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginform" element={<LogIn_form />} />
          {/* team owner */}
          <Route path="/" element={<Select />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/add_asset" element={<Add_assets />} />
          {/* team servicer */}
          <Route path="/team/Servicer" element={<Servicer />} />
          <Route
            path="/team/Servicer_team_dashboard"
            element={<Servicer_team_dashboard />}
          />
          <Route path="/team/Servicer_profile" element={<Servicer_profile />} />
          <Route path="/team" element={<Team />} />{" "}
          {/* currently no available */}
          {/* team worker */}
          <Route path="/team/Worker" element={<Worker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
