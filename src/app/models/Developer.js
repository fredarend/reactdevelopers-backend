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
}

export default Developer;
