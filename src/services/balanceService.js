import conn from "../config/conn.js";
import User from "../models/User.js";
import createHttpException from "../utils/createHttpException.js";

export const updateBalance = async ({ userId, amount }) => {
	const transaction = await conn.transaction();
	try {
		const user = await User.findOne({
			where: { id: userId },
			transaction,
			lock: conn.Sequelize.Transaction.LOCK.UPDATE
		});

		if (!user) {
			throw createHttpException(404, "User not found");
		}

		if (amount < 0 && user.balance < Math.abs(amount)) {
			throw createHttpException(400, "Not enough balance");
		}

		user.balance += amount;
		await user.save({ transaction });

		await transaction.commit();

		return {
			message: "Balance was updated successfully",
			balance: user.balance
		};
	} catch (error) {
		await transaction.rollback();
		throw createHttpException(error.status, error.message);
	}
};
