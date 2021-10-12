module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Challenge_Contests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contestID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      challengeID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
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
    await queryInterface.dropTable("Challenge_Contests");
  },
};
