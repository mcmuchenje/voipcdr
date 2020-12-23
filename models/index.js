const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mariadb://root:cuthbertM1@localhost:3306/asteriskcdrdb') 
var initModels = require("./init-models");
var models = initModels(sequelize);


async function main() {
	try {
	await sequelize.authenticate();
        console.log('Connection has been established successfully.');
	} catch (error) {
  		console.error('Unable to connect to the database:', error);
	}
}

main()
module.exports = models
