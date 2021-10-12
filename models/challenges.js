const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Challenges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.editorial);
      this.hasMany(models.Submissions);
      this.hasMany(models.Leaderboard);
      this.hasMany(models.Comments);
      this.belongsTo(models.Skills);
      this.belongsTo(models.Contests);
    }
  }
  Challenges.init(
    {
      name: DataTypes.STRING,
      statement: DataTypes.STRING,
      skillID: DataTypes.INTEGER,
      successRate: DataTypes.INTEGER,
      attempts: DataTypes.INTEGER,
      maxScore: DataTypes.INTEGER,
      difficulty: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),
    },
    {
      sequelize,
      modelName: "Challenges",
    }
  );
  return Challenges;
};
