import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ProfileTabs from "./ProfileTabs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (localStorage.getItem("token") === null) {
      if (!isAuthenticated) navigate("/login");
    }
  }, [isAuthenticated, error, user]);

  return loading && !user ? (
    <h1>Loading....</h1>
  ) : (
    <Box
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <ProfileTabs />
    </Box>
  );
};

export default Profile;
