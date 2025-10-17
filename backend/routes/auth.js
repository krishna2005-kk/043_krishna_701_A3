const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Employee.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });
  res.json({ token });
});

// optional: register (admin will create employees normally)
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // generate empid simple:
  const empid = 'EMP' + Math.floor(1000 + Math.random() * 9000);
  const user = new Employee({ empid, name, email, password });
  await user.save();
  res.json({ message: 'Created', empid });
});

module.exports = router;
