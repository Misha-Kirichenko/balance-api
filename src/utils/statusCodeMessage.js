import { errors } from "../constants/messages.js";

const statusCodeMessage = (
	error,
	defaultStatus = 400,
	defaultMessage = errors.BAD_REQUEST
) => {
	let status = defaultStatus;
	let message = defaultMessage;

	if (error.status) {
		message = error.message;
		status = error.status;
	}

	return { status, message };
};

export default statusCodeMessage;
