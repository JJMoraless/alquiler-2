import { Router } from "express";
import db from "../db/config.js";
const router = Router();
const empleado = db.collection("empleado");

router.get("/vendedores", async (req, res) => {
  try {
    const empeladosFound = await empleado.find({Cargo: "Vendedor"}).toArray();
    res.json({ status: 200, empleados_vendedores: empeladosFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

export { router };
