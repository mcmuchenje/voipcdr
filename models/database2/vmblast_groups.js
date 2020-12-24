const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmblast_groups', {
    grpnum: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    ext: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vmblast_groups',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grpnum" },
          { name: "ext" },
        ]
      },
    ]
  });
};
