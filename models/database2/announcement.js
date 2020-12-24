const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announcement', {
    announcement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recording_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allow_skip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    post_dest: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    return_ivr: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    noanswer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    repeat_msg: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'announcement',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "announcement_id" },
        ]
      },
    ]
  });
};
