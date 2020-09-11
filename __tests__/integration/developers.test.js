import request from 'supertest';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Developer', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('It should not allow the registration of a developer with invalid fields', async () => {
    const developer = await factory.attrs('Developer', {
      name: '',
    });

    const response = await request(app)
      .post('/developers')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk4NDA1Mjg4LCJleHAiOjE1OTkwMTAwODh9.0DwQav-eEz5p7ahQcs7v3fe4aHM5PvO-NzDjyRvsSGo'
      )
      .send(developer);

    expect(response.status).toBe(400);
  });

  it('It should be possible to register a developer', async () => {
    const developer = await factory.attrs('Developer');

    const response = await request(app)
      .post('/developers')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk4NjM1NjQ1LCJleHAiOjE1OTkyNDA0NDV9.14ItnZBLBB9OWvLo2zCVzIyq1gwx7lj-eZn0YXhWfvg'
      )
      .send(developer);

    expect(response.body).toHaveProperty('id');
  });
});
