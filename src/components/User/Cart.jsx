import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";

const Cart = () => {
  const products = [
    {
      name: "Nike Air Max",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b9b1b1b-1b1b-4b1b-8b1b-1b1b1b1b1b1b/air-max-90-shoe-0ZzRbK.jpg",
      quantity: 1,
      price: 100,
    },
    {
      name: "Adidas Superstar",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b9b1b1b-1b1b-4b1b-8b1b-1b1b1b1b1b1b/air-max-90-shoe-0ZzRbK.jpg",
      quantity: 1,
      price: 100,
    },
  ];
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          padding: "1rem 2rem",
          backgroundColor: "#333",
        }}
      >
        <Box style={{ width: "60%" }}>
          <Typography variant="h6">Product</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <Typography variant="h6">Quantity</Typography>
          <Typography variant="h6">Subtotal</Typography>
        </Box>
      </Box>
      <Box>
        {products.map((product, index) => {
          return (
            <Box
              style={{
                display: "flex",
                padding: "1rem 2rem",
              }}
            >
              <Box
                style={{ width: "60%", display: "flex", alignItems: "center" }}
              >
                <img
                  src={product.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "1rem",
                    borderRadius: "10px",
                  }}
                />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">Remove</Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "40%",
                }}
              >
                <TextField value={product.quantity} type="number" />
                <Typography variant="h6">{product.price}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          style={{
            width: "40%",
            borderTop: "2px solid white",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding: "1rem 2rem",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Gross Total</Typography>
            <Typography variant="h6">200</Typography>
          </Box>
          <Button
            style={{ alignSelf: "flex-end", borderRadius: "20px" }}
            variant="contained"
          >
            Check out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
