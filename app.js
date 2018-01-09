var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var purchases = require('./routes/purchases');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/purchases', purchases);

app.get('/api/purchases', (req, res) => {
  res.json([
    {
      "date": "2017-12-08",
      "id": 1,
      "amount": 9.19,
      "reason": "A-Trak Ticket"
    },
    {
      "date": "2017-12-08",
      "id": 2,
      "amount": 30,
      "reason": "Hotel Garuda Ticket"
    },
    {
      "date": "2018-01-02",
      "id": 3,
      "amount": 100,
      "reason": "Soundwave Ticket"
    }
  ]);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is running now on port ${port}`);