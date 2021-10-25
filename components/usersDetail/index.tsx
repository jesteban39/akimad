import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";


import type { userDetail } from "../../types";
import { getUserDetail } from "../../store/getUserDetail";

const UsersDetail = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(
    ({ userDetail }: { userDetail: userDetail }) => userDetail
  );

  useEffect(() => {
    dispatch(getUserDetail(router.query.userLogin as string));
  }, []);
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
