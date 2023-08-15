import { Router } from "express";
import db from "../db/config.js";

const clientes = db.collection("cliente");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const clientesFound = await clientes.find().toArray();
    res.json({ status: 200, clientes: clientesFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

router.get("/:DNI", async (req, res) => {
  const { DNI } = req.params;
  try {
    const clienteFound = await clientes.findOne({ DNI });
    res.json({ status: 200, clientes: clienteFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

export { router };
