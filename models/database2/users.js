const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    extension: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    voicemail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ringtimer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    noanswer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recording: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outboundcid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sipname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mohclass: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: "default"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'asterisk',
    timestamps: false
  });
};
