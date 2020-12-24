const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    variable: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'admin',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "variable" },
        ]
      },
    ]
  });
};
