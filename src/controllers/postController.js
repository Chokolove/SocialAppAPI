const Post = require('../models/post');

exports.getPosts = async (req, reply) => {
    try {
      const posts = await Post.find()
      return posts
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Get single car by ID
  exports.getPost = async (req, reply) => {
    try {
      const id = req.params.id
      const post = await Post.findById(id)
      return post
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Add a new car
  exports.addPost = async (req, reply) => {
    try {
      const post = new Post(req.body)
      return post.save()
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Update an existing car
  exports.updatePost = async (req, reply) => {
    try {
      const id = req.params.id
      const post = req.body
      const { ...updateData } = post
      const update = await Post.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Delete a car
  exports.deletePost = async (req, reply) => {
    try {
      const id = req.params.id
      const post = await Post.findByIdAndRemove(id)
      return post
    } catch (err) {
      throw console.log(err)
    }
  }