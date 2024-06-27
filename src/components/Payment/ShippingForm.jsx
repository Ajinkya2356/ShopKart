import { Box, Button, TextField } from "@mui/material";
import React from "react";
import CustomizedSteppers from "./Checkout";

const ShippingForm = () => {
  return (
    <>
      <CustomizedSteppers activeStep={0} />
      <Box
        style={{
          display: "flex",
          padding: "2rem",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minWidth: "500px",
          }}
        >
          <TextField label="Full Name" />
          <TextField label="Email" />
          <TextField label="Phone Number" />
          <TextField label="Address" multiline rows={4} />
          <TextField label="Postal Code" />

          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </>
  );
};

export default ShippingForm;
