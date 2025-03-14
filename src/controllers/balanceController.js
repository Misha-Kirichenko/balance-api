import { Router } from "express";
import statusCodeMessage from "../utils/statusCodeMessage.js";
import updateBalanceMiddleware from "../middlewares/updateBalanceMiddleware.js";
import { updateBalance } from "../services/balanceService.js";

const router = Router();

router.patch("/", [updateBalanceMiddleware], async (req, res) => {
	try {
		const answer = await updateBalance(req.body);
		return res.send(answer);
	} catch (error) {
		const { status, message } = statusCodeMessage(error);
		return res.status(status).send({ message });
	}
});

export default router;
