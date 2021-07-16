const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.static(path.resolve(__dirname, "./app/src")));

app.get("/", (req, res) => {
  res.json({ message: "hey" });
});

app.get("/api", (req, res) => {
  users = [
    {
      id: "1",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
    {
      id: "2",
      name: "Name",
      lastName: "Last name",
      age: "age",
      hobbies: "hobbies",
    },
  ];
  res.json(users);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./app/src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
