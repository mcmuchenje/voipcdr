require ('custom-env').env('asterisk', (__dirname + '/../../'))

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mariadb'
});

const initModels = require("./init-models");
const db = initModels(sequelize);

async function main() {
	try {
		await sequelize.authenticate();
    	    console.log('Connection has been established successfully.');
        } catch (error) {
        	console.error('Unable to connect to the database:', error);
    }
}

main()
module.exports = db
