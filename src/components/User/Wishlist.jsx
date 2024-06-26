import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Sneaker from "../Products/Sneaker";
import CloseIcon from "@mui/icons-material/Close";
const Wishlist = () => {
  return (
    <Box
      style={{
        padding: "2rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0rem 2rem",
        }}
      >
        <Typography variant="h4">Wishlist</Typography>
        <Button>Clear All</Button>
      </Box>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1rem 2rem",
        }}
      >
        {Array(10)
          .fill("*")
          .map((_) => {
            return (
              <Box
                style={{
                  /* border: "2px solid white", */
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <IconButton>
                  <CloseIcon />
                </IconButton>
                <Sneaker />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Wishlist;
