"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
    }
  }
  Contests.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      difficulty: DataTypes.ENUM,
      status: DataTypes.ENUM,
      attempts: DataTypes.INTEGER,
      challengeIDs: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Contests",
    }
  );
  return Contests;
};
