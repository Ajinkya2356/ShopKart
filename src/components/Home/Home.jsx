import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./home.module.css";
import {
  ButtonText,
  HomeText,
  MainText,
  MainText2,
  MainText3,
} from "../../constants/constants";
import { Rating } from "@mui/material";
import Sneaker from "../Products/Sneaker";
import SneakerModel from "../3D/SneakerModel";
import Stripes from "./Stripes";
import Brand from "./Brand";
import Seller from "./Seller";
import Section from "./Section";
import LastSections from "./LastSections";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../../Action/Sneaker/sneakerAction";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSneakers());
  }, []);
  const { sneakers } = useSelector((state) => state.sneaker);
  return (
    <>
      <Box className={styles.container}>
        <SneakerModel />
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
            {sneakers.slice(0, 3).map((data, index) => {
              return <Sneaker key={index} data={data} />;
            })}
          </Box>
        </Box>
      </Box>
      <Stripes />
      <Brand />
      <Seller />
      <Section />
      <LastSections />
    </>
  );
};
export default Home;
