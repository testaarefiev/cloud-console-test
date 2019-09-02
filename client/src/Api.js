import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

function createLog(type = 'login', at = new Date()) {
  instance.put('/logs', { type, at });
}

export default {
  createLog,
};
export { createLog };
