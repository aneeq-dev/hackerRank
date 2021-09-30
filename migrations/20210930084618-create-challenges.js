"use strict";
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
      },
      statement: {
        type: Sequelize.STRING,
      },
      skillID: {
        type: Sequelize.INTEGER,
      },
      successRate: {
        type: Sequelize.INTEGER,
      },
      attempts: {
        type: Sequelize.INTEGER,
      },
      maxScore: {
        type: Sequelize.INTEGER,
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
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
