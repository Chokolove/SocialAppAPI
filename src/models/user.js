const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    BasicInfoSchema = require('./basicInfo'),
    EduInfoSchema = require('./eduInfo'),
    WorkInfoSchema = require('./workInfo'),
    LikeInfoSchema = require('./likeInfo');

var UserSchema = new Schema({
  user: { type: String },
  pass: { type: String},
  basicInfo: BasicInfoSchema,
  eduInfos: [EduInfoSchema],
  workInfos: [WorkInfoSchema],
  likeInfos: [LikeInfoSchema],
  // postInfos: [],
  // friendInfos: [],
  postInfo: { type: Schema.ObjectId , ref: 'PostInfoSchema'}
});

module.exports = mongoose.model('User', UserSchema);