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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import type { userDetail } from "../../types";
import { getUserDetail } from "../../store/getUserDetail";
import Skeleton from "./Skeleton";

const UsersDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(
    ({ userDetail }: { userDetail: userDetail }) => userDetail
  );

  useEffect(() => {
    dispatch(getUserDetail(router.query.userLogin as string));
  }, []);

  if (user.status === "rejected")
    return (
      <Stack>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong when querying the data — <strong>Go back to start and try again</strong>
        </Alert>
      </Stack>
    );

  return user.status === "fulfilled" ? (
    <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card sx={{ minWidth: 200, maxWidth: 300 }}>
        <Box sx={{ margin: 1 }}>
          <Avatar
            alt={`avatar ${user.userData.name}`}
            sx={{ width: 120, height: 120 }}
            src={user.userData.avatar_url}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.userData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.userData.login}
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
  ) : (
    <Skeleton />
  );
};

export default UsersDetail;
