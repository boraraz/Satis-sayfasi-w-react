import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Log from "./Log";

function Header() {
  return (
    <div>
      <h1 className={classes.headerDiv}>Selling Page Template w/ React</h1>
      <Log>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sale</li>
        <li>New In</li>
      </Log>
    </div>
  );
}
export default Header;
