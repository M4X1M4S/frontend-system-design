const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.write("data: Connection established\n\n");
  const intervalId = setInterval(() => {
    const data = new Date().toLocaleTimeString();
    res.write(`data: ${data}\n\n`);
  }, 3000);
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
