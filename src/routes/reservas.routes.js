import { Router } from "express";
import db from "../db/config.js";
const router = Router();
const reserva = db.collection("reserva");

router.get("/pendientes", async (req, res) => {
  try {
    const autosDispo = await reserva
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
          $lookup: {
            from: "automovil",
            localField: "ID_Automovil",
            foreignField: "ID_Automovil",
            as: "automovil",
          },
        },
        {
          $match: {
            Estado: "Pendiente",
          },
        },
      ])
      .toArray();
    res.json({ status: 200, reservas_pendientes: autosDispo });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

export { router };
