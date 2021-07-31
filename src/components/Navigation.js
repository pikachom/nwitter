import React from "react";
import { Link } from "react-router-dom";
import Img from "smilecheese.jpeg";

const Navigation = ({ userObj, cheeseObj }) => (
  <nav>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/profile"}>{userObj.displayName}의 Profile</Link>
      </li>
      <li>
        <Link to={"/myTweets"}>My Tweets</Link>
      </li>
    </ul>
    <img src={Img} width="190px" height="340px" />
  </nav>
);

export default Navigation;
