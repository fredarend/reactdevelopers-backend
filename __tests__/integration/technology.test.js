import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Technology', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Não possibilitar cadastro de uma tecnologia com token inválido', async () => {
    const technology = await factory.attrs('Technology');

    const response = await request(app)
      .post('/technology')
      .send(technology);

    expect(response.status).toBe(401);
  });

  it('Possibilitar cadastro de uma tecnologia', async () => {
    const technology = await factory.attrs('Technology');

    const response = await request(app)
      .post('/technologies')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk4NDA1Mjg4LCJleHAiOjE1OTkwMTAwODh9.0DwQav-eEz5p7ahQcs7v3fe4aHM5PvO-NzDjyRvsSGo'
      )
      .send(technology);

    expect(response.body).toHaveProperty('technology');
  });

  it('Não possibilitar cadastro de uma tecnologia campos inválidos', async () => {
    const technology = await factory.attrs('Technology', {
      technology: '',
    });

    const response = await request(app)
      .post('/technologies')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk4NDA1Mjg4LCJleHAiOjE1OTkwMTAwODh9.0DwQav-eEz5p7ahQcs7v3fe4aHM5PvO-NzDjyRvsSGo'
      )
      .send(technology);

    expect(response.status).toBe(400);
  });
});
