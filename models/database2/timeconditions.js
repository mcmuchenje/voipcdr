const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeconditions', {
    timeconditions_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    displayname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    truegoto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    falsegoto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptname: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timeconditions',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "timeconditions_id" },
        ]
      },
    ]
  });
};
