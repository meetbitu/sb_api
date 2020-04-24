const app = require('../../src/app');

describe('\'invites\' service', () => {
  it('registered the service', () => {
    const service = app.service('invites');
    expect(service).toBeTruthy();
  });
});
