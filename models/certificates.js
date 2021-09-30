"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certificates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
      this.belongsTo(models.skills);
    }
  }
  Certificates.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      allottedTo: DataTypes.INTEGER,
      type: DataTypes.ENUM,
      rank: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Certificates",
    }
  );
  return Certificates;
};
