// Initializes the `invites` service on path `/invites`
const { Invites } = require('./invites.class');
const createModel = require('../../models/invites.model');
const hooks = require('./invites.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/invites', new Invites(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('invites');

  service.hooks(hooks);
};
