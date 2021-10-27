import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const UsersDetailSkeleton = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card sx={{ minWidth: 200, maxWidth: 300 }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton>
            <Avatar sx={{ width: 120, height: 120 }} />
          </Skeleton>
        </Box>
        <CardContent>
          <Skeleton>
            <Typography gutterBottom variant="h5" component="div">
              .
            </Typography>
          </Skeleton>

          <Skeleton>
            <Typography variant="body2" color="text.secondary">
              .
            </Typography>
          </Skeleton>
        </CardContent>
      </Card>
      <Box sx={{ minWidth: 200, maxWidth: 300, margin: 2 }}>
        <Skeleton>
          <Typography gutterBottom variant="h6" component="div">
            .
          </Typography>
        </Skeleton>
        <List>
          <ListItem>
            <Skeleton>
              <ListItemText primary="." />
            </Skeleton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ minWidth: 200, maxWidth: 300, margin: 2 }}>
        <Skeleton>
          <Typography gutterBottom variant="h6" component="div">
            .
          </Typography>
        </Skeleton>

        <List>
          <ListItem>
            <Skeleton>
              <ListItemText primary="." secondary="." />
            </Skeleton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default UsersDetailSkeleton;
