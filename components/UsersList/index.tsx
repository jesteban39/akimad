import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import type { user } from "../../types";

const UsersList = () => {
  const { users, status } = useSelector(
    ({ usersList }: { usersList: { users: user[]; status: string } }) =>
      usersList
  );

  if (status === "rejected")
    return (
      <Stack>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong when querying the data
        </Alert>
      </Stack>
    );

  return status === "fulfilled" ? (
    <Container>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Link href={`/users/${user.login}`}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src={user.avatar_url} alt={`Avatar ${user.login}`} />
                </ListItemAvatar>
                <ListItemText primary={user.login} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  ) : (
    <ListItemButton>
      <ListItemAvatar>
        <Skeleton>
          <Avatar />
        </Skeleton>
      </ListItemAvatar>
      <Skeleton>
        <ListItemText primary="." />
      </Skeleton>
    </ListItemButton>
  );
};
export default UsersList;
