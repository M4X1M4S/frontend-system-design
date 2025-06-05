import { client } from "./client.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  client.getAll({}, (error, data) => {
    if (!error) {
      res.send(data.customers);
    }
    if (error) {
      console.error("Error fetching customers:", error);
      res.status(500).send({ error: "Error fetching customers" });
    }
  });
});

app.post("/create", (req, res) => {
  let newCustomer = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  client.insert({ newCustomer }, (error, data) => {
    if (error) throw error;
    console.log("Customer created successfully", data);
    res.send({ message: "Customer created successfully" });
  });
});

app.post("/update", (req, res) => {
  let updatedCustomer = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  client.update({ updatedCustomer }, (error, data) => {
    if (error) throw error;
    console.log("Customer updated successfully", data);
    res.send({ message: "Customer updated successfully" });
  });
});

app.post("/delete", (req, res) => {
  client.delete({ id: req.body.id }, (error, data) => {
    if (error) throw error;
    console.log("Customer deleted successfully", data);
    res.send({ message: "Customer deleted successfully" });
  });
});
app.get("/:id", (req, res) => {
  client.get({ id: req.params.id }, (error, data) => {
    if (error) throw error;
    console.log("Customer fetched successfully", data);
    res.send(data.customer);
  });
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
