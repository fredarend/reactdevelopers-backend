import Sequelize, { Model } from 'sequelize';

class DeveloperTechnology extends Model {
  static init(sequelize) {
    super.init(
      {
        developer_id: Sequelize.INTEGER,
        technology_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'developers_technologies',
      }
    );

    return this;
  }
}

export default DeveloperTechnology;
