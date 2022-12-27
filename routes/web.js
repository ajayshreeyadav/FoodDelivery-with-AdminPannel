const authController = require('../app/http/controllers/authController');
const homeController = require('../app/http/controllers/homeController');
const cartController = require('../app/http/controllers/customers/cartController');

function initRoutes(app) {
  // Home page route
  app.get('/', homeController().index);
  // Cart page route
  app.get('/cart', cartController().index);
  // Login page route
  app.get('/login', authController().login);
  // Register page route
  app.get('/register', authController().register);

  app.post('/update-cart', cartController().update);
}

module.exports = initRoutes;
