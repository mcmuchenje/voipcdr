const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ringgroups', {
    grpnum: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    strategy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    grptime: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    grppre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grplist: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    postdest: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    alertinfo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    needsconf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ringing: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    cwignore: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cfignore: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    annmsg_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remotealert_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    toolate_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ringgroups',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grpnum" },
        ]
      },
    ]
  });
};
