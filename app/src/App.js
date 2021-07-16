import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);

  function fetchData() {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  function fetchUsers() {
    fetch("http://localhost:4000/api")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div>{data}</div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
            <p>{user.hobbies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
