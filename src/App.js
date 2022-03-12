import "./styles.css";
import "bootstrap/scss/bootstrap.scss";

import React, { useState, useEffect } from "react";
import { getDate, getUsers } from "./Services";
import { UserCard } from "../src/Components";
import { CSVLink } from "react-csv";

export default function App() {
  const [users, setUsers] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [search, setSearch] = useState([]);
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
  function handleSearch(e) {
    console.log(e.target.value);
  }
  function handleSelect(item) {
    if (csvData.length === 0) {
      let temp = {
        name: item.name.title + ". " + item.name.first + " " + item.name.last,
        gender: item.gender,
        DOB: getDate(item),
        email: item.email
      };

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
  }
  let headers = [
    { label: "Name", key: "name" },
    { label: "Gender", key: "gender" },
    { label: "DOB", key: "DOB" },
    { label: "Email", key: "email" }
  ];
  return (
    <div className="App ">
      {console.log(users, csvData)}
      <div className="center">
        <div className="display-flex ">
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search bi-primary"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div>
            <CSVLink
              data={csvData}
              headers={headers}
              filename={"my-file.csv"}
              className="btn btn-primary text-nowrap"
            >
              Export as .csv
            </CSVLink>
          </div>
        </div>
      </div>
      <div className="center">
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
                <tr
                  key={i}
                  className="myrow"
                  onClick={() => handleSelect(item)}
                >
                  <UserCard user={item} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
