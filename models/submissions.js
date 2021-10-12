const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Submissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Challenges);
      this.belongsTo(models.Users);
    }
  }
  Submissions.init(
    {
      challengeID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      result: DataTypes.BOOLEAN,
      score: DataTypes.INTEGER,
      language: DataTypes.STRING,
      solution: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Submissions",
    }
  );
  return Submissions;
};
