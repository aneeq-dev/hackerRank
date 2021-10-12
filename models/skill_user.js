const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Skill_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill_User.init(
    {
      userID: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER,
      kitID: DataTypes.INTEGER,
      solution: DataTypes.STRING,
      passed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Skill_User",
    }
  );
  return Skill_User;
};
