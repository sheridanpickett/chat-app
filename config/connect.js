const mongoose = require('mongoose');

const dbString = 'mongodb+srv://sheridan:123123234@cluster0-okzqv.mongodb.net/test?retryWrites=true';
const connectDB = async () => {
  try {
    let db = await mongoose.connect(dbString, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("connected to db")
  } catch(err) {
    console.log(err);
  }
}

module.exports = connectDB
