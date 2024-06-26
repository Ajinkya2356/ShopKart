import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import ProfileTabs from "./ProfileTabs";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
const Profile = () => {
  return (
    <Box
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Box
        style={{
          minWidth: "30%",
          border: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Avatar
          style={{
            height: "100px",
            width: "100px",
            cursor: "pointer",
          }}
        ></Avatar>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Name
        </Typography>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <PersonIcon style={{ marginRight: "5px" }} />
          Username
        </Typography>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <HomeIcon style={{ marginRight: "5px" }} />
          Address
        </Typography>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <PhoneIcon style={{ marginRight: "5px" }} />
          Mobile No
        </Typography>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <EventIcon style={{ marginRight: "5px" }} />
          Joined Since
        </Typography>
      </Box>
      <Box
        style={{
          minWidth: "70%",
        }}
      >
        <ProfileTabs />
      </Box>
    </Box>
  );
};

export default Profile;
