module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contests", {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("active", "archived"),
        allowNull: false,
      },
      attempts: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: 0,
      },
      challengeIDs: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
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
    await queryInterface.dropTable("Contests");
  },
};
