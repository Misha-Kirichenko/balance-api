import "dotenv/config";
import express from "express";
import router from "./router.js";
import conn from "./config/conn.js";
import connectDB from "./config/connectDB.js";

const app = express();

connectDB(conn);

app.use(express.json());

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api", router);
