import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "../Home/home.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
const Sneaker = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box className={styles.sneaker}>
      <Box
        style={{
          position: "relative",
          height: "80%",
        }}
        onClick={(e) => {
          console.log("Clicked");
          e.stopPropagation();
          navigate(`/sneaker/${data?._id}`);
        }}
      >
        <img
          src={data?.images?.[0]?.url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <IconButton
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
      <Box className={styles.productDescription}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {data?.name}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Rs.{data?.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Sneaker;
