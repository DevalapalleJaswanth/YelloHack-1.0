import React from "react";
import "./UserCard.css";
export default function UserCard({ user }) {
  let DOB = user ? (user.dob ? user.dob.date : "") : "";
  //DOB.toLocaleFormat("%bbbb %d,%Y"); // 30-Jun-2020
  DOB = DOB.split("T")[0];

  const getMonth = (x) => {
    switch (x) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "";
    }
  };
  let m = getMonth(DOB.split("-")[1]);
  DOB = m + " " + DOB.split("-")[2] + "," + DOB.split("-")[0];
  return (
    <>
      {user && user.name ? (
        <td className="flex">
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
