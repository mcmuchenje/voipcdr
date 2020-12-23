var DataTypes = require("sequelize").DataTypes;
var _cdr = require("./cdr");

function initModels(sequelize) {
  var cdr = _cdr(sequelize, DataTypes);


  return {
    cdr,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
