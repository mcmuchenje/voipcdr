const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extensions', {
    context: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "default",
      primaryKey: true
    },
    extension: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    priority: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "1",
      primaryKey: true
    },
    application: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    args: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'extensions',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "context" },
          { name: "extension" },
          { name: "priority" },
        ]
      },
    ]
  });
};
