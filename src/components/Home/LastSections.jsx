import { Box, Typography } from "@mui/material";
import React from "react";
import { SneakerText } from "../../constants/constants";
import Shoe1 from "../../../image/Shoe1.png";
import Shoe2 from "../../../image/Shoe2.png";
import Shoe3 from "../../../image/Shoe3.png";
import Shoe4 from "../../../image/Shoe4.png";
import "./LastSections.css";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const LastSections = () => {
  const shoes = [Shoe1, Shoe2, Shoe3, Shoe4];
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "40px",
        background: "linear-gradient(135deg, #333, #0A192F)",
      }}
    >
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Creates two columns
          gap: "30px",
          padding: "20px",
          height: "60%",
        }}
      >
        {shoes.map((shoe, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                flexWrap: "wrap",
                gap: "10px",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
              }}
            >
              <img
                src={shoe}
                alt="Shoe1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform:
                    index == 0
                      ? "rotate(-20deg) scaleX(-1) "
                      : "rotate(-20deg)",
                }}
              />
            </div>
          );
        })}
      </Box>
      <Box
        style={{
          width: "28%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "'Orbitron', sans-serif" }}>
          {SneakerText}
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              color: "white",
            }}
          >
            <BrightnessHighIcon style={{ color: "green" }} />
            <div>
              <Typography variant="body1">Best Quality Shoes</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                iure at omnisnesciunt.
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              color: "white",
            }}
          >
            <HistoryToggleOffIcon style={{ color: "red" }} />
            <div>
              <Typography variant="body1">Long Lasting Shoes</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                iure at omnisnesciunt.
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              color: "white",
            }}
          >
            <MonetizationOnIcon style={{ color: "yellow" }} />
            <div>
              <Typography variant="body1">Best Quality Price</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                iure at omnisnesciunt.
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default LastSections;
