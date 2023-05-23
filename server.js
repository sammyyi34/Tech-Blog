const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const PORT = 3001;
const app = express();

app.use(controllers)

// connect to database and then to the server
sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening at localhost:${PORT}`);
  })
});