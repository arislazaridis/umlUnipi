import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserForm from "./UserForm";
import { connect } from "react-redux";
import { login } from "../store/index";
import { loginAdmin } from "../store/index";
import "./loginForm.css";

function LoginForm(props) {
  const DEFAULT_DATA = {
    administrator: {
      name: "admin",
      password: "admin",
    },
    user: {
      name: "aris",
      password: "aris",
    },
  };

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState({ errorUser: "", errorAdmin: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const { loginUser, loginAdmin, login } = props;
  console.log(loginUser);

  const handleAdmin = () => {
    if (
      user.name + user.password !=
      DEFAULT_DATA.administrator.name + DEFAULT_DATA.administrator.password
    ) {
      console.log("No credentials");
      setError({ ...error, errorAdmin: "No Credentials" });
      alert("Wrong Credentials");
    } else {
      console.log("login");
      loginAdmin(true);
      // setLoggedIn(true);
      setError("");
      alert("Welcome Admin");
    }
  };

  const handleUser = () => {
    if (
      user.name + user.password !=
      DEFAULT_DATA.user.name + DEFAULT_DATA.user.password
    ) {
      console.log("No User");
      setError({ ...error, errorUser: "No User" });
      alert("No user..");
    } else {
      console.log("login");
      setLoggedIn(true);
      login(true);
      setError("");
      alert(`Welcome ${user.name}`);
    }
  };
  return (
    <div className="content">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{
          borderRadius: "8px",
          width: "400px",
          margin: "auto",
          padding: "24px",
          backgroundColor: "lightblue",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wu3fAh3mkSiWM6n86l7w0ZDufAhx7ovZe-IKzpbaWeldmI1raAf5hUIixB6-_LITKOw&usqp=CAU" />
          <h3>Welcome Unipi </h3>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Username"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-disabled"
              label="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>
        <Stack
          spacing={2}
          direction="row"
          style={{ width: "50%", margin: "auto", padding: "24px" }}
        >
          <Button onClick={handleAdmin} variant="contained">
            Administrator
          </Button>
          <Button onClick={handleUser} variant="outlined">
            User
          </Button>
        </Stack>
        {error.errorAdmin ? (
          <p style={{ color: "red", textAlign: "center" }}>
            <em>No credentials</em>
          </p>
        ) : null}
        {error.errorUser ? (
          <p style={{ color: "red", textAlign: "center" }}>
            <em>No User</em>
          </p>
        ) : null}
        {loggedIn ? <UserForm /> : null}
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Boolean) => dispatch(login(Boolean)),
    loginAdmin: (Boolean) => dispatch(loginAdmin(Boolean)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
