import classes from "./SignIn.module.css";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInItems() {
  const navigate = useNavigate();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={classes.divHeight}>
      <form className={classes.signDiv}>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username..."
        />

        <label for="pass">Password</label>
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Password..."
        />
        <button onClick={handleClick}>Log In</button>
      </form>
    </div>
  );

  function handleClick() {
    navigate("/");
    // in this handler there will be control if username and password correct or not.
  }
}

export default SignInItems;
