import React from "react";
import CustomizedSteppers from "./Checkout";
import {
  Typography,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";

const ConfirmOrder = () => {
  return (
    <>
      <CustomizedSteppers activeStep={1} />

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            flex: 1,
            backgroundColor: "#333",
            borderRadius: "20px",
            margin: "1rem 0.5rem",
          }}
        >
          <Typography
            variant="h4"
            style={{
              padding: "1rem",
              borderBottom: "1px solid white",
            }}
          >
            Order Summary
          </Typography>
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">1 X</Typography>
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Product"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                />
                <Typography variant="h6">Product Name</Typography>
              </Box>
              <Box>
                <Typography variant="h6">₹ 1000</Typography>
              </Box>
            </Box>
          ))}
          <Box
            style={{
              borderTop: "2px solid white",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0rem",
            }}
          >
            {Array.from(["Subtotal", "Delivery", "Total"]).map(
              (item, index) => (
                <Box
                  style={{
                    display: "inherit",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">{item}</Typography>
                  <Typography variant="h6">₹ 1000</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
        <Box
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "300px",
            backgroundColor: "#333",
            borderRadius: "20px",
            margin: "1rem 0.5rem",
          }}
        >
          <Typography
            variant="h4"
            style={{
              borderBottom: "1px solid white",
              padding: "1rem",
            }}
          >
            Shipping Info
          </Typography>
          <Typography>Name: John Doe</Typography>
          <Typography>Phone: 1234567890</Typography>
          <Typography>Email: johndoe@gmail.com</Typography>
          <Typography>Address: 123, Main Street, Bangalore, 560001</Typography>
          <Typography>Pincode : 234490</Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Button variant="contained">Go Back</Button>
            <Button variant="contained">Continue to Payment</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmOrder;
