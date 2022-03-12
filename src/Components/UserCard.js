import React from "react";
import { getDate } from "../Services";
import "./UserCard.css";
export default function UserCard({ user }) {
  let DOB = getDate(user);
  return (
    <>
      {user && user.name ? (
        <td className="myflex">
          <img src={user.picture ? user.picture.medium : ""} alt="" />
          <p>
            {user.name.title + ". " + user.name.first + " " + user.name.last}
          </p>
        </td>
      ) : (
        ""
      )}
      {user && user.gender ? <td>{user.gender}</td> : ""}

      <td>{DOB}</td>
      {user && user.email ? <td>{user.email}</td> : ""}
    </>
  );
}
