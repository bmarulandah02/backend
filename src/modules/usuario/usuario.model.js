import db from "../../config/dbconexion.js";

export const UserModel = {
  findALL: async () => {
    const sql = "SELECT * FROM usuario ORDER BY apellidos";
    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
};
