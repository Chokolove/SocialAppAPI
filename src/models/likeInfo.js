const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LikeInfoSchema = new Schema({
  detail: { type: String },
  privacy: {type: Number},
  user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = LikeInfoSchema