module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contest_Cert_Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      contestID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
      },
      certificateID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true,
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
    await queryInterface.dropTable("Contest_Cert_Users");
  },
};
