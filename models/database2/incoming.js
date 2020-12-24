const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoming', {
    cidnum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    faxexten: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    faxemail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    answer: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    wait: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    privacyman: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    alertinfo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ringing: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mohclass: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "default"
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    grppre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    delay_answer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pricid: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'incoming',
    schema: 'asterisk',
    timestamps: false
  });
};
