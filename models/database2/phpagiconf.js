const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpagiconf', {
    phpagiid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    debug: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    error_handler: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    err_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hostname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tempdir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    festival_text2wave: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    asman_server: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    asman_port: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asman_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asman_secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cepstral_swift: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cepstral_voice: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    setuid: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    basedir: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phpagiconf',
    schema: 'asterisk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phpagiid" },
        ]
      },
    ]
  });
};
