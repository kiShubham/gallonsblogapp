/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import style from "./Register.module.css";
import { Button } from "@mui/material";

import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser, loginUser } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLogInFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignupInput = (e) => {
    const { name, value } = e.target;

    setSignUpFormData((prev) => ({ ...prev, [name]: value }));
  };

  const newUser = async () => {
    try {
      const data = {
        email: signUpFormData.email,
        username: signUpFormData.username,
        password: signUpFormData.password,
      };
      setSignUpFormData({
        email: "",
        username: "",
        password: "",
      });

      const result = await registerUser(data);

      if (result.status === 201) {
        // console.log(result);
        enqueueSnackbar("user register successfully , now login", {
          variant: "success",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userlogin = async () => {
    try {
      const data = {
        email: logInFormData.email,
        password: logInFormData.password,
      };
      setLogInFormData({
        email: "",
        password: "",
      });

      const result = await loginUser(data);
      // console.log(result);
      if (result.status === 201) {
        enqueueSnackbar("user loggedIn successfully", {
          variant: "success",
        });
        localStorage.setItem("token", result?.data?.token); // token is changing
        localStorage.setItem("uid", result?.data?.userId);

        navigate("/blogs");
        window.location.reload();
      }
    } catch (error) {
      if (error?.response?.data?.message)
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
      console.error(error);
    }
  };

  return (
    <div className={style.form}>
      <div className={style.login_form}>
        <TextField
          id="filled-basic"
          label="email"
          name="email"
          variant="filled"
          value={logInFormData.email}
          onChange={handleLoginInput}
        />
        <TextField
          id="filled-basic"
          label="password"
          name="password"
          variant="filled"
          value={logInFormData.password}
          onChange={handleLoginInput}
        />
        <Button variant="contained" onClick={userlogin}>
          log In
        </Button>
      </div>
      <p>/~</p>
      <div className={style.signup_form}>
        <TextField
          id="filled-basic"
          label="email"
          name="email"
          variant="filled"
          onChange={handleSignupInput}
          value={signUpFormData.email}
        />
        <TextField
          id="filled-basic"
          label="username"
          name="username"
          variant="filled"
          onChange={handleSignupInput}
          value={signUpFormData.username}
        />
        <TextField
          id="filled-basic"
          label="password"
          name="password"
          variant="filled"
          onChange={handleSignupInput}
          value={signUpFormData.password}
        />

        <Button variant="contained" onClick={newUser}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Register;
