import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/models/User';
import Technology from '../src/app/models/Technology';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Technology', Technology, {
  technology: faker.lorem.word(),
});

export default factory;
