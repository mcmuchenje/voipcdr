const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_destinations', {
    custom_dest: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'custom_destinations',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "custom_dest" },
        ]
      },
    ]
  });
};
