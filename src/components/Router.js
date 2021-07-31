import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import MyTweets from "../routes/MyTweets";
import { storageService } from "../fbase";
import { v4 as uuidv4 } from "uuid";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  // const cheeseObj = storageService.ref().child(`smilecheese.jpeg`);
  // const cheeseUrl = cheeseObj.getDownloadURL();

  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Route exact path={"/mytweets"}>
              <MyTweets userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
