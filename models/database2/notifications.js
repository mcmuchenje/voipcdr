const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    display_text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    extended_text: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    reset: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    candelete: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'notifications',
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
