const mongoose = require('mongoose')
    Schema = mongoose.Schema
    PostInfoSchema = require('./postInfo')

var PostSchema = new Schema({
    vtype: { type: Number},
    postDetail: PostInfoSchema,
    privacy: { type: Number},
})

module.exports = mongoose.model('Post',PostSchema)