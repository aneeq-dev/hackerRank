module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Subcomments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      commentID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
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
    await queryInterface.dropTable("Subcomments");
  },
};
