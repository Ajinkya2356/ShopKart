import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  BrandButtonText,
  BrandDescription,
  HomeText,
  SectionText,
  SectionText2,
} from "../../constants/constants";
import section1 from "../../../image/section1.avif";
import section2 from "../../../image/section2.avif";
import section3 from "../../../image/section3.avif";
import { Rating } from "@mui/material";
const Section = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "40px",
        background: "linear-gradient(135deg, #333, #0A192F)",
      }}
    >
      <Box
        style={{
          /* border: "2px solid white", */
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding:"0px 20px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            color={"white"}
            sx={{
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            {SectionText}
          </Typography>
          <Typography
            variant="h4"
            color={"white"}
            sx={{
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            {SectionText2}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color={"white"}
          style={{
            width: "50%",
          }}
        >
          {BrandDescription}
        </Typography>
        <Typography
          variant="body2"
          color={"white"}
          style={{
            width: "50%",
          }}
        >
          {BrandDescription}
        </Typography>
        <Button
          style={{
            width: "30%",
          }}
          variant="outlined"
        >
          {BrandButtonText}
        </Button>
      </Box>
      <Box
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Box>
          <img
            src={section1}
            height={"300px"}
            style={{
              borderRadius: "20px",
            }}
          />
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img
            src={section2}
            height={"100px"}
            style={{
              borderRadius: "20px",
            }}
          />
          <img
            src={section3}
            height={"250px"}
            style={{
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
