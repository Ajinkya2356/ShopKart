import React, { Fragment, useEffect } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Apple from "../../images/apple.png";
import Oneplus from "../../images/oneplus.png";
import pixel from "../../images/pixel.png";
import samsung from "../../images/samsung.jpg";
import vivo from "../../images/vivo.png";
import boat from "../../images/boat.jpg";
import sony from "../../images/sony.png";
import Product from "../Home/Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { clearErrors } from "../../actions/productAction";
import banner from "../../images/banner.png";
import { Button, Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sneaker from "../../images/sneaker2.png";
import sneaker_2 from "../../images/sneaker3.png";
import sneaker_3 from "../../images/sneaker4.png";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const firstEightProducts = Array.isArray(products)
    ? products.slice(0, 8)
    : [];
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  const images = [banner, sneaker, sneaker_2, sneaker_3];
  const brandImages = [Apple, Oneplus, pixel, samsung, vivo, boat, sony];
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ShopCart" />
          <div className="container">
            <Box className="banner">
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box className="container1">
                  <Typography
                    style={{
                      fontFamily: "Orbitron",
                      fontSize: "4rem",
                      fontWeight: "800",
                      color: "#333",
                    }}
                  >
                    COMFORT & MAGIC AWAITS EVERYDAY
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      marginTop: "30px",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#333",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: "600",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Shop Now
                    </Button>
                    <Box>
                      <Typography style={{ color: "black" }}>
                        4.9 | <span>⭐⭐⭐⭐⭐</span>
                      </Typography>
                      <Typography style={{ color: "black" }}>
                        Rated by 1000+ Customers
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="productCont">
                    {products.slice(0, 3).map((product, index) => {
                      return <Product key={index} product={product} />;
                    })}
                  </Box>
                </Box>
                <Box className="container2">
                  
                </Box>
              </Box>
            </Box>
            <div className="products1">
              <h1>Featured Products</h1>
              <div className="product2">
                {firstEightProducts &&
                  firstEightProducts.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </div>
            {/* <div className="banner">
              <h1>Limited Time Offer</h1>
              <h2>Special Edition</h2>
              <p>
                Customize gadgets and electronics 
                <br /> at very affordable prices with best quality
                only on ShopCart.
              </p>
              <h4>Buy anything this new year At 20% Discount, Use Code NEWYEAR20</h4>
              <button>Shop Now</button>
            </div> */}
            <div className="symbols">
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-globe-central-south-asia"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
                </svg>
                <h4>Worldwide Shipping</h4>
                <p>
                  It elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                <h4>Best Quality</h4>
                <p>
                  It elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-tags-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                </svg>
                <h4>Best Offers</h4>
                <p>
                  It elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-shield-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56" />
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <h4>Secure Payments</h4>
                <p>
                  It elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
