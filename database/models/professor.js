'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate(models) {
      const { Person } = models;
      Professor.hasOne(Person, { foreignKey: 'personId' })
    }
  }
  Professor.init({
    professorId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    salaryInDollar: DataTypes.INTEGER,
    personId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};