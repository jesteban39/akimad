import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

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
    <Container sx={{display: 'flex'}}>
      <Card sx={{ maxWidth: 345 }}>
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
      <Box sx={{ margin: 2 }}>
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
      <Box sx={{ margin: 2 }}>
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
