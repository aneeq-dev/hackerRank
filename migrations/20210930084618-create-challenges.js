module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Challenges", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      skillID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      successRate: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      attempts: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      maxScore: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
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
    await queryInterface.dropTable("Challenges");
  },
};
