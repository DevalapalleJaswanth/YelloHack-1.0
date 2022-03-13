import React, { useState, useEffect } from "react";
import { UserCard } from "../../src/Components";
import "../../src/styles.css";

export default function UserTable({
  users,
  callbackSelect,
  callbackClass,
  mode
}) {
  const [sort, setSort] = useState("");
  const [ascending, setAscending] = useState([...users].sort());
  const [descending, setDescending] = useState([...users].sort().reverse());
  const [displayStyle, setDisplayStyle] = useState({
    display: "none",
    position: "absolute",
    left: "90px",
    top: "25px",
    backgroundColor: "grey",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    padding: "10px"
  });
  console.log(mode);
  return (
    <div className="table-responsive">
      <table className="table ">
        <thead>
          <tr className="header-row">
            <th style={{ display: "flex", alignItems: "center" }}>
              Name
              <div
                onClick={() => {
                  if (displayStyle.display === "none")
                    setDisplayStyle({ ...displayStyle, display: "block" });
                  else setDisplayStyle({ ...displayStyle, display: "none" });
                  console.log(displayStyle);
                }}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </div>
              <div style={displayStyle}>
                <div
                  onClick={() => {
                    setSort("Ascending");
                    let temp = [...users];
                    setAscending([...temp].sort());
                    console.log(sort);
                    if (displayStyle.display === "none")
                      setDisplayStyle({ ...displayStyle, display: "block" });
                    else setDisplayStyle({ ...displayStyle, display: "none" });
                  }}
                >
                  Ascending
                </div>
                <div
                  onClick={() => {
                    setSort("Descending");
                    console.log(sort);
                    let temp = [...users];
                    setDescending([...temp].sort().reverse());
                    console.log(sort);
                    if (displayStyle.display === "none")
                      setDisplayStyle({ ...displayStyle, display: "block" });
                    else setDisplayStyle({ ...displayStyle, display: "none" });
                  }}
                >
                  Descending
                </div>
              </div>
            </th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {sort !== ""
            ? sort === "Ascending"
              ? ascending.length > 0 &&
                ascending.map((item, i) => (
                  <tr
                    key={i}
                    className={` ${mode === true ? "dark-myrow" : "myrow"}`}
                    onClick={() => {
                      callbackSelect(item);
                      //setStyle(callbackClass(item));
                    }}
                  >
                    <UserCard user={item} />
                  </tr>
                ))
              : descending.length > 0 &&
                descending.map((item, i) => (
                  <tr
                    key={i}
                    className={` ${mode === true ? "dark-myrow" : "myrow"}`}
                    onClick={() => {
                      callbackSelect(item);
                      //setStyle(callbackClass(item));
                    }}
                  >
                    <UserCard user={item} />
                  </tr>
                ))
            : users.length > 0 &&
              users.map((item, i) => (
                <tr
                  key={i}
                  className={` ${mode === true ? "dark-myrow" : "myrow"}`}
                  onClick={() => {
                    callbackSelect(item);
                    //setStyle(callbackClass(item));
                  }}
                >
                  <UserCard user={item} />
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
