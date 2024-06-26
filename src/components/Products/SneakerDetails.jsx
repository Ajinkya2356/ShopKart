import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import shoe from "../../../image/shoe.png";
import Shoe1 from "../../../image/Shoe1.png";
import BasicTabs from "./Tabs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormDialog from "./Review";
const SneakerDetails = () => {
  const colors = [
    "#ffa500",
    "#0000ff",
    "#ff69b4",
    "#00ffff",
    "#ff033e",
    "#ffa500",
    "#0000ff",
    "#ff69b4",
    "#00ffff",
    "#ff033e",
  ];
  return (
    <Box
      style={{
        /* border: "2px solid white", */
        borderRadius: "10px",
        padding: "10px",
        width: "90%",
        margin: "auto",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        style={{
          maxWidth: "50%",
        }}
      >
        <Box
          style={{
            padding: "20px",
          }}
        >
          <Carousel
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
            showArrows={false}
          >
            <img src={shoe} />
            <img src={Shoe1} />
          </Carousel>
        </Box>
        <Box
          style={{
            padding: "20px",
          }}
        >
          <BasicTabs />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          padding: "20px",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Product Name</Typography>
        <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Rating value={5} readOnly></Rating>{" "}
          <Typography variant="body2">157 Reviews</Typography>
        </Box>
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
          }}
        >
          $200
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontWeight: "bold",
          }}
        >
          Colors
        </Typography>
        <Box
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, auto)",
            gridTemplateColumns: "repeat(6, auto)",
            gap: "10px",
            padding: "10px",
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "10%",
                backgroundColor: color,
                cursor: "pointer",
                /*  border: color === selectedColor ? "2px solid white" : "none", */
              }}
            ></div>
          ))}
        </Box>
        <Box>
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            Available Sizes
          </Typography>
          <Box
            style={{
              display: "grid",
              gridTemplateRows: "repeat(3, auto)",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "10px",
              padding: "10px",
            }}
          >
            <Button variant="contained">6</Button>
            <Button variant="contained">7</Button>
            <Button variant="contained">8</Button>
            <Button variant="contained">9</Button>
            <Button variant="contained">10</Button>
            <Button variant="contained">11</Button>
            <Button variant="contained">12</Button>
          </Box>
        </Box>
        <Typography
          style={{
            fontWeight: "bold",
          }}
        >
          Stock 
        </Typography>
        <TextField type="number" />
        <Box
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Button variant="outlined">Add to cart</Button>
          <IconButton
            style={{
              border: "1px solid gray",
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
        
      </Box>
    </Box>
  );
};

export default SneakerDetails;
