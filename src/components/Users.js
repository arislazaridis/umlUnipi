import React, { useState } from "react";
import "./users.css";
import DisplayData from "./DisplayData";

const DEFAULT_USERS = [
  {
    id: 1,
    name: "Makis",
    surname: "Makrandreou",
    thesis: "databases",
    startDate: "04/04/2022",
    languages: "python",
    framework: "dotnet",
    grade: "",
  },
  {
    id: 2,
    name: "Aris",
    surname: "Lazaridis",
    thesis: "compilers",
    startDate: "01/06/2022",
    languages: "java",
    framework: "spring",
    grade: 10,
  },
  {
    id: 3,
    name: "Vikis",
    surname: "Papadopoulou",
    thesis: "compilers",
    startDate: "09/03/2022",
    languages: "javascript",
    framework: "react",
    grade: "9",
  },
];

function Users() {
  const [display, setDisplay] = useState("default");
  const [displayUsers, setDisplayUsers] = useState(false);
  const [users, setUsers] = useState(DEFAULT_USERS);

  const handleClick = () => {
    setDisplay("none");
    setDisplayUsers(true);
  };

  return (
    <div className="users">
      <div style={{ display: display }} className="userForm">
        <h1>Welcome Administrator</h1>
        <button onClick={handleClick}>Open Database</button>
      </div>

      {displayUsers ? <DisplayData users={users} /> : null}
    </div>
  );
}

export default Users;
