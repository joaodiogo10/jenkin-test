const request = require('supertest');
const app = require('../app/server'); // Adjust the path as necessary

describe('Express API', () => {
  it('should respond with a JSON object on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello, World!');
    expect(response.body).toHaveProperty('timestamp');
  });

  it('should respond with valid data for GET /data?id=1', async () => {
    const response = await request(app).get('/data?id=1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data', 'This is data from /data1 endpoint');
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('timestamp');
  });

  it('should respond with valid data for GET /data?id=2', async () => {
    const response = await request(app).get('/data?id=2');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data', 'This is data from /data2 endpoint');
    expect(response.body).toHaveProperty('id', 2);
    expect(response.body).toHaveProperty('timestamp');
  });

  it('should respond with 400 for invalid id parameter', async () => {
    const response = await request(app).get('/data?id=3');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid id parameter');
  });

  it('should respond with 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Not Found');
  });
});
