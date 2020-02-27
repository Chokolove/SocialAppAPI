const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

const routes = [
  //USER
    {
      method: 'GET',
      url: '/api/users',
      handler: userController.getUsers
    },
    {
      method: 'GET',
      url: '/api/users/:id',
      handler: userController.getUser
    },
    {
      method: 'POST',
      url: '/api/users',
      handler: userController.addUser
    },
    {
      method: 'PUT',
      url: '/api/users/:id',
      handler: userController.updateUser
    },
    {
      method: 'DELETE',
      url: '/api/users/:id',
      handler: userController.deleteUser
    },
    //POST
    {
      method: 'GET',
      url: '/api/posts',
      handler: postController.getPosts
    },
    {
      method: 'GET',
      url: '/api/posts/:id',
      handler: postController.getPost
    },
    {
      method: 'POST',
      url: '/api/posts',
      handler: postController.addPost
    },
    {
      method: 'PUT',
      url: '/api/posts/:id',
      handler: postController.updatePost
    },
    {
      method: 'DELETE',
      url: '/api/posts/:id',
      handler: postController.deletePost
    }
  ]
  
  module.exports = routes