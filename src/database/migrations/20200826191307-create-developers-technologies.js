module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('developers_technologies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      developer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'developers', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      technology_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'technologies', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('developers_technologies');
  },
};
