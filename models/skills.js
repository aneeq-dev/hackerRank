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
      this.belongsTo(models.Kits, {
        foreignKey: "kitID",
      });
      this.hasMany(models.Tests);
      this.hasOne(models.Certificates, {
        foreignKey: "certificationID",
      });
      this.hasMany(models.Challenges);
      this.belongsToMany(models.Users, { through: "Skill_User" });
      this.belongsToMany(models.Challenges, {
        through: "Test_Challenge_Skill",
      });
    }
  }
  Skills.init(
    {
      kitID: DataTypes.INTEGER,
      skillName: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.ENUM("1 week", "1 month", "3 months", ">3 months"),
      category: DataTypes.ENUM("basic", "intermediate", "advanced", "all"),

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
