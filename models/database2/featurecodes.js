const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('featurecodes', {
    modulename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    featurename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    defaultcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'featurecodes',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "modulename" },
          { name: "featurename" },
        ]
      },
      {
        name: "enabled",
        using: "BTREE",
        fields: [
          { name: "enabled" },
        ]
      },
    ]
  });
};
