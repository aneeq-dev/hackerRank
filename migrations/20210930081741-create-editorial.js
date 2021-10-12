module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("editorials", {
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
      statement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      featuredSolutions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
        allowNull: false,
      },
      timeComplexity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reqKnowledge: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      publishDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("editorials");
  },
};
