import { Router } from "express";
import db from "../db/config.js";

const router = Router();
const clientes = db.collection("cliente");
const alquiler = db.collection("alquiler");

router.get("/", async (req, res) => {
  try {
    const clientesFound = await clientes.find().toArray();
    res.json({ status: 200, clientes: clientesFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

router.get("/unalquiler", async (req, res) => {
  try {
    const reservasFound = await alquiler
      .aggregate([
        {
          $lookup: {
            from: "cliente",
            localField: "ID_Cliente",
            foreignField: "ID_Cliente",
            as: "cliente",
          },
        },
        {
          $unwind: "$cliente",
        },
        {
          $project: {
            cliente: 1,
            _id: 0,
          },
        },
      ])
      .toArray();
    res.json({ status: 200, clientes_reserva: reservasFound });
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
