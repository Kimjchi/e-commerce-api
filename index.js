const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { body, check } = require('express-validator');

const app = express();

app.use(compression());
app.use(helmet());

const isProduction = process.env.NODE_ENV === 'production';
const origin = {
  origin: isProduction ? 'https://e-commerce-jeremy.herokuapp.com' : '*',
};

app.use(cors(origin));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // 10 requests,
});

app.use(limiter);

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


const port = process.env.PORT || 5000;
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the e-commerce api by Jérémy. Visit my github to see the routes available: https://github.com/Kimjchi/e-commerce-api');
});

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
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