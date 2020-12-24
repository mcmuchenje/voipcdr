const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ivr', {
    ivr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    displayname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deptname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    enable_directory: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    enable_directdial: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dircontext: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "default"
    },
    alt_timeout: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    alt_invalid: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    loops: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    announcement_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timeout_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invalid_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retvm: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ivr',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ivr_id" },
        ]
      },
    ]
  });
};
