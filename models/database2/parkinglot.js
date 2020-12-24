const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parkinglot', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "1",
      primaryKey: true
    },
    keyword: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    data: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'parkinglot',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "keyword" },
        ]
      },
    ]
  });
};
