const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdr', {
    calldate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    clid: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    src: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    dst: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    dcontext: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    channel: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    dstchannel: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    lastapp: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    lastdata: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    billsec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    disposition: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    amaflags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    accountcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    uniqueid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    userfield: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    CallConnectDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    CallDisconnectDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    DisconnectCause: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IPQoS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LocalIP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RemoteIP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rec_name: {
      type: DataTypes.STRING(90),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cdr',
    schema: 'asteriskcdrdb',
    timestamps: false,
    indexes: [
      {
        name: "idx_calldate",
        using: "BTREE",
        fields: [
          { name: "calldate" },
        ]
      },
      {
        name: "idx_src",
        using: "BTREE",
        fields: [
          { name: "src" },
        ]
      },
      {
        name: "idx_dst",
        using: "BTREE",
        fields: [
          { name: "dst" },
        ]
      },
      {
        name: "idx_uniqueid",
        using: "BTREE",
        fields: [
          { name: "uniqueid" },
        ]
      },
      {
        name: "idx_duration",
        using: "BTREE",
        fields: [
          { name: "duration" },
        ]
      },
    ]
  });
};
