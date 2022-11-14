import classes from "./SignUp.module.css";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpItems() {
  const navigate = useNavigate();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={classes.divHeight}>
      <form className={classes.signDiv}>
        <label for="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Name..."
        />
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username..."
        />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email..." />
        <label for="pass">Password</label>
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Password..."
        />
        <label for="passConf">Password (Confirmation)</label>
        <input
          type="password"
          id="passConf"
          name="passwordConfirmation"
          placeholder="Password..."
        />
        <button onClick={handleClick}>Sign Up</button>
      </form>
    </div>
  );

  function handleClick() {
    navigate("/signUpBody");
    // in this handler there will be control if username and password correct or not.
  }
}

export default SignUpItems;
