import Sequelize, { Model } from 'sequelize';

class Technology extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Developer, {
      foreignKey: 'technology_id',
      otherKey: 'developer_id',
      through: 'developers_technologies',
      as: 'developers',
    });
  }
}

export default Technology;
