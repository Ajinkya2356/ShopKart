import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./home.module.css";
import {
  ButtonText,
  HomeText,
  MainText,
  MainText2,
  MainText3,
} from "../../constants/constants";
import Show from "../Show";
import { Rating } from "@mui/material";
import Sneaker from "../Sneaker";
import SneakerModel from "../3D/SneakerModel";
const Home = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.row}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              lineHeight: "1.5",
              letterSpacing: "5px",
            }}
          >
            {MainText}
            <br />
            {MainText2}
            <br />
            {MainText3}
          </Typography>

          <Box className={styles.homeBox}>
            <Button variant="contained" color="primary" href="/sneaker">
              {ButtonText}
            </Button>
            <Box>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Typography>4.9</Typography>
                <Rating name="read-only" value={4.9} readOnly precision={0.5} />
              </div>

              <Typography variant="body2">{HomeText}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              padding: "20px",
            }}
          >
            <Sneaker />
            <Sneaker />
            <Sneaker />
          </Box>
          
        </Box>
        <SneakerModel />
      </Box>
    </>
  );
};
export default Home;
