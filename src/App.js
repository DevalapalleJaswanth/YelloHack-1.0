import "./styles.css";
import React, { useState, useEffect } from "react";
import { getUsers } from "./Services";
import { UserCard } from "../src/Components";
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function data() {
      let data = await getUsers(100);
      console.log("users", data);
      let temp = data ? (data.length > 0 ? setUsers([...data]) : "") : "";
      // if (data && data.length > 0) {
      //   setUsers([...data]);
      // }
      //console.log(users);
    }
    data();
  }, []);
  return (
    <div className="App">
      {console.log(users)}
      <div>
        <table>
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
                <tr key={i} className="row">
                  <UserCard user={item} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
