const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user');

var PostInfoSchema = new Schema({
  img: { type: String },
  detail: {type: Number},
  owner: User,
  post: { type: Schema.ObjectId, ref: 'Post' }
});

module.exports = PostInfoSchema