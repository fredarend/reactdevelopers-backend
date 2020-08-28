import Sequelize, { Model } from 'sequelize';

class Developer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        url_linkedin: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Technology, {
      foreignKey: 'developer_id',
      otherKey: 'technology_id',
      through: 'developers_technologies',
      as: 'technologies',
    });
  }
}

export default Developer;
