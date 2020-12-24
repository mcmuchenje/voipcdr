const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visual_phonebook', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    context: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    private: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'visual_phonebook',
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
