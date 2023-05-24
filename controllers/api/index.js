const router = require('express').Router();
const { User } = require('../../models');

// localhost:3001/api
router.get('/', (req, res) =>{
  res.json('Hello');
})

router.post('/sign-up', async (req, res) => {
  const { username, password } = req.body;
  const userData = await User.create({
    username: username,
    password: password
  });
  res.json(userData);
})

module.exports = router;