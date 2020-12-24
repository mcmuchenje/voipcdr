const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manager', {
    manager_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deny: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    permit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    read: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    write: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'manager',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "manager_id" },
        ]
      },
    ]
  });
};
