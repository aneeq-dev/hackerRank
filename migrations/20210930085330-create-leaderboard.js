module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Leaderboards", {
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
      rank: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      submissionID: {
        type: Sequelize.INTEGER,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Leaderboards");
  },
};
