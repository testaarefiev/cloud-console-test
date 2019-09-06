const request = require('supertest');
const app = require('../src/app');
const config = require('../config');

afterAll((done) => {
  const { prefix } = config.redis;
  app.store.del(`${prefix}:logs`);
  app.store.del(`${prefix}:data`);
  app.store.quit(done);
});

describe('create log and data', () => {
  it('should create log with type `login` and responds with 201 status code', (done) => {
    request(app)
      .put('/api/logs')
      .send({ type: 'login', createdAt: new Date() })
      .expect(201, done);
  });

  it('should create log with type `dataAdded` and responds with 201 status code', (done) => {
    request(app)
      .put('/api/logs')
      .send({ type: 'dataAdded', createdAt: new Date() })
      .expect(201, done);
  });

  it('should create data and responds with 201 status code', (done) => {
    request(app)
      .put('/api/data')
      .send({ title: 'my data title', text: 'my data text', createdAt: new Date() })
      .expect(201, done);
  });

  it('should responds with list of two logs', (done) => {
    request(app)
      .get('/api/logs')
      .end((err, res) => {
        const { logs } = res.body;

        expect(logs).toHaveLength(2);
        expect(logs[0].type).toStrictEqual('login');
        expect(logs[1].type).toStrictEqual('dataAdded');
        done();
      });
  });

  it('should responds with list of one created data', (done) => {
    request(app)
      .get('/api/data')
      .end((err, res) => {
        const { allData } = res.body;

        expect(allData).toHaveLength(1);
        expect(allData[0].title).toStrictEqual('my data title');
        expect(allData[0].text).toStrictEqual('my data text');
        done();
      });
  });
});
