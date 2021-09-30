"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class editorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.challengeID);
    }
  }
  editorial.init(
    {
      challengeID: DataTypes.INTEGER,
      statement: DataTypes.STRING,
      featuredSolutions: DataTypes.ARRAY(DataTypes.STRING),
      difficulty: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),
      timeComplexity: DataTypes.STRING,
      reqKnowledge: DataTypes.STRING,
      publishDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "editorial",
    }
  );
  return editorial;
};
