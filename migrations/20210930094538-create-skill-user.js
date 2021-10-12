module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Skill_Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      skillID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kitID: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      solution: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      passed: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Skill_Users");
  },
};
