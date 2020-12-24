const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ivr_dests', {
    ivr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    selection: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dest: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ivr_ret: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ivr_dests',
    schema: 'asterisk',
    timestamps: false
  });
};
