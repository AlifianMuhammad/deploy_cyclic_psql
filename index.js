const express = require("express");
const dbClient = require("./db");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/todos", async (req, res) => {
  const result = await dbClient.query("SELECT * FROM todos");
  res.status(200).json(result.rows);
});

app.listen(port, () => console.log(`listen on port ${port}`));
