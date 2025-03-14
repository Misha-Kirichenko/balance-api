import "dotenv/config";

const settings = {
	dialect: "postgres",
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	pool: {
		max: 1000,
		min: 1,
		acquire: 30000,
		idle: 10000
	}
};

export default settings;
