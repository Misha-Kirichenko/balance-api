export async function up({ context: { conn, DataTypes } }) {
	console.log("Seeding users...");
	await conn.getQueryInterface().bulkInsert("users", [
		{
			balance: 10000
		}
	]);
}

export async function down({ context: { conn } }) {
	await conn.getQueryInterface().bulkDelete("users");
}
