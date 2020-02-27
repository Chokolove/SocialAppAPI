const User = require('../models/user');

exports.getUsers = async (req, reply) => {
    try {
      const users = await User.find()
      return users
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Get single car by ID
  exports.getUser = async (req, reply) => {
    try {
      const id = req.params.id
      const user = await User.findById(id)
      return user
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Add a new car
  exports.addUser = async (req, reply) => {
    try {
      const user = new User(req.body)
      return user.save()
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Update an existing car
  exports.updateUser = async (req, reply) => {
    try {
      const id = req.params.id
      const user = req.body
      const { ...updateData } = user
      const update = await User.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw console.log(err)
    }
  }
  
  // Delete a car
  exports.deleteUser = async (req, reply) => {
    try {
      const id = req.params.id
      const user = await User.findByIdAndRemove(id)
      return user
    } catch (err) {
      throw console.log(err)
    }
  }