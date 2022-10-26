'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {

    }
  }
  Person.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};