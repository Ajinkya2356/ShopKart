import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Forum = () => {
  // Sample data for forum topics
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
    <Container
      maxWidth="lg"
      style={{
        padding: "2rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Forum
      </Typography>
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
    </Container>
  );
};

export default Forum;
