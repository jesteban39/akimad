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

import type { user } from "../../types";

const UsersList = () => {
  const { usersList } = useSelector((state: { usersList: user[] }) => state);

  return (
    <Container>
      <List>
        {usersList.map((user) => (
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
  );
};
export default UsersList;
