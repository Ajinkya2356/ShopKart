import React from "react";
import { Box, TextField, Typography, Button, Avatar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../Action/User/userAction";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
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
            return (
              <TextField
                label={item}
                fullWidth
                key={index}
                onChange={(e) => setEmail(e.target.value)}
              />
            );
          })}

          <Button
            variant="contained"
            onClick={() => {
              dispatch(forgotPassword(email));
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
