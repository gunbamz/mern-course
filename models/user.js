const mongoose = require("mongoose");
// using Mongoose removes the ability of Mongo to work without a schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// this line creates a 'users' collection with the userSchema
mongoose.model('users', userSchema);
