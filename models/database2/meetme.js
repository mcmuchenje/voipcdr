const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetme', {
    exten: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    options: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    userpin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    adminpin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    joinmsg_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'meetme',
    schema: 'asterisk',
    timestamps: false
  });
};
