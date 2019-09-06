const request = require('supertest');
const app = require('../src/app');

describe('get /undefined', () => {
  afterEach((done) => {
    app.store.quit(done);
  });

  it('should responds with 404 status codeif undefined route found', (done) => {
    request(app).get('/undefined').expect(404, done);
  });

  it('should responds with 404 status code and res body is test if undefined route found', (done) => {
    request(app)
      .get('/undefined')
      .set('Accept', 'text/plain')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toStrictEqual('Not found');
        return done();
      });
  });

  it('should responds with 404 status code and res body is json if undefined route found', (done) => {
    request(app)
      .get('/undefined')
      .set('Accept', 'application/json')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toStrictEqual({ message: 'Not found' });
        return done();
      });
  });

  it('should responds with 406 status code and res body is text if undefined route found', (done) => {
    request(app)
      .get('/undefined')
      .set('Accept', 'application/octet-stream')
      .expect(406)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toStrictEqual('Not Acceptable');
        return done();
      });
  });
});
