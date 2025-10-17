const mongoose = require('mongoose');
const LeaveSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: Date,
  reason: String,
  grant: { type: String, enum: ['yes', 'no'], default: 'no' },
});
module.exports = mongoose.model('Leave', LeaveSchema);
