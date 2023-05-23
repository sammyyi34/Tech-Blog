const express = require('express');

const PORT = 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Now listening at localhost:${PORT}`);
})