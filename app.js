var express = require('express');
var logger = require('morgan'); // 控制台显示req请求信息
var bodyParser = require('body-parser');  // req.body 可以访问
var index = require('./routes/index');
var track = require('./routes/track');
var login = require('./routes/login');
var quotation = require('./routes/quotation');
var consignment = require('./routes/consignment');
var shipper = require('./routes/shipper');
var company = require('./routes/company');
var plant = require('./routes/plant');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/track', track);
app.use('/login', login);
app.use('/quotation', quotation);
app.use('/consignment', consignment);
app.use('/shipper', shipper);
app.use('/company', company);
app.use('/plant', plant);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({msg: '404'});
});

module.exports = app;
