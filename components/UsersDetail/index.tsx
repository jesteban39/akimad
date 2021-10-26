import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import type { userDetail } from "../../types";
import { getUserDetail } from "../../store/getUserDetail";

const UsersDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(
    ({ userDetail }: { userDetail: userDetail }) => userDetail
  );

  useEffect(() => {
    dispatch(getUserDetail(router.query.userLogin as string));
  }, []);

  console.log("us", user);

  return (
    <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card sx={{ minWidth: 200, maxWidth: 300 }}>
        <Box sx={{ margin: 1 }}>
          <Avatar
            alt={`avatar ${user.name}`}
            sx={{ width: 120, height: 120 }}
            src={user.avatar_url}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.login}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ minWidth: 200, maxWidth: 300, margin: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
          Repositories
        </Typography>
        <List>
          {user.repos.map((repo) => (
            <ListItem>
              <ListItemText primary={repo.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ minWidth: 200, maxWidth: 300, margin: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
          Organizations
        </Typography>
        <List>
          {user.orgs.map((org) => (
            <ListItem>
              <ListItemText primary={org.login} secondary={org.description} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default UsersDetail;
