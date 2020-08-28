import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import TechnologyController from './app/controllers/TechnologyController';
import DeveloperController from './app/controllers/DeveloperController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.post('/technologies', TechnologyController.store);

routes.post('/developers', DeveloperController.store);
routes.get('/developers', DeveloperController.index);
routes.put('/developers/:id', DeveloperController.update);
routes.delete('/developers/:id', DeveloperController.delete);

export default routes;
