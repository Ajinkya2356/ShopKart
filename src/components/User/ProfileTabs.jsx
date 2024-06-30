import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { PhotoCamera, Visibility, VisibilityOff } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import {
  changePassword,
  updateUserAvatar,
  updateUserProfile,
} from "../../../Action/User/userAction";
const recentActivities = [
  { description: "Logged in from a new device", date: "2023-04-01" },
  { description: "Updated profile picture", date: "2023-04-02" },
  { description: "Made a new post: 'My First Post!'", date: "2023-04-03" },
];
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

export default function ProfileTabs() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { user, error } = useSelector((state) => state.user);
  const [values, setValues] = React.useState(user);
  const [passwords, setPasswords] = React.useState({});
  const [show, setShow] = React.useState({
    "Old Password": false,
    "New Password": false,
    "Confirm Password": false,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPasswords({});
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [avatar, setAvatar] = React.useState(user?.avatar?.url);
  const [avatarPreview, setAvatarPreview] = React.useState(user?.avatar?.url);
  const IconToLabelMap = {
    Name: <AccountCircleIcon />,
    Email: <EmailIcon />,
    Address: <HomeIcon />,
    "Mobile No": <WifiCalling3Icon />,
  };
  React.useEffect(() => {
    if (user) {
      setValues(user);
      setAvatarPreview(user.avatar.url);
    }
  }, [user]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Edit Profile" {...a11yProps(0)} />
          <Tab label="Account Settings" {...a11yProps(1)} />
          <Tab label="Activity Log" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ width: "100%", p: 3 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} textAlign="center">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setAvatar(reader.result);
                    };
                    reader.readAsDataURL(file);
                    setAvatarPreview(URL.createObjectURL(file));
                  }
                }}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Avatar
                    sx={{
                      height: "100px",
                      width: "100px",
                      m: "auto",
                      "&:hover": {
                        opacity: 0.7,
                      },
                    }}
                    src={avatarPreview}
                  />
                  <PhotoCamera sx={{ position: "absolute", color: "white" }} />
                </IconButton>
              </label>
            </Grid>
            {["Name", "Email", "Address", "Mobile No"].map((label, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  value={
                    label != "Mobile No"
                      ? values?.[label.toLowerCase()]
                      : values?.mobileNo
                  }
                  InputProps={{
                    startAdornment: (
                      <IconButton>{IconToLabelMap[label]}</IconButton>
                    ),
                  }}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      [label.toLowerCase()]: e.target.value,
                    });
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ "&:hover": { backgroundColor: "green", color: "white" } }}
                onClick={() => {
                  if (avatar != user?.avatar?.url) {
                    dispatch(updateUserAvatar(avatar));
                  }
                  dispatch(updateUserProfile(values));
                }}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="error"
                fullWidth
                sx={{
                  "&:hover": { backgroundColor: "darkred", color: "white" },
                }}
                onClick={() => {
                  setAvatarPreview(user?.avatar?.url);
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            style={{
              display: "inherit",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "inherit",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography variant="h6">Email Verification</Typography>
              <Typography variant="body2" color="#A9A9A9">
                Your email is not verified. Click here to verify your email.
              </Typography>
            </Box>
            <Button>Verify</Button>
          </Box>
          <Box
            style={{
              display: "inherit",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "inherit",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography variant="h6">Password</Typography>
              <Typography variant="body2" color="#A9A9A9">
                Your password is secure. Click here to change your password.
              </Typography>
            </Box>
            <Button onClick={handleClickOpen}>Change Password</Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                dispatch(changePassword(passwords));
                setPasswords({});
                handleClose();
              },
            }}
          >
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent>
              {Array.from([
                "Old Password",
                "New Password",
                "Confirm Password",
              ]).map((label, index) => (
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label={label}
                  type={show[label] ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  value={passwords[label.toLowerCase()] || ""}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          setShow({
                            ...show,
                            [label]: !show[label],
                          })
                        }
                      >
                        {show[label] ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  onChange={(e) => {
                    setPasswords((prev) => ({
                      ...prev,
                      [label.toLowerCase()]: e.target.value,
                    }));
                  }}
                />
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </Dialog>
          <Box
            style={{
              display: "inherit",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "inherit",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography variant="h6">Disable Account</Typography>
              <Typography variant="body2" color="#A9A9A9">
                Your account is enabled. Click here to disable your account.
              </Typography>
            </Box>
            <Button color="error">Disable</Button>
          </Box>
          <Box
            style={{
              display: "inherit",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "inherit",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography variant="h6">Disable Account</Typography>
              <Typography variant="body2" color="#A9A9A9">
                This will delete your account permanently. Click here to delete
              </Typography>
            </Box>
            <Button color="error">Delete</Button>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h5">Recent Activity</Typography>
        <List>
          {recentActivities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={activity.description}
                secondary={activity.date}
              />
            </ListItem>
          ))}
        </List>
      </CustomTabPanel>
    </Box>
  );
}
