import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const User = conn.define(
	"user",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		balance: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0,
			validate: {
				min: 0
			}
		}
	},
	{
		timestamps: false
	}
);

export default User;
