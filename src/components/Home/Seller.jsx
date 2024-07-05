import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SellerText } from "../../constants/constants";
import Sneaker from "../Products/Sneaker";
import { useSelector } from "react-redux";

const Seller = () => {
  const {sneakers}=useSelector((state)=>state.sneaker)
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
        {sneakers.slice(0,10).map((data, index) => {
          return <Sneaker key={index} data={data}/>;
        })}
      </Box>
    </Box>
  );
};

export default Seller;
