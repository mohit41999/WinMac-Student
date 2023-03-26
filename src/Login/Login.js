import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    loginUser(username, password);
  };
  
  function loginUser(username, password){
    setLoading(true);
    axios
    .post("https://acservices-winmac.onrender.com/winmac/auth/login", {"username": username, "password": password})
    .then((response) => {
      if(response.data.message==='login successful'){
        console.log("login success",response.data);
        localStorage.setItem('username',username);
        setLoading(false);
        navigate('/DashBoard');
      }
      else{
        setLoading(false);
        console.log("Error logging-in",response.data);
      }
    })
    .catch((error) => {
      setLoading(false);
      console.error("Error loggin in:", error);
    });
  }

  return (
    (loading)?<Box
      sx={{
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress/></Box>:<Box
      sx={{
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ bgcolor: indigo[500] }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            error={usernameError}
            helperText={usernameError ? "Username is required" : ""}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          
        </form>
      </Box>
    </Box>
  );
}