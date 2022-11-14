import classes from "./Log.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Log(props) {
  const [isLoggedIn /*, setIsLoggedIn*/] = useState(true);

  if (isLoggedIn === false) {
    return (
      <ul>
        <li>{props.children}</li>
        <li className={classes.right}>
          <Link to="/signInBody">Log In</Link>
        </li>
        <li className={classes.right}>
          <Link to="/signUpBody">Sign Up</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>{props.children}</li>
        <li className={classes.right}>Account</li>
        <li className={classes.right}>Hello User</li>
        <li className={classes.right}>
          <Link to="cartBody">Cart</Link>
        </li>
      </ul>
    );
  }
}

export default Log;
