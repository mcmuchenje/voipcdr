const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('findmefollow', {
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
    dring: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    needsconf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pre_ring: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ringing: {
      type: DataTypes.STRING(80),
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
    tableName: 'findmefollow',
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
