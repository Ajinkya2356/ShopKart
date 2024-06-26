import { Box, TextField, Typography, Button, Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        /* border: "2px solid red", */
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
        <Box
          style={{
            display: "inherit",
            gap: "20%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => setActiveTab(0)}
            style={{
              /* backgroundColor: activeTab == 0 ? "#333" : "transparent", */
              borderBottom: activeTab == 0 ? "2px solid white" : "none",
              flex: 1,
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => setActiveTab(1)}
            style={{
              /* backgroundColor: activeTab == 1 ? "#333" : "transparent", */
              borderBottom: activeTab == 1 ? "2px solid white" : "none",
              flex: 1,
            }}
          >
            Register
          </Button>
        </Box>
        {activeTab == 0 ? (
          <Box
            style={{
              display: "inherit",
              gap: "20px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {Array.from(["Username", "Password"]).map((item, index) => {
              return <TextField label={item} fullWidth key={index} />;
            })}
            <Link
              to="/forgot-password"
              style={{
                color: "white",
                textDecoration: "none",
                alignSelf: "flex-end",
              }}
            >
              Forgot Password ?
            </Link>
            <Button variant="contained">Login</Button>
          </Box>
        ) : (
          <Box
            style={{
              display: "inherit",
              gap: "20px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {Array.from(["Name", "Email", "Password"]).map((item, index) => {
              return <TextField label={item} fullWidth key={index} />;
            })}
            <Box
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Avatar />
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <Button variant="contained" onClick={handleButtonClick}>
                Upload Avatar
              </Button>
            </Box>
            <Button variant="contained">Register</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
