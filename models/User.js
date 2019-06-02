const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	socketID: String,
	location: {
    type: {
      type: String,
    },
    coordinates: {
      type: [Number],
    }
  }
})

userSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('User', userSchema);
