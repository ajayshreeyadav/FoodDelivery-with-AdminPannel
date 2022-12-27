const Menu = require('../../models/menu');

function homeController() {
  return {
    async index(req, res) {
      const pizzas = await Menu.find();

      return res.render('home', { pizzas: pizzas });

      // Second Way to fetch data

      // Menu.find().then(function (pizzas) {
      //   console.log(pizzas);
      //   return res.render('home', { pizzas: pizzas });
      // });
    },
  };
}

module.exports = homeController;
