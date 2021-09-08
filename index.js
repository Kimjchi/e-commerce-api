const express = require('express');
var logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');

var usersRouter = require('./routes/users.routes');

const port = 3000;
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);

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