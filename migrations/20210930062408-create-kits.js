module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Kits", {
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

      duration: {
        type: Sequelize.ENUM("1 week", "1 month", "3 months", ">3 months"),
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced"),
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
    await queryInterface.dropTable("Kits");
  },
};
