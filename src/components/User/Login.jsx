import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors } from "../../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../../Action/User/userAction";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import {
  Email,
  Home,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [user, setUser] = useState({});
  const [avatarPreview, setAvatarPreview] = useState("");
  const { isAuthenticated, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        ),
        variant: "error",
      });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, error]);
  const IconToLabelMap = {
    Name: <AccountCircleIcon />,
    Email: <Email />,
    Mobile_No: <Phone />,
    Address: <Home />,
  };
  return (
    <Box
      minWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        /* border: "2px solid red", */
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "20px",
          backgroundColor: "#333",
          transition: "all 0.5s",
        }}
      >
        <Box
          style={{
            display: "inherit",
            gap: "20%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => setActiveTab(0)}
            style={{
              /* backgroundColor: activeTab == 0 ? "#333" : "transparent", */
              borderBottom: activeTab == 0 ? "2px solid white" : "none",
              flex: 1,
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => setActiveTab(1)}
            style={{
              /* backgroundColor: activeTab == 1 ? "#333" : "transparent", */
              borderBottom: activeTab == 1 ? "2px solid white" : "none",
              flex: 1,
            }}
          >
            Register
          </Button>
        </Box>
        {activeTab == 0 ? (
          <Box
            style={{
              display: "inherit",
              gap: "20px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {Array.from(["Email", "Password"]).map((item, index) => {
              return (
                <TextField
                  label={item}
                  fullWidth
                  key={index}
                  InputProps={{
                    endAdornment:
                      item == "Password" ? (
                        <IconButton>
                          {show ? (
                            <Visibility onClick={() => setShow(false)} />
                          ) : (
                            <VisibilityOff onClick={() => setShow(true)} />
                          )}
                        </IconButton>
                      ) : null,
                  }}
                  type={
                    item == "Password" && show ? "text" : item.toLowerCase()
                  }
                  value={user[item.toLowerCase()] || ""}
                  onChange={(e) => {
                    setUser({ ...user, [item.toLowerCase()]: e.target.value });
                  }}
                />
              );
            })}
            <Link
              to="/forgot-password"
              style={{
                color: "white",
                textDecoration: "none",
                alignSelf: "flex-end",
              }}
            >
              Forgot Password ?
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(loginUser(user));
                setUser({});
                setAvatarPreview("");
              }}
            >
              Login
            </Button>
          </Box>
        ) : (
          <Box
            style={{
              display: "inherit",
              gap: "20px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              style={{
                display: "grid",
                gridTemplateRows: "repeat(2,1fr)",
                gridTemplateColumns: "repeat(2,1fr)",
                rowGap: "20px",
                columnGap: "20px",
              }}
            >
              {Array.from([
                "Name",
                "Email",
                "Password",
                "Mobile_No",
                "Address",
              ]).map((item, index) => {
                return (
                  <TextField
                    label={item}
                    fullWidth
                    key={index}
                    InputProps={{
                      endAdornment:
                        item == "Password" ? (
                          <IconButton>
                            {show ? (
                              <Visibility onClick={() => setShow(false)} />
                            ) : (
                              <VisibilityOff onClick={() => setShow(true)} />
                            )}
                          </IconButton>
                        ) : null,
                      startAdornment: (
                        <IconButton>{IconToLabelMap[item]}</IconButton>
                      ),
                    }}
                    type={
                      item === "Password"
                        ? show
                          ? "text"
                          : "password"
                        : item === "Name"
                        ? "text"
                        : item.toLowerCase()
                    }
                    value={user[item.toLowerCase()] || ""}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [item.toLowerCase()]: e.target.value,
                      });
                    }}
                  />
                );
              })}
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Avatar src={avatarPreview} />
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setAvatarPreview(reader.result);
                      setUser({ ...user, avatar: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <Button variant="contained" onClick={handleButtonClick}>
                Upload Avatar
              </Button>
            </Box>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(registerUser(user));
                setUser({});
                setAvatarPreview("");
              }}
            >
              Register
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
