const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timegroups_groups', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      unique: "display"
    }
  }, {
    sequelize,
    tableName: 'timegroups_groups',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "display",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "description" },
        ]
      },
    ]
  });
};
