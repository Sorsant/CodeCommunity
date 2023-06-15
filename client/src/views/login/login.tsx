import { useState } from "react";
import validate from "./validate"
import styles from "./login.module.css"
interface ErrorLogin{
  Account?: string;
    Password?: string;
}
interface FormLogin {
  Account: string;
  Password: string;
}
const Login: React.FC = () => {
  const [state, setState] = useState<FormLogin>({
    Account: "",
    Password: "",
  });
  const [errors, setErrors] = useState<ErrorLogin>({
    Account:"",
    Password:""
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  console.log(state);
  console.log(errors);
  return (
    <div className={styles.containerdiv}>
      <h1 className={styles.title}>Log In</h1>
      <hr></hr>
      <form className={styles.Formu}>
        <label className={styles.AccountLabel}>Account: </label>
        <input className={styles.container}
          type="text"
          name="Account"
          onChange={(event) => handleChange(event)}
          value={state.Account}
        ></input>
        <hr></hr>
         {errors.Account && <span className={styles.Account}>{errors.Account}</span>}
        <hr></hr>

        <label className={styles.PasswordLabel}>Password: </label>
        <input className={styles.container}
          name="Password"
          onChange={(event) => handleChange(event)}
          value={state.Password}
        ></input>
        <hr></hr>
        {errors.Password && <span className={styles.Password}>{errors.Password}</span>}
        <hr></hr>
        <button
          disabled={
            !!errors.Account ||
            !!errors.Password
        }
        >Log In</button>
      </form>
    </div>
  );
};

export default Login;
