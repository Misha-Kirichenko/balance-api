import { Router } from "express";
import healthController from "./controllers/healthController.js";

const router = Router();

router.use("/health", healthController);

export default router;
