import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./stripe.module.css";
const Stripes = () => {
  const sports = [
    "Baseball",
    "Football",
    "Soccer",
    "Tennis",
    "Volleyball",
    "Running",
    "Golf",
    "Walking",
  ];

  return (
    <Box
      sx={{
        overflow: "hidden",
        paddingTop: "50px",
        marginTop: "40px",
        marginBottom: "40px",
        paddingBottom: "50px",
      }}
    >
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <Box className={index == 0 ? styles.stripe : styles.stripe2}>
            {index === 0
              ? sports.map((sport, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {sport.toUpperCase()}
                  </Typography>
                ))
              : [...sports].reverse().map((sport, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {sport.toUpperCase()}
                  </Typography>
                ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default Stripes;
