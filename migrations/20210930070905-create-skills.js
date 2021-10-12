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
        foreignKey: true,
        allowNull: false,
      },
      skillName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.ENUM("1 week", "1 month", "3 months", ">3 months"),
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM("basic", "intermediate", "advanced", "all"),
        allowNull: false,
      },

      attempts: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      certificationID: {
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
    await queryInterface.dropTable("Skills");
  },
};
