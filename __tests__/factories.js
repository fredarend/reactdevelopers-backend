import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/models/User';
import Technology from '../src/app/models/Technology';
import Developer from '../src/app/models/Developer';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Technology', Technology, {
  name: faker.lorem.word(),
});

const arrayOfTechnologies = [1];

factory.define('Developer', Developer, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  age: faker.random.number(),
  url_linkedin: faker.internet.domainName(),
  technologies: arrayOfTechnologies,
});

export default factory;
