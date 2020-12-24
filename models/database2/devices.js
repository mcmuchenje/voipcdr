const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devices', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    tech: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    dial: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    devicetype: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emergency_cid: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'devices',
    schema: 'asterisk',
    timestamps: false
  });
};
