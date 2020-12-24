const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('queues_config', {
    extension: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    descr: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ""
    },
    grppre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    alertinfo: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    ringing: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    maxwait: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    ivr_id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "0"
    },
    dest: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    cwignore: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qregex: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agentannounce_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    joinannounce_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    queuewait: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'queues_config',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "extension" },
        ]
      },
    ]
  });
};
