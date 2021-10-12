const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Contest_Cert_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contest_Cert_User.init(
    {
      userID: DataTypes.INTEGER,
      contestID: DataTypes.INTEGER,
      certificateID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Contest_Cert_User",
    }
  );
  return Contest_Cert_User;
};
