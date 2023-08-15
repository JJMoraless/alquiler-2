import db from "./config.js";

await db.createCollection("automovil", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "Marca",
        "Modelo",
        "Anio",
        "Tipo",
        "Capacidad",
        "Precio_Diario",
      ],
      properties: {
        Marca: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Modelo: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Anio: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Tipo: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Capacidad: {
          bsonType: "int",
          description: "debe ser una dirección de correo electrónico válida",
        },
        Precio_Diario: {
          bsonType: "int",
          description: "debe ser una dirección de correo electrónico válida",
        },
      },
    },
  },
});

await db.createCollection("cliente", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Nombre", "Apellido", "DNI", "Direccion", "Telefono", "Email"],
      properties: {
        Nombre: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Apellido: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        DNI: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Direccion: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Telefono: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Email: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
      },
    },
  },
});

await db.createCollection("alquiler", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "ID_Alquiler",
        "ID_Cliente",
        "ID_Automovil",
        "Fecha_Inicio",
        "Fecha_Fin",
        "Costo_Total",
        "Estado",
      ],
      properties: {
        ID_Alquiler: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        ID_Cliente: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        ID_Automovil: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        Fecha_Inicio: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Fecha_Fin: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Costo_Total: {
          bsonType: "decimal",
          description: "debe ser un decimal y es obligatorio",
        },
        Estado: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("reserva", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "ID_Cliente",
        "ID_Automovil",
        "Fecha_Reserva",
        "Fecha_Inicio",
        "Fecha_Fin",
        "Estado",
      ],
      properties: {
        ID_Cliente: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        ID_Automovil: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        Fecha_Reserva: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Fecha_Inicio: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Fecha_Fin: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Estado: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
          enum: ["Pendiente", "Activa", "Finalizada", "Cancelada"],
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("sucursal", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Nombre", "Direccion", "Telefono"],
      properties: {
        Nombre: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Direccion: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Telefono: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("sucursal_automovil", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ID_Automovil", "Cantidad_Disponible"],
      properties: {
        ID_Automovil: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        Cantidad_Disponible: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("empleado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Nombre", "Apellido", "DNI", "Direccion", "Telefono", "Cargo"],
      properties: {
        Nombre: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Apellido: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        DNI: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Direccion: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Telefono: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
        Cargo: {
          bsonType: "string",
          description: "debe ser una cadena y es obligatorio",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("registro_entrega", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "ID_Alquiler",
        "ID_Empleado",
        "Fecha_Entrega",
        "Combustible_Entregado",
        "Kilometraje_Entregado",
      ],
      properties: {
        ID_Alquiler: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        ID_Empleado: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        Fecha_Entrega: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Combustible_Entregado: {
          bsonType: "decimal",
          minimum: 0,
          maximum: 100,
          description: "debe ser un decimal entre 0 y 100",
        },
        Kilometraje_Entregado: {
          bsonType: "int",
          minimum: 0,
          description: "debe ser un entero mayor o igual a 0",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

await db.createCollection("registro_devolucion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "ID_Registro",
        "ID_Alquiler",
        "ID_Empleado",
        "Fecha_Devolucion",
        "Combustible_Devuelto",
        "Kilometraje_Devuelto",
        "Monto_Adicional",
      ],
      properties: {
        ID_Alquiler: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        ID_Empleado: {
          bsonType: "int",
          description: "debe ser un entero y es obligatorio",
        },
        Fecha_Devolucion: {
          bsonType: "date",
          description: "debe ser una fecha y es obligatorio",
        },
        Combustible_Devuelto: {
          bsonType: "decimal",
          minimum: 0,
          maximum: 100,
          description: "debe ser un decimal entre 0 y 100",
        },
        Kilometraje_Devuelto: {
          bsonType: "int",
          minimum: 0,
          description: "debe ser un entero mayor o igual a 0",
        },
        Monto_Adicional: {
          bsonType: "decimal",
          minimum: 0,
          description: "debe ser un decimal mayor o igual a 0",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});
