const routes = require('./routes');
const mongoose = require('mongoose');
const fastify = require('fastify')({
  logger: false //toogle for mor info
});


mongoose.connect('mongodb://localhost/socialAppDb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err))


// Declare a route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()