import React from "react";
import CustomizedSteppers from "./Checkout";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import EventNoteIcon from "@mui/icons-material/EventNote";
const Payment = () => {
  return (
    <Box>
      <CustomizedSteppers activeStep={2} />
      <Box
        style={{
          margin: "2rem",
          padding: "2rem",
          backgroundColor: "#333",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          style={{ padding: "1rem", borderBottom: "1px solid white" }}
        >
          Payment
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "2rem 0rem",
          }}
        >
          <Box
            sx={{
              padding: 2,
              border: "1px solid #ccc",
              borderRadius: "8px",
              flex: 1,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Order Summary
            </Typography>
            {Array.from([
              "SubTotal",
              "Discount",
              "Delivery fee",
              "Coupon Code",
              "Total",
            ]).map((item, index) => {
              return index != 3 ? (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    paddingTop: index == 4 ? "1rem" : "0rem",
                    borderTop: index == 4 ? "1px solid #ccc" : "none",
                  }}
                >
                  <Typography variant="h6">{item}</Typography>
                  <Typography variant="h6">$ 1000</Typography>
                </Box>
              ) : (
                <Box
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField label={item} />
                  <Typography variant="h6">- $ 20</Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1.2rem 1rem",
              borderRadius: "8px",
              minWidth: "300px",
              backgroundColor: "#4d4d4d",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Name on Card"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Card No"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Expiry Date"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    <EventNoteIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="CVV"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained">Pay</Button>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
