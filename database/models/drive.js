'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drive extends Model {
    static associate(models) {
      const { Person, Vehicle } = models;
      Drive.hasOne(Person, { foreignKey: 'personId' })
      Drive.hasOne(Vehicle, { foreignKey: 'vehiclePlateNumber' })
    }
  }
  Drive.init({
    driveId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    date: DataTypes.DATE,
    distanceInKm: DataTypes.STRING,
    personId: DataTypes.UUIDV4,
    vehiclePlateNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drive',
  });
  return Drive;
};