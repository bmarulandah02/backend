import mysql from "mysql2/promise";
import "dotenv/config";

// Creamos la instancia pool con las variables de entorno
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || "localhost",
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
  user: process.env.MYSQL_ADDON_USER || "root",
  password: process.env.MYSQL_ADDON_PASSWORD || "",
  database: process.env.MYSQL_ADDON_DB || "db_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;
