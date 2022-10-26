'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      const { Person } = models;
      Vehicle.hasOne(Person, { foreignKey: 'personId' })
    }
  }
  Vehicle.init({
    vehicleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    model: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
    vehicleOwnerId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};