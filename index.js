const express = require("express");
const dbClient = require("./db");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/todos", async (req, res) => {
  const result = await dbClient.query("SELECT * FROM todos");
  res.status(200).json(result.rows);
});

app.post("/todos", async (req, res) => {
  const name = req.body.name;

  await dbClient.query("INSERT INTO todos(name) VALUES ($1)", [name]);
});

app.listen(port, () => console.log(`listen on port ${port}`));
