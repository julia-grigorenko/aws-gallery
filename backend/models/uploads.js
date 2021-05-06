'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uploads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.uploads.hasOne(models.images, {
        as: "image",
        foreignKey: "id",
        sourceKey: "image_id"
      });
      models.uploads.hasOne(models.images, {
        as: "thumbnail",
        foreignKey: "id",
        sourceKey: "thumbnail_id"
      });
    }
  };
  uploads.init({
    file_name: DataTypes.STRING,
    image_id: DataTypes.UUID,
    thumbnail_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'uploads',
  });
  return uploads;
};