import { Router } from "express";
import db from "../db/config.js";
const router = Router();
const alquiler = db.collection("alquiler");

// 17. Obtener la cantidad total de alquileres registrados en la base de datos.

router.get("/total", async (req, res) => {
  try {
    const totalALquileres = await alquiler.countDocuments();
    res.json({ status: 200, total_alquileres: totalALquileres });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

// 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados.
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
    res.status(500).json({ status: 500, error });
  }
});

// 20. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.
router.get("/fecha_inicio", async (req, res) => {
  try {
    const alquileresFound = await alquiler
      .find({
        Fecha_Inicio: {
          $gte: "2023-07-05",
          $lte: "2023-07-10",
        },
      })
      .toArray();
    res.json({ status: 200, alquileres: alquileresFound });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

// 11. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.
router.get("/fecha", async (req, res) => {
  try {
    const alquilerFound = await alquiler.findOne({
      Fecha_Inicio: "2023-07-05",
    });
    res.json({ status: 200, alquiler: alquilerFound });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

// 9. Obtener el costo total de un alquiler específico.
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

// 6. Obtener los detalles del alquiler con el ID_Alquiler específico.
router.get("/:id", async (req, res) => {
  try {
    const { id: strId } = req.params;
    const id = parseInt(strId);
    const alquilerFound = await alquiler.findOne({ ID_Alquiler: id });
    res.json({ status: 200, alquiler: alquilerFound });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
});

export { router };
