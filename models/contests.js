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
      this.belongsTo(models.Users);
      this.belongsToMany(models.Challenges, { through: "Challenge_Contest" });
    }
  }
  Contests.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      difficulty: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),
      status: DataTypes.ENUM("active", "archived"),
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
