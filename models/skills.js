"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kits);
      this.hasMany(models.tests);
      this.hasOne(models.certificates);
      this.hasMany(models.challenges);
      this.belongsToMany(models.user, { through: "Skill_User" });
    }
  }
  Skills.init(
    {
      kitID: DataTypes.INTEGER,
      skillName: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.ENUM("1 week", "1 month", "3 months", ">3 months"),
      category: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),
      challenges: DataTypes.ARRAY(DataTypes.INTEGER),
      tests: DataTypes.ARRAY(DataTypes.INTEGER),
      attempts: DataTypes.INTEGER,
      certificationID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skills",
    }
  );
  return Skills;
};
