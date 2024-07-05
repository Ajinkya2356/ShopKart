import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar, Rating, Typography } from "@mui/material";
import FormDialog from "./Review";
import { useSelector } from "react-redux";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { sneaker } = useSelector((state) => state.sneaker);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Help" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {sneaker.description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <FormDialog />
          </Box>
          {sneaker?.reviews.map((review, index) => {
            return (
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Avatar />
                <Box
                  style={{
                    display: "inherit",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <Rating value={review.rating} />
                  <Typography>
                    {review.comment}
                  </Typography>
                  <Typography>{review.name}</Typography>
                  <Typography variant="body2">Date</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Help
      </CustomTabPanel>
    </Box>
  );
}
