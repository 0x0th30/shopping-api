'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('items', 'created_at', {
      type: Sequelize.DATE,
      alloweNull: false,
    }),
    queryInterface.addColumn('items', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('items', 'created_at'), 
    queryInterface.removeColumn('items', 'updated_at');
  }
};
