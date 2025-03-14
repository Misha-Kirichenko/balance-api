const updateBalanceMiddleware = (req, res, next) => {
	const errors = [];
	const {
		body: { userId, amount }
	} = req;

	if (!userId) errors.push("userId is required");
	else if (typeof userId !== "number") errors.push("userId is invalid");

	if (!amount) errors.push("amount is required");
	else if (typeof amount !== "number") errors.push("amount is invalid");

	if (errors.length) {
		return res.status(422).send({ message: errors });
	}

	return next();
};

export default updateBalanceMiddleware;
