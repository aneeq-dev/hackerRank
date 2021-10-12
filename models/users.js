const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Submissions);

      this.hasMany(models.Comments);

      this.belongsToMany(models.Skills, { through: "Skill_User" });
      this.belongsToMany(models.Contests, { through: "Contest_Cert_User" });
      this.belongsToMany(models.Certificates, { through: "Contest_Cert_User" });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      rank: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Users",
      hooks: {
        beforeCreate: (user, options) => {
          console.log("\n\nHOOK: validate data");
        },
        afterCreate: (user, options) => {
          console.log("\nHOOK: send mail for test\n\n");
        },
      },
    }
  );
  return Users;
};
