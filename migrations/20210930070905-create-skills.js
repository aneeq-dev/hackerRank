"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Skills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kitID: {
        type: Sequelize.INTEGER,
      },
      skillName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.ENUM("1 week", "1 month", "3 months", ">3 months"),
      },
      category: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
      },
      challenges: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      tests: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      attempts: {
        type: Sequelize.INTEGER,
      },
      certificationID: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Skills");
  },
};
