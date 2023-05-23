const router = require('express').Router();

// localhost:3001/
router.get('/', (req, res) => {
  res.json('Hi');
})

module.exports = router;