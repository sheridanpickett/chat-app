const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	room: String,
  msg: String,
  userName: String,
  dateTime: {
		dateString: String,
		dateInt: Number
	}
})

module.exports = mongoose.model('Message', messageSchema);
