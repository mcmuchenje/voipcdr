const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('queues_details', {
    id: {
      type: DataTypes.STRING(45),
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
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'queues_details',
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
          { name: "data" },
        ]
      },
    ]
  });
};
