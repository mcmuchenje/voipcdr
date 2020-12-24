const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventorydb', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empnum: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    empname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    building: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    floor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    cubicle: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    desk: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    exten: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    phusername: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phpassword: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mac: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    serial: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    device: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    distdate: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    pbxbox: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    extrainfo: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventorydb',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
