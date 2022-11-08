const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const user = [
  {
    id: +new Date(),
    name: "김민겸",
    email: "reignkk@naver.com",
    age: 25,
  },
];

app.get("/api/user", (req, res) => {
  return res.json(user);
});

app.post("/api/user", (req, res) => {
  const { name, email, age } = req.body;
  user.push({
    id: +new Date(),
    name,
    email,
    age,
  });
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(9000, () => console.log("서버 연결 완료!"));
