import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { bgcolor } from "@mui/system";
import { useState, useEffect } from "react";



function DashBoard() {
  const [loading, setLoading] = useState(false);
  const username = localStorage.getItem('username');

  console.log("username",username)

  return (
    <>
      <Box sx={{ display: "flex" }}>

      DashBoard

      </Box>
     
    </>
  );
}

export default DashBoard;