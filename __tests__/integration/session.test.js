import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Authentication must contain valid credentials', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '123456' });

    expect(response.status).toBe(200);
  });

  it('Authentication with invalid credentials should not be allowed', async () => {
    const user = await factory.create('User', {
      password: '444333',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '123456' });

    expect(response.status).toBe(401);
  });

  it('The return must contain an authentication token', async () => {
    const user = await factory.create('User', {
      password: '444333',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '444333' });

    expect(response.body).toHaveProperty('token');
  });
});
