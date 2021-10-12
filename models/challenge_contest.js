const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Challenge_Contest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Challenge_Contest.init(
    {
      contestID: DataTypes.INTEGER,
      challengeID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Challenge_Contest",
    }
  );
  return Challenge_Contest;
};
