const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cidlookup', {
    cidlookup_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sourcetype: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cache: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    deptname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    http_host: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    http_port: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    http_username: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    http_password: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    http_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    http_query: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mysql_host: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    mysql_dbname: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    mysql_query: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mysql_username: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mysql_password: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cidlookup',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cidlookup_id" },
        ]
      },
    ]
  });
};
