'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      const { Person } = models;
      Student.hasOne(Person, { foreignKey: 'personId' })
    }
  }
  Student.init({
    studentId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    studentNumber: DataTypes.INTEGER,
    personId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};