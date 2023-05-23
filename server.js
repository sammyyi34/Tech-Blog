const express = require('express');
const controllers = require('./controllers');

const PORT = 3001;
const app = express();

app.use(controllers)

app.listen(PORT, () => {
  console.log(`Now listening at localhost:${PORT}`);
})