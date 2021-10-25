import React from "react";
import type { userDetail } from "../types";

const UsersDetail = ({ user }: { user: userDetail }) => {
  return (
    <article className="container">
      <div>
        <img src={user.avatar_url} />
        <span>{user.login}</span>
        <span>{user.name}</span>
      </div>
      <div>
        <h2>Repositories</h2>
        <div>
          {user.repos.map((repo) => {
            return <span>{repo.name}</span>;
          })}
        </div>
      </div>

      <div>
        <h2>Organizations</h2>
        <div>
          {user.orgs.map((org) => (
            <p>
              <span>{org.login}</span>
              <span>{org.description}</span>
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
export default UsersDetail;
