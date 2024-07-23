// routes/api/userRoutes.js
const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  // Logic for user login
});

router.post('/signup', async (req, res) => {
  // Logic for user signup
});

module.exports = router;