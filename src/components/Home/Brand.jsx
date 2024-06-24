import { Box, Button, Typography } from "@mui/material";
import React from "react";
import shoe from "../../../image/shoe.png";
import {
  BrandButtonText,
  BrandDescription,
  BrandText,
} from "../../constants/constants";

const Brand = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0A0A, #434343)",
        gap: "50px",
        "@media (max-width: 768px)": {
          flexDirection: "column",
        },
      }}
    >
      <img
        src={shoe}
        style={{
          transform: "scale(1) scaleX(-1)",
          height: "300px",
          width: "300px",
          objectFit: "contain",
          boxShadow: "0px 0px 20px #fff",
          animation: "rotateImage 20s infinite linear",
        }}
      />

      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            lineHeight: "1.5",
            letterSpacing: "2px",
            color: "white",
            fontWeight: "bold",
            fontSize: "2.5rem",
            textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {BrandText}
        </Typography>
        <Typography variant="body2" color={"white"}>
          {BrandDescription}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            width: "200px",
            color: "white",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.2)",
              borderColor: "white",
            },
          }}
        >
          {BrandButtonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Brand;
