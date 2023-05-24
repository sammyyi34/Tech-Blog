const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const models = require('./models')

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controllers)

// connect to database and then to the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening at localhost:${PORT}`);
  })
});