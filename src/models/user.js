const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  gender: {type: String},
  birthday: { type: Date},
  privacy: {type: Number, required: true, enum: [ 0,1] }
});
const EduInfoSchema = new mongoose.Schema({
  detail: { type: String },
  privacy: {type: Number, required: true, enum: [ 0,1] }
});
const WorkInfoSchema = new mongoose.Schema({
  detail: { type: String },
  privacy: {type: Number, required: true, enum: [ 0,1] }
});
const LikeInfoSchema = new mongoose.Schema({
  detail: { type: String },
  privacy: {type: Number, required: true, enum: [ 0,1] }
});


const UserSchema = new mongoose.Schema({
  user: { 
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  pass: { 
    type: String,
    required: true,
    trim: true
  },
  basicInfo: {
    type: BasicInfoSchema
  },
  eduInfos: {
    type: [EduInfoSchema],
    default: []
  },
  workInfos: {
    type: [WorkInfoSchema],
    default: []
  },
  likeInfos: {
    type: [LikeInfoSchema],
    default: []
  },
  postInfos: { 
    type: [mongoose.SchemaTypes.ObjectId] , 
    ref: 'Post',
    default: []
  },
  frineds:{
    type: [mongoose.SchemaTypes.ObjectId] , 
    ref: 'User',
    default: [] 
  }
});

module.exports = mongoose.model('User', UserSchema);