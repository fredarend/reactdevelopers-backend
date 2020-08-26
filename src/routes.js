import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import TechnologyController from './app/controllers/TechnologyController';
import DeveloperController from './app/controllers/DeveloperController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.post('/technologies', TechnologyController.store);
routes.post('/developers', DeveloperController.store);

export default routes;
