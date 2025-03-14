export const up = ({ context: { conn, DataTypes } }) => {
	console.log("users migrations running");
	return conn
		.getQueryInterface()
		.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			balance: {
				type: DataTypes.FLOAT,
				allowNull: false,
				defaultValue: 0
			}
		})
		.then(() =>
			conn
				.getQueryInterface()
				.sequelize.query(
					'ALTER TABLE "users" ADD CONSTRAINT balance_check CHECK (balance >= 0);'
				)
		);
};

export const down = ({ context: { conn } }) => {
	return conn.getQueryInterface().dropTable("users");
};
