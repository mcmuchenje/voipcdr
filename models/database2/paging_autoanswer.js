const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paging_autoanswer', {
    useragent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    var: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    setting: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paging_autoanswer',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "useragent" },
          { name: "var" },
        ]
      },
    ]
  });
};
