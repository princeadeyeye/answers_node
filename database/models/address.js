'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      const { Person } = models;
      Address.hasOne(Person, { foreignKey: 'personId' })
    }
  }
  Address.init({
    addressId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    personId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};