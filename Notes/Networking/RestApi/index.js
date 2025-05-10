import express from "express";
import bodyParser from "body-parser";
const app = express();

const PORT = 3000;
const todos = [
  {
    id: "1",
    name: "Todo 1",
    completed: false,
  },
  {
    id: "2",
    name: "Todo 2",
    completed: false,
  },
  {
    id: "3",
    name: "Todo 3",
    completed: true,
  },
];
app.use(bodyParser.json());
app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({
    message: "Todo added successfully",
  });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = { ...req.body, id };
    res.json({
      message: "Todo updated successfully",
    });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.json({
      message: "Todo deleted successfully",
    });
  }
});
app.all("/", (req, res) => {
  res.send("Hello World!");
  console.log("REQUEST>", req);
  console.log("RESPONSE>", res);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
