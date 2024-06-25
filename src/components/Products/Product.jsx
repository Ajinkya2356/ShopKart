import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RangeSlider from "./TwoSlider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Sneaker from "../Sneaker";
const Product = () => {
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
  const brands = [
    "All Sneakers",
    "Nike",
    "Sparx",
    "Adidas",
    "Bata",
    "Pragon",
    "Reebok",
    "Puma",
    "Woodland",
    "RedTape",
    "Skechers",
    "Converse",
    "Vans",
    "Crocs",
    "Action",
    "Liberty",
    "Fila",
    "Lee Cooper",
    "Clarks",
    "Hush Puppies",
  ];
  const [expandable, setExpandable] = useState({
    color: true,
    price: false,
    brand: false,
    size: false,
    style: false,
  });
  const handleExpand = (type) => {
    setExpandable({
      ...expandable,
      [type]: !expandable[type],
    });
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center", 
          padding: "20px",
          paddingRight:"50px",
          gap:"10px"
        }}
      >
        <Button>Filters</Button>
        <Button>Sort By</Button>
      </Box>
      <Box
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            maxWidth: "300px",
            maxHeight: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minWidth: "300px",
            backgroundColor: "#333",
            borderRadius: "20px",
          }}
        >
          <Typography variant="p">SNEAKERS</Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">COLOR</Typography>
            <IconButton onClick={() => handleExpand("color")}>
              {expandable.color ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {expandable.color && (
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    cursor: "pointer",
                    /*  border: color === selectedColor ? "2px solid white" : "none", */
                  }}
                ></div>
              ))}
            </Box>
          )}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">PRICE</Typography>
            <IconButton onClick={() => handleExpand("price")}>
              {expandable.price ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {expandable.price && (
            <Box>
              <RangeSlider />
            </Box>
          )}

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">BRAND</Typography>
            <IconButton onClick={() => handleExpand("brand")}>
              {expandable.brand ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {expandable.brand && (
            <Box
              style={{
                marginTop: "10px",
                maxHeight: "200px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "#fff #333",
              }}
            >
              {brands.map((brand, index) => {
                return (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2">{brand}</Typography>
                    <Checkbox />
                  </Box>
                );
              })}
            </Box>
          )}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">SIZE</Typography>
            <IconButton onClick={() => handleExpand("size")}>
              {expandable.size ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {expandable.size && (
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button variant="contained">7</Button>
              <Button variant="contained">8</Button>
              <Button variant="contained">9</Button>
              <Button variant="contained">10</Button>
              <Button variant="contained">11</Button>
              <Button variant="contained">12</Button>
            </Box>
          )}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p">STYLE</Typography>
            <IconButton onClick={() => handleExpand("style")}>
              {expandable.style ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          {expandable.style && (
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button variant="contained">Casual</Button>
              <Button variant="contained">Sports</Button>
              <Button variant="contained">Formal</Button>
              <Button variant="contained">Sneakers</Button>
              <Button variant="contained">Loafers</Button>
              <Button variant="contained">Slippers</Button>
            </Box>
          )}
        </Box>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => {
            return <Sneaker key={index} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Product;