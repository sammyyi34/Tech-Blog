const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const models = require('./models')
const exphbs = require('express-handlebars');

const PORT = 3001;
const app = express();

const hbs = exphbs.create({});

// needed for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// needed for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controllers)

// connect to database and then to the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening at localhost:${PORT}`);
  })
});