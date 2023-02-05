const path = require("path");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: true,
});


// Our main GET home page route, pulls from src/pages/index.hbs
fastify.get("/", function (request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = {
    greeting: "Hello Node!",
  };
  // request.query.paramName <-- a querystring example
  return reply.send("[]");
});

fastify.get('/hello', function (request, reply) {
  reply.send({ hello: 'world' })
})


// A POST route to handle form submissions
fastify.post("/", function (request, reply) {
  let params = {
    greeting: "Hello Form!",
  };
  // request.body.paramName <-- a form post example
  return reply.view("/src/pages/index.hbs", params);
});

// Recibe el objeto que vendrá desde el frontend

fastify.post('/api/scanner', {
  schema: {
    body: {
      type: 'object',
      properties: {
        url: { type: 'string' },
        puerto: { type: 'number' }
      },
      required: ['url', 'puerto']
    }
  }
}, function (request, reply) {
  const object = request.body
  console.log(object)
  
  const net = require('net');
  
  let puerto = object.puerto;
  let host = object.url;
  
  const socket = new net.Socket();
  
  socket.connect(puerto, host);
  
  
  socket.on('connect', () => {
    console.log(`El puerto ${puerto} está abierto en ${host}.`);
    socket.end();
    reply.send({ message: `El puerto ${puerto} está abierto en ${host}.` });
  });
  
  socket.on("error",(err)=>{
    console.log(err.message);
    reply.send({ message: `El puerto ${puerto} está cerrado o filtrado en ${host}.` });
  });
  
  
  
  //reply.send({ message: 'Object received' });

  
})

function concatenar(url , puerto){
  return `te devuelvo el host ${url} y el puerto ${puerto}`
}




// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
