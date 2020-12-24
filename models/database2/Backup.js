const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Backup', {
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Voicemail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Recordings: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Configurations: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CDR: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    FOP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Minutes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Hours: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Days: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Months: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Weekdays: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Command: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Backup',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
