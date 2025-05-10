import express from "express";
const app = express();

const PORT = 3000;
app.all("/", (req, res) => {
  res.send("Hello World!");
  console.log("REQUEST>", req);
  console.log("RESPONSE>", res);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
