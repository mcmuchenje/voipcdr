const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recordings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    displayname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    filename: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    fcode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    fcode_pass: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recordings',
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
