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

      this.belongsTo(models.Challenges);
      this.hasMany(models.Comments);
      this.belongsTo(models.Comments);
      this.belongsTo(models.Users);
      this.belongsToMany(models.Comments, {
        as: "children",
        through: "Subcomments",
      });
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
