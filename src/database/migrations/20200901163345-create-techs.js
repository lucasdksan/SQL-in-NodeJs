'use strict';

const { update } = require("../../models/User");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('techs');
     */
  }
};
