const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cronmanager', {
    module: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    id: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    time: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    freq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lasttime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    command: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cronmanager',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module" },
          { name: "id" },
        ]
      },
    ]
  });
};
