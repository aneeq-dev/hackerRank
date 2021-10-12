module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      challengeID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      userID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vote: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // await queryInterface.sequelize.query(
    //   "CREATE TRIGGER voteInit AFTER INSERT on" +
    //     models.Comments +
    //     " FOR EACH ROW EXECUTE procedure vote_set()"
    // );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Comments");
  },
};
