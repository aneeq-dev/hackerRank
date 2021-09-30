"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.challenges);
      this.hasMany(models.comments);
      this.belongsTo(models.comments);
      this.belongsTo(models.users);
    }
  }
  Comments.init(
    {
      challengeID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      vote: DataTypes.INTEGER,
      subcomments: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
