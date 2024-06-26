import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SellerText } from "../../constants/constants";
import Sneaker from "../Products/Sneaker";

const Seller = () => {
  return (
    <Box
      style={{
        padding: "40px",
        
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          {SellerText}
        </Typography>
        <Button>View All </Button>
      </Box>

      <Box
        style={{
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => {
          return <Sneaker key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Seller;
