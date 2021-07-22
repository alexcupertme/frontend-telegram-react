import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import User from "./components/User/User";
import Stats from "./components/Stats/Stats";
import Settings from "./components/Settings/Settings";

import s from "./App.module.css";

// import { useSelector } from "react-redux";
// import { RootState } from "./redux/reducers";

const App: React.FC = () => {
  let isAuth: boolean
  // const isAuth = useSelector((state: RootState) => { return state.isAuth })
  if (localStorage.getItem('token')?.length === 189) {
    isAuth = true
  } else {
    isAuth = false
  }
  
  // useEffect(() => {
  //   debugger
  // }, [isAuth])

  return (
    <div className={s.wrapper}>
      <BrowserRouter>
        {!isAuth &&
          <React.Fragment>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <Redirect to='/login' />
          </React.Fragment>
        }
        {isAuth &&
          <React.Fragment>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/user" component={User} />
              <Route path="/stats" component={Stats} />
              <Route path="/settings" component={Settings} />
            </Switch>
            <Redirect to='/dashboard' />
          </React.Fragment>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
