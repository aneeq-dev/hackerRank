"use strict";
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
      },
      statement: {
        type: Sequelize.STRING,
      },
      featuredSolutions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
      },
      timeComplexity: {
        type: Sequelize.STRING,
      },
      reqKnowledge: {
        type: Sequelize.STRING,
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
