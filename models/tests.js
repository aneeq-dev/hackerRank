const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Skills);
      this.belongsToMany(models.Challenges, {
        through: "Test_Challenge_Skill",
      });
    }
  }
  Tests.init(
    {
      challenges: DataTypes.ARRAY(DataTypes.INTEGER),
      lastScore: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER,
      duration: DataTypes.ENUM("1 week", "1 month", "3 months", ">3 months"),
      attempts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tests",
    }
  );
  return Tests;
};
