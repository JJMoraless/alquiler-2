import { Router } from "express";
import db from "../db/config.js";
const router = Router();
const alquiler = db.collection("alquiler");

router.get("/activos", async (req, res) => {
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
          $match: {
            Estado: "Activo",
          },
        },
      ])
      .toArray();
    res.json({ status: 200, reservas_activas: reservasFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

router.get("/:id/total", async (req, res) => {
  try {
    const { id: strId } = req.params;
    const id = parseInt(strId);

    const alquilerFound = await alquiler.findOne(
      { ID_Alquiler: id },
      { projection: { Costo_Total: 1, ID_Alquiler: 1, _id: 0 } }
    );

    res.json({ status: 200, alquiler: alquilerFound });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id: strId } = req.params;
    const id = parseInt(strId);

    const alquilerFound = await alquiler.findOne({ ID_Alquiler: id });
    res.json({ status: 200, alquiler: alquilerFound });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

export { router };
