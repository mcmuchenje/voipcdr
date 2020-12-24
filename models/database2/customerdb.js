const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerdb', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    addr1: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    addr2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    sip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    did: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    device: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    serial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customerdb',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
