import React from "react";
import { Box, TextField, Typography, Button, Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
       /*  border: "2px solid red", */
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "20px",
          width: "30%",
          backgroundColor: "#333",
          transition: "all 0.5s",
        }}
      >
        <Typography variant="h5"> Forgot Password </Typography>
        <Box
          style={{
            display: "inherit",
            gap: "20px",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {Array.from(["Email"]).map((item, index) => {
            return <TextField label={item} fullWidth key={index} />;
          })}
          
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
