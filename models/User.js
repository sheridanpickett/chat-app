const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	socketID: String,
	loc: {
    type: {
      type: String,
    },
    coordinates: {
      type: [Number],
    }
  }
})

userSchema.index({ loc: "2dsphere" });

module.exports = mongoose.model('User', userSchema);
