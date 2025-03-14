import { Router } from "express";
import { healthController, balanceController } from "./controllers/index.js";

const router = Router();

router.use("/health", healthController);
router.use("/balance", balanceController);

export default router;
