const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iax', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "-1",
      primaryKey: true
    },
    keyword: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    data: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'iax',
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
