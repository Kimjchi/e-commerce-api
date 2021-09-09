const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');

const usersRouter = require('./Routes/users.routes');
const productsRouter = require('./Routes/products.routes');

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'E-commerce API',
    version: '1.0.0',
    description: 'Creating an e-commerce api for a codecademy course',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(err.status || 404).json({
      message: "No such route exists"
    })
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message
    })
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});