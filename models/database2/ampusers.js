const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ampusers', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    extension_low: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    extension_high: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    deptname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    sections: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ampusers',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
