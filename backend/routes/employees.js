const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const auth = require('../middlewares/auth');
const nodemailer = require('nodemailer');
// profile (protected)
router.get('/profile', auth, async (req, res) => {
  const emp = await Employee.findById(req.userId).select('-password');
  res.json(emp);
});

// Admin CRUD endpoints (create/list/update/delete) - for assignment Q4 admin panel part
router.get('/', async (req, res) => {
  const list = await Employee.find().select('-password');
  res.json(list);
});

router.post('/', async (req, res) => {
  // create (generate empid & password) - admin-only in real app
  const { name, email, salary } = req.body;
  const empid = 'EMP' + Math.floor(1000 + Math.random() * 9000);
  const pwd = Math.random().toString(36).slice(-8); // temporary password
  const emp = new Employee({ empid, name, email, salary, password: pwd });
  await emp.save();
  // TODO: send email via nodemailer with credentials (see below)
  res.json({ message: 'Employee created', empid, password: pwd });
  const transporter = nodemailer.createTransport({
    service: 'gmail', // या SMTP सेटिंग
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Inside create employee route, after saving:
  await emp.save();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Employee Account',
    text: `Your empid: ${empid}\nPassword: ${pwd}`,
  });
});

// update, delete similar...
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
