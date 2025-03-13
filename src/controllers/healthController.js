import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.send({ message: "I'm okay!" }));

export default router;
