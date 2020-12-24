const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daynight', {
    ext: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    dmode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    dest: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'daynight',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ext" },
          { name: "dmode" },
          { name: "dest" },
        ]
      },
    ]
  });
};
