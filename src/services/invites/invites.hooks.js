const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require('feathers-authentication-hooks');

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.userId'
});

const limitToUser = setField({
  from: 'params.user._id',
  as: 'params.query.userId'
});

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      setUserId,
    ],
    update: [
      authenticate('jwt'),
      limitToUser,
    ],
    patch: [
      authenticate('jwt'),
      limitToUser,
    ],
    remove: [
      authenticate('jwt'),
      limitToUser,
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
