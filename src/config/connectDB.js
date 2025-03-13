const connectDB = async (conn) => {
	try {
		await conn.authenticate();
		console.log("Successfully connected to database");
	} catch (error) {
		console.error("Database connection error:", error);
	}
};

export default connectDB;
