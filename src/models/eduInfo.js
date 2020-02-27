const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EduInfoSchema = new Schema({
  detail: { type: String },
  privacy: {type: Number},
  user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = EduInfoSchema