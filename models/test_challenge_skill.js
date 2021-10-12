const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Test_Challenge_Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test_Challenge_Skill.init(
    {
      skillID: DataTypes.INTEGER,
      challengeID: DataTypes.INTEGER,
      testID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Test_Challenge_Skill",
    }
  );
  return Test_Challenge_Skill;
};
