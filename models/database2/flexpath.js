const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flexpath', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    options: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    route_inbound: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    route_fax: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    accountcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'flexpath',
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
