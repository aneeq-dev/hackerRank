"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.skills);
    }
  }
  Kits.init(
    {
      name: DataTypes.STRING,
      skills: DataTypes.ARRAY(DataTypes.INTEGER),
      duration: DataTypes.ENUM("1 week", "1 month", "3 months", ">3 months"),
      difficulty: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),
      attempts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Kits",
    }
  );
  return Kits;
};
