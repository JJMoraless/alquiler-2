import express from "express";
import morgan from "morgan";
import { router } from "./routes/index.js";

const app = express();

// midlewares
app.use(express.json());
app.use(morgan("dev"));

// rutas
app.use(router);

export default app;
