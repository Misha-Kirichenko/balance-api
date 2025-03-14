import path from "path";
import { Umzug, SequelizeStorage } from "umzug";
import { DataTypes } from "sequelize";
import { fileURLToPath } from "node:url";
import conn from "./config/conn.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrationUmzug = new Umzug({
	migrations: {
		glob: path.join(__dirname, "migrations/*.js")
	},
	context: { conn, DataTypes },
	storage: new SequelizeStorage({ sequelize: conn }),
	logger: console
});

async function runMigrations() {
	try {
		await migrationUmzug.up();
		console.log("Migrations applied successfully");
	} catch (error) {
		console.error("Error applying migrations:", error);
	}
}

const seederUmzug = new Umzug({
	migrations: {
		glob: path.join(__dirname, "seeders/*.js")
	},
	context: { conn, DataTypes },
	storage: new SequelizeStorage({
		sequelize: conn,
		modelName: "SequelizeData"
	}),
	logger: console
});

async function runSeeders() {
	try {
		await seederUmzug.up();
		console.log("Seeders applied successfully");
	} catch (error) {
		console.error("Error applying seeders:", error);
	}
}

export { runMigrations, runSeeders };
