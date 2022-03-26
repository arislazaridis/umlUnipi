import React from "react";
import "./users.css";

function DisplayData(props) {
  const { users } = props;
  return (
    <div>
      <table style={{ fontSize: "50px", border: "1px solid white" }}>
        <thead>
          <th>PostId</th>
          <th>Name</th>
          <th>Surname</th>
          <th>StartDate</th>
          <th>Grade</th>
          <th>Languages</th>
        </thead>
        <tbody>
          {users.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.surname}</td>
                <td>{el.startDate}</td>
                <td style={{ color: "red" }}>{el.grade}</td>
                <td>{el.languages}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button style={{ margin: "16px", width: "100%" }}>Add Student</button>
      <button style={{ margin: "16px", width: "100%" }}>Delete Student</button>
      <button style={{ margin: "16px", width: "100%" }}>Update Student</button>
    </div>
  );
}

export default DisplayData;
