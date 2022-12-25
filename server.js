const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;

// Assets
app.use(express.static('public'));

// set Template Engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// Home page route
app.get('/', (req, res) => {
  res.render('home');
});

// Cart page route
app.get('/cart', (req, res) => {
  res.render('customers/cart');
});

// Login page route
app.get('/login', (req, res) => {
  res.render('auth/login');
});

// Register page route
app.get('/register', (req, res) => {
  res.render('auth/register');
});

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});
