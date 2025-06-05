const express = require("express");

const app = express();
const PORT = 3000;
let Data = "initial data";
const resps = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  if (Data !== req.query.Data) {
    res.send({ Data });
  } else {
    console.log("Waiting for data change...");
    resps.push(res);
  }
});

app.get("/updateData", (req, res) => {
  Data = req.query.Data;
  // Notify all waiting responses
  while (resps.length > 0) {
    const r = resps.pop();
    r.json({ Data });
    console.log("Notified a waiting response");
  }
  res.send("Data updated");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
