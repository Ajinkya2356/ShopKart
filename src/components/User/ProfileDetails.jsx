import React from "react";

const ProfileDetails = () => {
  return (
    <Box>
      <Avatar
        style={{
          height: "100px",
          width: "100px",
        }}
      ></Avatar>
      <Typography variant="h5">Name</Typography>
      <Typography variant="h6">Username</Typography>
      <Box>
        <Typography variant="body1">Bio</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi
          laudantium a ratione natus reprehenderit nam nisi itaque quaerat
          aliquam officiis quibusdam fuga, aut dignissimos ea vel ab eius saepe!
        </Typography>
      </Box>
      <Typography>Location</Typography>
      <Typography>Website</Typography>
    </Box>
  );
};

export default ProfileDetails;
