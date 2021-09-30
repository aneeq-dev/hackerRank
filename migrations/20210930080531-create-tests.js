"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      challenges: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      lastScore: {
        type: Sequelize.INTEGER,
      },
      skillID: {
        type: Sequelize.INTEGER,
      },
      duration: {
        type: Sequelize.ENUM("1 week", "1 month", "3 months", ">3 months"),
      },
      attempts: {
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
    await queryInterface.dropTable("Tests");
  },
};
