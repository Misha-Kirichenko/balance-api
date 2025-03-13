import "dotenv/config";
import { Sequelize } from "sequelize";
import settings from "./settings.js";

const conn = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  settings
);

export default conn;
