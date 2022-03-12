import "./styles.css";
import React, { useState, useEffect } from "react";
import { getDate, getUsers } from "./Services";
import { UserCard } from "../src/Components";
export default function App() {
  const [users, setUsers] = useState([]);
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    async function data() {
      let data = await getUsers(100);
      console.log("users", data);
      //let temp = data ? (data.length > 0 ? setUsers([...data]) : "") : "";
      if (data && data.length > 0) {
        setUsers([...data]);
      }
      //console.log(users);
    }
    data();
  }, []);
  //let csv = [];
  function handleSelect(item) {
    if (csvData.length === 0) {
      let temp = {
        name: item.name.title + ". " + item.name.first + " " + item.name.last,
        gender: item.gender,
        DOB: getDate(item),
        email: item.email
      };
      // csv.push(temp);
      setCsvData([...csvData, temp]);
    } else {
      let copy = [...csvData];
      let count = 0;
      copy.forEach((ele, i) => {
        if (item.email === ele.email) {
          copy.splice(i, 1);
        } else {
          count++;
        }
      });
      if (count !== csvData.length) {
        //console.log(copy);
        setCsvData(copy);
      } else {
        let temp = {
          name: item.name.title + ". " + item.name.first + " " + item.name.last,
          gender: item.gender,
          DOB: getDate(item),
          email: item.email
        };
        setCsvData([...csvData, temp]);
      }
    }
    //console.log("csvData", csvData);
  }

  return (
    <div className="App">
      {console.log(users, csvData)}
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
                <tr key={i} className="row" onClick={() => handleSelect(item)}>
                  <UserCard user={item} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
