const app = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = 4000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/webhook", (req, res) => {
  //Exract the payload from the request body
  const payload = req.body;
  // Log the payload to the console, or process it as needed like calling another API
  console.log("Received webhook payload:", payload);
  // Send a response back to the sender
  res.status(200).send("Webhook received successfully");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
