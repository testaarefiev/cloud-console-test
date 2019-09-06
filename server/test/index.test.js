const request = require('supertest');
const app = require('../src/app');

describe('get /', () => {
  afterEach((done) => {
    app.store.quit(done);
  });

  it('should responds with 200 status code', (done) => {
    request(app).get('/').expect(200, done);
  });
});
