import "dotenv/config";

const settings = {
	dialect: "postgres",
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	pool: {
		max: 5,
		min: 0,
		acquire: 10000,
		idle: 10000
	}
};

export default settings;
