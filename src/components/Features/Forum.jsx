import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {
  Button,
  Drawer,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Gallery } from "react-grid-gallery";
const Forum = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const topics = [
    {
      id: 1,
      title: "General Discussion",
      description: "Talk about anything and everything.",
    },
    {
      id: 2,
      title: "Sneaker Releases",
      description: "Discuss the latest sneaker releases.",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Buy, sell, or trade sneakers.",
    },
    // Add more topics as needed
  ];

  return (
    <>
      <Container
        maxWidth="false"
        style={{
          padding: "0.5rem",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          backgroundColor: "#333",
        }}
      >
        <Box>
          <IconButton onClick={() => setOpen(true)}>
            <MenuOpenIcon style={{ color: "white", fontSize: "2rem" }} />
          </IconButton>
        </Box>
        <Typography variant="h4" component="h1">
          Forum
        </Typography>
      </Container>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            style={{
              alignSelf: "flex-end",
            }}
          >
            <MenuOpenIcon style={{ color: "white", fontSize: "2rem" }} />
          </IconButton>
          <List>
            {topics.map((topic) => (
              <React.Fragment key={topic.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={topic.title}
                    secondary={topic.description}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box>
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0rem",
          }}
        >
          <Box
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl style={{ width: "20%" }}>
              <InputLabel id="demo-simple-select-label">Recent</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Recent"
                style={{
                  borderRadius: "20px",
                }}
              >
                <MenuItem value={10}>Recent</MenuItem>
                <MenuItem value={20}>Popular</MenuItem>
                <MenuItem value={30}>Top</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Search"
              InputProps={{
                style: {
                  borderRadius: "20px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              style={{
                margin: "1rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "20%",
                backgroundColor: "#333",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <TextField
                required
                id="post-title"
                label="Title"
                variant="outlined"
              />
              <TextField
                required
                id="post-content"
                label="Content"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                Create Post
              </Button>
            </Box>
            <Box
              style={{
                padding: "1rem",
                flex: 1,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  backgroundColor: "#333",
                  flexDirection: "column",
                  padding: "0.5rem 1rem",
                  borderRadius: "10px",
                }}
              >
                <Box
                  style={{
                    display: "inherit",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => setVisible((prev) => !prev)}>
                    {visible ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                  >
                    <Typography>Headline</Typography>
                    <Typography>Time</Typography>
                  </Box>
                </Box>

                {visible && (
                  <Box
                    style={{
                      padding: "0rem 2.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Gallery
                      images={[
                        {
                          src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                          width: 4,
                          height: 3,
                          isSelected: false,
                        },
                        {
                          src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
                          width: 4,
                          height: 3,
                          isSelected: false,
                        },
                      ]}
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime reiciendis ut amet cum blanditiis ducimus unde
                    incidunt veritatis ratione aliquid deserunt, optio
                    doloribus, vitae voluptas eligendi, culpa consectetur.
                    Praesentium, quam?
                  </Box>
                )}
                <IconButton
                  style={{
                    alignSelf: "flex-end",
                  }}
                >
                  <ForumIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Forum;
