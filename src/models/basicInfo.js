const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BasicInfoSchema = new Schema({
  name: { type: String },
  gender: {type: String},
  birthday: { type: Date},
  privacy: {type: Number},
  user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = BasicInfoSchema