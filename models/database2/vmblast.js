const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmblast', {
    grpnum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    audio_label: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vmblast',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grpnum" },
        ]
      },
    ]
  });
};
