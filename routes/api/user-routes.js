const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
  User.create(req.body)
    .then(data => res.json(data));
});

module.exports = router;