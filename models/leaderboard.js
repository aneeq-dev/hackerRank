const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Leaderboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Challenges);
    }
  }
  Leaderboard.init(
    {
      challengeID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      rank: DataTypes.INTEGER,
      submissionID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Leaderboard",
    }
  );
  return Leaderboard;
};
