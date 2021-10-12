module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      lastScore: {
        type: Sequelize.INTEGER,
        default: 0,
      },

      duration: {
        type: Sequelize.ENUM("1 week", "1 month", "3 months", ">3 months"),
        allowNull: false,
      },
      attempts: {
        type: Sequelize.INTEGER,
        default: 0,
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
