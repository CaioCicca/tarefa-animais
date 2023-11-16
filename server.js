import express from "express";
import { config } from "dotenv";
import rota from "./src/routes/index.routes";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(rota)

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);