"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.submissions);
      this.hasMany(models.certificates);
      this.hasMany(models.contests);

      this.hasMany(models.comments);

      this.belongsToMany(models.skills, { through: "Skill_User" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      skills: DataTypes.ARRAY(DataTypes.INTEGER),
      password: DataTypes.STRING,
      contestIDs: DataTypes.ARRAY(DataTypes.INTEGER),
      certificateIDs: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
