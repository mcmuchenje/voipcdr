const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disa', {
    disa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    displayname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    context: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    digittimeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resptimeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    needconf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hangup: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'disa',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "disa_id" },
        ]
      },
    ]
  });
};
