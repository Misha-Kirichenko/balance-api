import "dotenv/config";
import express from "express";
import router from "./router.js";
import conn from "./config/conn.js";
import connectDB from "./config/connectDB.js";
import { runMigrations, runSeeders } from "./umzug.js";

const app = express();

async function startServer() {
	try {
		await connectDB(conn);
		await runMigrations();
		await runSeeders();
		app.use(express.json());
		app.use("/api", router);
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`);
		});
	} catch (error) {
		console.error("Error starting the server:", error);
		process.exit(1);
	}
}

startServer();
