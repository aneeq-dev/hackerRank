module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Test_Challenge_Skills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      skillID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
      },
      challengeID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
      },
      testID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
      },
      kitID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
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
    await queryInterface.dropTable("Test_Challenge_Skills");
  },
};
