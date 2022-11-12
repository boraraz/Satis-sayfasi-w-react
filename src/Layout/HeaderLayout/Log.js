import classes from "./Log.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function LoggedOut(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn === false) {
    return (
      <ul>
        <li>{props.children}</li>
        <li className={classes.right}>
          <Link to="/signInBody">Log In</Link>
        </li>
        <li className={classes.right}>Sign Up</li>
        <li className={classes.right}>Cart</li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>{props.children}</li>
        <li className={classes.right}>Account</li>
        <li className={classes.right}>Hello User</li>
        <li className={classes.right}>Cart</li>
      </ul>
    );
  }
}

export default LoggedOut;
