const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gabcast', {
    ext: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    channbr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gabcast',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ext" },
        ]
      },
    ]
  });
};
