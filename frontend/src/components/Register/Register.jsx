import TextField from "@mui/material/TextField";
import style from "./Register.module.css";
import { Button } from "@mui/material";

const Register = () => {
  return (
    <div className={style.form}>
      <div className={style.login_form}>
        <TextField id="filled-basic" label="email" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />
        <Button variant="contained">log In</Button>
      </div>
      <p>/~</p>
      <div className={style.signup_form}>
        <TextField id="filled-basic" label="username" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />
        <TextField id="filled-basic" label="email" variant="filled" />
        <Button variant="contained">Sign Up</Button>
      </div>
    </div>
  );
};

export default Register;
