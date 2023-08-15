import { Router } from "express";
import db from "../db/config.js";
const alquiler = db.collection("alquiler");
const router = Router();

router.get("/disponibles", async (req, res) => {
  try {
    const autosDispo = await alquiler
      .aggregate([
        {
          $lookup: {
            from: "automovil",
            localField: "ID_Automovil",
            foreignField: "ID_Automovil",
            as: "automovil",
          },
        },
        {
          $unwind: "$automovil",
        },
        {
          $match: {
            Estado: "Disponible",
          },
        },
        {
          $project: {
            Estado: 1,
            automovil: 1,
          },
        },
      ])
      .toArray();
    res.json({ status: 200, automoviles_disponibles: autosDispo });
  } catch (error) {
    res.status(500)({ status: 500, error });
  }
});

export { router };
