const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('callback', {
    callback_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    callbacknum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sleep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deptname: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'callback',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "callback_id" },
        ]
      },
    ]
  });
};
