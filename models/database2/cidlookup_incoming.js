const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidlookup_incoming', {
    cidlookup_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    extension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cidnum: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cidlookup_incoming',
    schema: 'asterisk',
    timestamps: false
  });
};
