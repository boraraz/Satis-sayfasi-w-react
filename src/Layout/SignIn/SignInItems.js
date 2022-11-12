import classes from "./SignIn.module.css";

function SignInItems() {
  return (
    <div className={classes.divHeight}>
      <form className={classes.signDiv}>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
      </form>
    </div>
  );
}

export default SignInItems;
