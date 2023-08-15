import { Router } from "express";
import db from "../db/config.js";
const router = Router();
const sucursalAuto = db.collection("sucursal_automovil");

router.get("/autos_totales", async (req, res) => {
  try {
    const sucursalesAutoFound = await sucursalAuto
      .aggregate([
        {
          $lookup: {
            from: "sucursal",
            localField: "ID_Sucursal",
            foreignField: "ID_Sucursal",
            as: "sucursal",
          },
        },
        {
          $unwind: "$sucursal",
        },
        {
          $group: {
            _id: "$sucursal.Nombre",
            totalCantidad: { $sum: "$Cantidad_Disponible" },
          },
        },
      ])
      .toArray();
    res.json({ status: 200, autos_sucursales: sucursalesAutoFound });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

export { router };
