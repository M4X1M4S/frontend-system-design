const express = require("express");

const app = express();
const port = 3000;
let Data = "Initial Data";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  res.send({ Data });
});
app.get("/updateData", (req, res) => {
  Data = "Updated Data";
  res.send({ Data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
