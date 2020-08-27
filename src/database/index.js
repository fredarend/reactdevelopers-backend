import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Technology from '../app/models/Technology';
import Developer from '../app/models/Developer';
import DeveloperTechnology from '../app/models/DeveloperTechnology';

const models = [User, Technology, Developer, DeveloperTechnology];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
