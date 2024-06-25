import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "../components/Home/home.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Sneaker = () => {
  return (
    <Box className={styles.sneaker}>
      <Box
        style={{
          position: "relative",
          height:"80%"
        }}
      >
        <img
          src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D`}
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
          Sneaker Name
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Sneaker Price
        </Typography>
      </Box>
    </Box>
  );
};

export default Sneaker;
