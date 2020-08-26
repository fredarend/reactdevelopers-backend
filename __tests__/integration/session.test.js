import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Autenticação', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('A autenticação deve conter credenciais válidas', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '123456' });

    expect(response.status).toBe(200);
  });

  it('Não deve ser permitida a autenticação com credenciais inválidas', async () => {
    const user = await factory.create('User', {
      password: '444333',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '123456' });

    expect(response.status).toBe(401);
  });

  it('O retorno deve conter um token de autenticação', async () => {
    const user = await factory.create('User', {
      password: '444333',
    });

    const response = await request(app)
      .post('/sessions')
      .send({ email: user.email, password: '444333' });

    expect(response.body).toHaveProperty('token');
  });
});
