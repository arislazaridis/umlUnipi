import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Error, ErrorOutlined, ErrorSharp } from "@mui/icons-material";

function LoginForm() {
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

  const handleAdmin = () => {
    if (
      user.name + user.password !=
      DEFAULT_DATA.administrator.name + DEFAULT_DATA.administrator.password
    ) {
      console.log("No credentials");
      setError({ ...error, errorAdmin: "No Credentials" });
    } else {
      console.log("login");
      setError("");
    }
  };

  const handleUser = () => {
    if (
      user.name + user.password !=
      DEFAULT_DATA.user.name + DEFAULT_DATA.user.password
    ) {
      console.log("No User");
      setError({ ...error, errorUser: "No User" });
    } else {
      console.log("login");
      setError("");
    }
  };
  return (
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
      <div>
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
        <p style={{ color: "red" }}>
          <em>No credentials</em>
        </p>
      ) : null}
      {error.errorUser ? (
        <p style={{ color: "red" }}>
          <em>No User</em>
        </p>
      ) : null}
    </Box>
  );
}

export default LoginForm;
