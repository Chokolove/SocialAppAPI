const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    vtype: { 
        type: String,
        enum: ['post','comment'],
        required: true
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,
        refer: 'Post', 
        default: null
    },
    img: { type: String, default: null },
    detail: { type: String, default: null },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        refer: 'User',
        required: true
    },
    privacy: { type: Number, required: true, enum: [ 0,1] },
})

module.exports = mongoose.model('Post', PostSchema)