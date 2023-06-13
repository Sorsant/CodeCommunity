import { useState } from "react";

const Login: React.FC = () => {
  const [state, setState] = useState({
    Account: "",
    Password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  console.log(state);
  return (
    <div>
      <h1>Inicia sesion</h1>
      <form>
        <label>Account: </label>
        <input
          type="text"
          name="Account"
          onChange={(event) => handleChange(event)}
          value={state.Account}
        ></input>
        <hr></hr>

        <label>Password: </label>
        <input
          name="Password"
          onChange={(event) => handleChange(event)}
          value={state.Password}
        ></input>
      </form>
    </div>
  );
};

export default Login;
