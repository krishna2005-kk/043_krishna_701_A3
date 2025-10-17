const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');
const auth = require('../middlewares/auth');

// list leaves for logged in user
router.get('/', auth, async (req, res) => {
  const leaves = await Leave.find({ employee: req.userId });
  res.json(leaves);
});

// create leave
router.post('/', auth, async (req, res) => {
  const { date, reason } = req.body;
  const leave = new Leave({ employee: req.userId, date, reason, grant: 'no' });
  await leave.save();
  res.json({ message: 'Applied' });
});

module.exports = router;
