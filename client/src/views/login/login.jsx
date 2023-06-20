import { useState } from "react";
import validate from "./validate"
import styles from "./login.module.css"

const Login = () => {
  const [state, setState] = useState({
    Account: "",
    Password: "",
  });
  const [errors, setErrors] = useState({
    Account:"",
    Password:""
  })

  const handleChange = (event) => {
    const { name, value } = event.target 
  setState({
    ...state,
    [name]: value,
  })
  const updatedErrors = validate({
    ...state,
    [name]: value,
});
setErrors(updatedErrors)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
};
  console.log(state);
  console.log(errors);
  return (
    <div className={styles.containerdiv}>
      <hr></hr>
      <form onSubmit={handleOnSubmit} className={styles.form_container}>
        <div className={styles.title_container}>
      <h1 className={styles.title}>Log In</h1>
      </div>
      <div className={styles.input_container}>
        <label className={styles.input_label}>Account: </label>
        <input className={styles.input_field}
        placeholder="Account"
          type="text"
          name="Account"
          onChange={(event) => handleChange(event)}
          value={state.Account}
        ></input>
        </div>
        <hr className={"line"}></hr>
        {errors.Account && <span className={styles.Account}>{errors.Account}</span>}
        <hr></hr>

        <div className={styles.input_container}>
        <label className={styles.input_label}>Password: </label>
        <input className={styles.input_field} 
        placeholder="Password"
        type="password"
          name="Password"
          onChange={(event) => handleChange(event)}
          value={state.Password}
        ></input>
        </div>

        <hr className={"line"}></hr>

        {errors.Password && <span className={styles.Password}>{errors.Password}</span>}
        <hr className={"line"}></hr>
        <button
          className={styles['sign-in_btn']}
          disabled={
            !state.Password ||
            !state.Account ||
            !errors.Account ||
            !errors.Password
          }
        >
          Log In
        </button>

        <div className={styles.separator}>
    <hr className={styles.line}/>
    <span>Or</span>
    <hr className={styles.line}/>
  </div>
  <button title="Sign In" type="submit" className={styles["sign-in_ggl"]}>
    <span>Sign In with Google</span>
  </button>
      </form>
    </div>
    
  );
};

export default Login;
