import React, { useState, useEffect } from "react";
import { UserCard } from "../../src/Components";
import "../../src/styles.css";

export default function UserTable({
  users,
  callbackSelect,
  callbackClass,
  mode
}) {
  //const [style, setStyle] = useState("");
  console.log(mode);
  return (
    <div className="table-responsive">
      <table className="table ">
        <thead>
          <tr className="header-row">
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 &&
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
