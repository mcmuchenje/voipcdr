const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pinsets', {
    pinsets_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    passwords: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    addtocdr: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    deptname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    used_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pinsets',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pinsets_id" },
        ]
      },
    ]
  });
};
