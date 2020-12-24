const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paging_groups', {
    page_number: {
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
    tableName: 'paging_groups',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_number" },
          { name: "ext" },
        ]
      },
    ]
  });
};
