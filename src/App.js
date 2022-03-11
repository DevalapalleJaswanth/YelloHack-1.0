import "./styles.css";
import React, { useState, useEffect } from "react";
import { getUsers } from "./Services";
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function data() {
      let data = await getUsers(100);
      console.log("users", data);
      let temp = data ? (data.length > 0 ? setUsers([...data]) : "") : "";
      //console.log(users);
    }
    data();
  }, []);
  return (
    <div className="App">
      {console.log(users)}
      <div>
        {/* {users.length > 0 &&
          users.map((item, i) => <div key={i}>{item.name.first}</div>)} */}
      </div>
    </div>
  );
}
