import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on(
    "chat",
    (payload) => {
      console.log("Received message:", payload);
      io.emit("chat", payload);
    },
    []
  );
});
httpServer.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
