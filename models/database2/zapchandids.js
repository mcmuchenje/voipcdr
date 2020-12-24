const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zapchandids', {
    channel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    did: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'zapchandids',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "channel" },
        ]
      },
    ]
  });
};
