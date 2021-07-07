const mysql = require('mysql');
const util = require('util');

// Add variables in config
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

const q = util.promisify(connection.query).bind(connection);

async function query(sql) {
	try {
		const result = await q(sql);

		return result;
	}
	catch (err) {
		console.log(err);
		return null;
	}
}

module.exports = {
	query,
};