const users = require('./users/users.service.js');
const invites = require('./invites/invites.service.js');
const orders = require('./orders/orders.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(invites);
  app.configure(orders);
};
