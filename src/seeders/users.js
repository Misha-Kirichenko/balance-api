export async function up({ context: { conn, DataTypes } }) {
	console.log("Seeding users...");
	//bulkInsert because usually we seed couple of rows
	await conn.getQueryInterface().bulkInsert("users", [
		{
			balance: 10000
		}
	]);
}

export async function down({ context: { conn } }) {
	await conn.getQueryInterface().bulkDelete("users", { id: 1 });
}
